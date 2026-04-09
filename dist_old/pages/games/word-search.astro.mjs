import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DZoc_vH5.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$AdUnit } from '../../chunks/AdUnit_CfA3FelO.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
export { renderers } from '../../renderers.mjs';

const wordLists = {
  easy: ["CAT", "DOG", "SUN", "RUN", "FUN", "BIG", "RED", "BOX", "CUP", "HAT", "PEN", "MAP", "BUS", "CAR", "TEN"],
  medium: ["APPLE", "BREAD", "CHEESE", "DANCE", "EAGLE", "FLUTE", "GRAPE", "HOUSE", "JUICE", "KNIFE", "LEMON", "MANGO", "NIGHT", "OCEAN", "PIANO"],
  hard: ["ENGLISH", "FRIEND", "GARDEN", "HAPPEN", "ISLAND", "JUNGLE", "KNIGHT", "LIBRARY", "MONSTER", "NEIGHBOR", "ORANGE", "PENGUIN", "QUARTER", "RAINBOW", "SUNSHINE"]
};
const DIRECTIONS = [
  { dx: 1, dy: 0, name: "right" },
  { dx: -1, dy: 0, name: "left" },
  { dx: 0, dy: 1, name: "down" },
  { dx: 0, dy: -1, name: "up" },
  { dx: 1, dy: 1, name: "down-right" },
  { dx: -1, dy: -1, name: "up-left" },
  { dx: 1, dy: -1, name: "up-right" },
  { dx: -1, dy: 1, name: "down-left" }
];
const GRID_SIZES = {
  easy: 10,
  medium: 12,
  hard: 15
};
function WordSearch({ difficulty = "medium" }) {
  const [gridSize] = useState(GRID_SIZES[difficulty]);
  const [grid, setGrid] = useState([]);
  const [words, setWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [startCell, setStartCell] = useState(null);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameState, setGameState] = useState("playing");
  const [showWordList, setShowWordList] = useState(true);
  const gridRef = useRef(null);
  const timerRef = useRef(null);
  const generatePuzzle = useCallback(() => {
    const wordList = wordLists[difficulty];
    const numWords = difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 10;
    const selectedWords = wordList.slice(0, numWords);
    const newGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(""));
    const placedWords = [];
    const sortedWords = [...selectedWords].sort((a, b) => b.length - a.length);
    for (const word of sortedWords) {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;
      while (!placed && attempts < maxAttempts) {
        attempts++;
        const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
        let startX, startY;
        if (direction.dx > 0) {
          startX = Math.floor(Math.random() * (gridSize - word.length + 1));
        } else if (direction.dx < 0) {
          startX = Math.floor(Math.random() * (gridSize - word.length + 1)) + word.length - 1;
        } else {
          startX = Math.floor(Math.random() * gridSize);
        }
        if (direction.dy > 0) {
          startY = Math.floor(Math.random() * (gridSize - word.length + 1));
        } else if (direction.dy < 0) {
          startY = Math.floor(Math.random() * (gridSize - word.length + 1)) + word.length - 1;
        } else {
          startY = Math.floor(Math.random() * gridSize);
        }
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const x = startX + i * direction.dx;
          const y = startY + i * direction.dy;
          if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
            canPlace = false;
            break;
          }
          if (newGrid[y][x] !== "" && newGrid[y][x] !== word[i]) {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            const x = startX + i * direction.dx;
            const y = startY + i * direction.dy;
            newGrid[y][x] = word[i];
          }
          placedWords.push({
            word,
            found: false,
            direction,
            startPos: { x: startX, y: startY }
          });
          placed = true;
        }
      }
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (newGrid[y][x] === "") {
          newGrid[y][x] = letters[Math.floor(Math.random() * letters.length)];
        }
      }
    }
    setGrid(newGrid);
    setWords(placedWords);
    setSelectedCells([]);
    setScore(0);
    setTimeElapsed(0);
    setGameState("playing");
    setShowWordList(true);
  }, [difficulty, gridSize]);
  useEffect(() => {
    generatePuzzle();
  }, [generatePuzzle]);
  useEffect(() => {
    if (gameState === "playing") {
      timerRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1e3);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameState]);
  const checkSelection = useCallback((cells) => {
    if (cells.length < 2) return null;
    const selectedWord = cells.map((pos) => grid[pos.y][pos.x]).join("");
    const reversedWord = selectedWord.split("").reverse().join("");
    for (const word of words) {
      if (!word.found && (selectedWord === word.word || reversedWord === word.word)) {
        return word;
      }
    }
    return null;
  }, [grid, words]);
  const handleSelectionStart = (x, y) => {
    if (gameState !== "playing") return;
    setIsSelecting(true);
    setStartCell({ x, y });
    setSelectedCells([{ x, y }]);
  };
  const handleSelectionMove = (x, y) => {
    if (!isSelecting || !startCell || gameState !== "playing") return;
    const dx = x - startCell.x;
    const dy = y - startCell.y;
    if (dx !== 0 && dy !== 0 && Math.abs(dx) !== Math.abs(dy)) return;
    const stepX = dx === 0 ? 0 : dx > 0 ? 1 : -1;
    const stepY = dy === 0 ? 0 : dy > 0 ? 1 : -1;
    const distance = Math.max(Math.abs(dx), Math.abs(dy));
    const newCells = [];
    for (let i = 0; i <= distance; i++) {
      newCells.push({
        x: startCell.x + i * stepX,
        y: startCell.y + i * stepY
      });
    }
    setSelectedCells(newCells);
  };
  const handleSelectionEnd = () => {
    if (!isSelecting) return;
    setIsSelecting(false);
    const foundWord = checkSelection(selectedCells);
    if (foundWord) {
      setWords((prev) => prev.map(
        (w) => w.word === foundWord.word ? { ...w, found: true } : w
      ));
      setScore((prev) => prev + foundWord.word.length * 10);
      const updatedWords = words.map(
        (w) => w.word === foundWord.word ? { ...w, found: true } : w
      );
      if (updatedWords.every((w) => w.found)) {
        setGameState("won");
        const timeBonus = Math.max(0, 300 - timeElapsed) * 2;
        setScore((prev) => prev + timeBonus);
      }
    }
    setSelectedCells([]);
    setStartCell(null);
  };
  const handleTouchMove = (e) => {
    if (!gridRef.current || !isSelecting) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = gridRef.current.getBoundingClientRect();
    const cellSize = rect.width / gridSize;
    const x = Math.floor((touch.clientX - rect.left) / cellSize);
    const y = Math.floor((touch.clientY - rect.top) / cellSize);
    if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
      handleSelectionMove(x, y);
    }
  };
  const isCellSelected = (x, y) => {
    return selectedCells.some((cell) => cell.x === x && cell.y === y);
  };
  const isCellInFoundWord = (x, y) => {
    for (const word of words) {
      if (word.found) {
        for (let i = 0; i < word.word.length; i++) {
          const wx = word.startPos.x + i * word.direction.dx;
          const wy = word.startPos.y + i * word.direction.dy;
          if (wx === x && wy === y) return true;
        }
      }
    }
    return false;
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const difficultyLabel = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  if (grid.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsx("div", { className: "animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "word-search-container", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-neutral-800 rounded-xl p-4 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-400 uppercase tracking-wider", children: "Score" }),
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: score })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-400 uppercase tracking-wider", children: "Time" }),
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: formatTime(timeElapsed) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-400 uppercase tracking-wider", children: "Words" }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-white", children: [
            words.filter((w) => w.found).length,
            "/",
            words.length
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium", children: difficultyLabel }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowWordList(!showWordList),
            className: "px-3 py-1 bg-neutral-700 hover:bg-neutral-600 text-white rounded-full text-sm transition-colors",
            children: showWordList ? "Hide List" : "Show List"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: generatePuzzle,
            className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors",
            children: "New Game"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: `lg:w-48 ${showWordList ? "block" : "hidden lg:block"}`, children: /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800 rounded-xl p-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-3", children: "Find These Words" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: words.map((word, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex items-center gap-2 ${word.found ? "text-green-400" : "text-neutral-400"}`,
            children: [
              word.found ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-green-500 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }),
              /* @__PURE__ */ jsx("span", { className: word.found ? "line-through" : "", children: word.word })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: gridRef,
            className: "grid gap-1 select-none touch-none mx-auto",
            style: {
              gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
              maxWidth: `${gridSize * 40}px`
            },
            onMouseDown: (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const cellSize = rect.width / gridSize;
              const x = Math.floor((e.clientX - rect.left) / cellSize);
              const y = Math.floor((e.clientY - rect.top) / cellSize);
              handleSelectionStart(x, y);
            },
            onMouseMove: (e) => {
              if (!isSelecting) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const cellSize = rect.width / gridSize;
              const x = Math.floor((e.clientX - rect.left) / cellSize);
              const y = Math.floor((e.clientY - rect.top) / cellSize);
              handleSelectionMove(x, y);
            },
            onMouseUp: handleSelectionEnd,
            onMouseLeave: handleSelectionEnd,
            onTouchStart: (e) => {
              const touch = e.touches[0];
              const rect = e.currentTarget.getBoundingClientRect();
              const cellSize = rect.width / gridSize;
              const x = Math.floor((touch.clientX - rect.left) / cellSize);
              const y = Math.floor((touch.clientY - rect.top) / cellSize);
              handleSelectionStart(x, y);
            },
            onTouchMove: handleTouchMove,
            onTouchEnd: handleSelectionEnd,
            children: grid.map(
              (row, y) => row.map((letter, x) => {
                const selected = isCellSelected(x, y);
                const inFoundWord = isCellInFoundWord(x, y);
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `
                      aspect-square flex items-center justify-center
                      text-sm sm:text-base font-bold rounded
                      transition-all duration-150 cursor-pointer
                      ${selected ? "bg-green-500 text-white scale-105 shadow-lg z-10" : inFoundWord ? "bg-green-500/30 text-green-300" : "bg-neutral-700 text-white hover:bg-neutral-600"}
                    `,
                    style: {
                      minWidth: "24px",
                      minHeight: "24px"
                    },
                    children: letter
                  },
                  `${x}-${y}`
                );
              })
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-4 text-center text-slate-400 text-sm", children: isSelecting ? "Drag to select word" : "Click and drag to select words" })
      ] })
    ] }),
    gameState === "won" && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 rounded-2xl p-8 max-w-md w-full text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: "🎉" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: "Congratulations!" }),
      /* @__PURE__ */ jsx("p", { className: "text-neutral-400 mb-6", children: "You found all the words!" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800 rounded-xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-400 uppercase tracking-wider", children: "Score" }),
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-green-400", children: score })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800 rounded-xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-400 uppercase tracking-wider", children: "Time" }),
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400", children: formatTime(timeElapsed) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: generatePuzzle,
            className: "w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors",
            children: "Play Again"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/games/",
            className: "w-full bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors block text-center",
            children: "More Games"
          }
        )
      ] })
    ] }) })
  ] });
}

const $$Astro = createAstro("https://learnenglish.life");
const $$WordSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WordSearch;
  const difficulty = Astro2.url.searchParams.get("difficulty") || "medium";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Word Search Game - Learn English with Fun Puzzles", "description": "Play our free Word Search puzzle game! Find hidden English words in the grid. Perfect for vocabulary building and fun English practice. Mobile-friendly and no signup required." }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="bg-gradient-to-r from-green-600 to-emerald-600 py-8"> <div class="max-w-6xl mx-auto px-4"> <div class="text-center text-white"> <div class="inline-flex items-center gap-2 px-4 py-1 bg-slate-900/60/20 rounded-full text-sm mb-4"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Interactive Games
</div> <h1 class="text-3xl md:text-4xl font-bold mb-2">Word Search Challenge</h1> <p class="text-lg text-green-100 max-w-2xl mx-auto">
Find the hidden English words in the grid. Click and drag to select letters!
</p> </div> </div> </section>  <section class="bg-neutral-900/40 py-4"> <div class="max-w-6xl mx-auto px-4"> <div class="flex flex-wrap justify-center gap-2"> <a href="?difficulty=easy"${addAttribute([
    "px-4 py-2 rounded-full font-medium transition-all",
    difficulty === "easy" ? "bg-green-600 text-white shadow-md" : "bg-slate-900/60 text-slate-300 hover:bg-green-950/60 hover:text-green-600"
  ], "class:list")}>
Easy (10×10)
</a> <a href="?difficulty=medium"${addAttribute([
    "px-4 py-2 rounded-full font-medium transition-all",
    difficulty === "medium" ? "bg-green-600 text-white shadow-md" : "bg-slate-900/60 text-slate-300 hover:bg-green-950/60 hover:text-green-600"
  ], "class:list")}>
Medium (12×12)
</a> <a href="?difficulty=hard"${addAttribute([
    "px-4 py-2 rounded-full font-medium transition-all",
    difficulty === "hard" ? "bg-green-600 text-white shadow-md" : "bg-slate-900/60 text-slate-300 hover:bg-green-950/60 hover:text-green-600"
  ], "class:list")}>
Hard (15×15)
</a> </div> </div> </section>  <section class="py-8 bg-neutral-900 min-h-[600px]"> <div class="max-w-6xl mx-auto px-4"> ${renderComponent($$result2, "WordSearch", WordSearch, { "client:load": true, "difficulty": difficulty, "client:component-hydration": "load", "client:component-path": "/var/www/learnenglish.life/src/components/WordSearch", "client:component-export": "default" })} </div> </section>  <div class="py-4 bg-neutral-900/40"> <div class="max-w-6xl mx-auto px-4"> ${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "horizontal" })} </div> </div>  <section class="py-12 bg-slate-900/60"> <div class="max-w-4xl mx-auto px-4"> <h2 class="text-2xl font-bold text-center text-gray-100 mb-8">How to Play</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <div class="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-2xl">1️⃣</span> </div> <h3 class="font-semibold text-gray-100 mb-2">Look at the Word List</h3> <p class="text-slate-300 text-sm">Check which words you need to find in the puzzle.</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-2xl">2️⃣</span> </div> <h3 class="font-semibold text-gray-100 mb-2">Click and Drag</h3> <p class="text-slate-300 text-sm">Click on a letter and drag to select a word in any direction.</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-2xl">3️⃣</span> </div> <h3 class="font-semibold text-gray-100 mb-2">Score Points</h3> <p class="text-slate-300 text-sm">Find all words as fast as you can for a higher score!</p> </div> </div> </div> </section>  <section class="py-12 bg-green-950/60"> <div class="max-w-4xl mx-auto px-4"> <h2 class="text-2xl font-bold text-center text-gray-100 mb-8">English Learning Tips</h2> <div class="grid md:grid-cols-2 gap-6"> <div class="bg-slate-900/60 rounded-xl p-6 shadow-sm"> <h3 class="font-semibold text-green-300 mb-3">📚 Build Your Vocabulary</h3> <p class="text-slate-300 text-sm">Each puzzle uses real English words. Try to learn the meaning of words you don't know!</p> <a href="/guides/" class="inline-block mt-3 text-green-600 hover:text-green-300 font-medium text-sm">
Browse Study Guides →
</a> </div> <div class="bg-slate-900/60 rounded-xl p-6 shadow-sm"> <h3 class="font-semibold text-green-300 mb-3">⏱️ Practice Regularly</h3> <p class="text-slate-300 text-sm">Short practice sessions every day are more effective than long study marathons.</p> <a href="/tools/" class="inline-block mt-3 text-green-600 hover:text-green-300 font-medium text-sm">
Explore More Tools →
</a> </div> </div> </div> </section>  <section class="py-12 bg-slate-900/60"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-2xl font-bold text-center text-gray-100 mb-8">More Games to Try</h2> <div class="grid md:grid-cols-3 gap-6"> <a href="/games/vocabulary/" class="group block bg-neutral-950/60 rounded-xl p-6 hover:bg-green-950/60 transition-colors"> <div class="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors"> <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> <h3 class="font-semibold text-gray-100 mb-1">Vocabulary Quiz</h3> <p class="text-slate-300 text-sm">Test your English knowledge with multiple choice questions.</p> </a> <a href="/games/grammar-challenge/" class="group block bg-neutral-950/60 rounded-xl p-6 hover:bg-green-950/60 transition-colors"> <div class="w-12 h-12 bg-purple-900/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors"> <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> </div> <h3 class="font-semibold text-gray-100 mb-1">Grammar Challenge</h3> <p class="text-slate-300 text-sm">Practice grammar with fill-in-the-blank sentences.</p> </a> <a href="/games/" class="group block bg-neutral-950/60 rounded-xl p-6 hover:bg-green-950/60 transition-colors"> <div class="w-12 h-12 bg-orange-900/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors"> <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path> </svg> </div> <h3 class="font-semibold text-gray-100 mb-1">All Games</h3> <p class="text-slate-300 text-sm">Explore our full collection of English learning games.</p> </a> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/var/www/learnenglish.life/src/pages/games/word-search.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/games/word-search.astro";
const $$url = "/games/word-search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WordSearch,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
