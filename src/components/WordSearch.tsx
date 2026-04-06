import React, { useState, useEffect, useRef, useCallback } from 'react';

interface WordSearchProps {
  difficulty?: 'easy' | 'medium' | 'hard';
}

interface Word {
  word: string;
  found: boolean;
  direction: { dx: number; dy: number };
  startPos: { x: number; y: number };
}

interface Position {
  x: number;
  y: number;
}

// Word lists by difficulty
const wordLists = {
  easy: ['CAT', 'DOG', 'SUN', 'RUN', 'FUN', 'BIG', 'RED', 'BOX', 'CUP', 'HAT', 'PEN', 'MAP', 'BUS', 'CAR', 'TEN'],
  medium: ['APPLE', 'BREAD', 'CHEESE', 'DANCE', 'EAGLE', 'FLUTE', 'GRAPE', 'HOUSE', 'JUICE', 'KNIFE', 'LEMON', 'MANGO', 'NIGHT', 'OCEAN', 'PIANO'],
  hard: ['ENGLISH', 'FRIEND', 'GARDEN', 'HAPPEN', 'ISLAND', 'JUNGLE', 'KNIGHT', 'LIBRARY', 'MONSTER', 'NEIGHBOR', 'ORANGE', 'PENGUIN', 'QUARTER', 'RAINBOW', 'SUNSHINE']
};

const DIRECTIONS = [
  { dx: 1, dy: 0, name: 'right' },
  { dx: -1, dy: 0, name: 'left' },
  { dx: 0, dy: 1, name: 'down' },
  { dx: 0, dy: -1, name: 'up' },
  { dx: 1, dy: 1, name: 'down-right' },
  { dx: -1, dy: -1, name: 'up-left' },
  { dx: 1, dy: -1, name: 'up-right' },
  { dx: -1, dy: 1, name: 'down-left' },
];

const GRID_SIZES = {
  easy: 10,
  medium: 12,
  hard: 15,
};

export default function WordSearch({ difficulty = 'medium' }: WordSearchProps) {
  const [gridSize] = useState(GRID_SIZES[difficulty]);
  const [grid, setGrid] = useState<string[][]>([]);
  const [words, setWords] = useState<Word[]>([]);
  const [selectedCells, setSelectedCells] = useState<Position[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [startCell, setStartCell] = useState<Position | null>(null);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'paused'>('playing');
  const [showWordList, setShowWordList] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate a new puzzle
  const generatePuzzle = useCallback(() => {
    const wordList = wordLists[difficulty];
    const numWords = difficulty === 'easy' ? 6 : difficulty === 'medium' ? 8 : 10;
    const selectedWords = wordList.slice(0, numWords);
    
    // Create empty grid
    const newGrid: string[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));
    const placedWords: Word[] = [];
    
    // Sort words by length (longer words first - easier to place)
    const sortedWords = [...selectedWords].sort((a, b) => b.length - a.length);
    
    for (const word of sortedWords) {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;
      
      while (!placed && attempts < maxAttempts) {
        attempts++;
        const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
        
        // Calculate valid starting positions
        let startX: number, startY: number;
        
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
        
        // Check if word fits
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const x = startX + i * direction.dx;
          const y = startY + i * direction.dy;
          
          if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
            canPlace = false;
            break;
          }
          
          if (newGrid[y][x] !== '' && newGrid[y][x] !== word[i]) {
            canPlace = false;
            break;
          }
        }
        
        if (canPlace) {
          // Place the word
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
    
    // Fill empty cells with random letters
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (newGrid[y][x] === '') {
          newGrid[y][x] = letters[Math.floor(Math.random() * letters.length)];
        }
      }
    }
    
    setGrid(newGrid);
    setWords(placedWords);
    setSelectedCells([]);
    setScore(0);
    setTimeElapsed(0);
    setGameState('playing');
    setShowWordList(true);
  }, [difficulty, gridSize]);

  // Initialize puzzle
  useEffect(() => {
    generatePuzzle();
  }, [generatePuzzle]);

  // Timer
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
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

  // Check if selected cells form a valid word
  const checkSelection = useCallback((cells: Position[]) => {
    if (cells.length < 2) return null;
    
    const selectedWord = cells.map(pos => grid[pos.y][pos.x]).join('');
    const reversedWord = selectedWord.split('').reverse().join('');
    
    for (const word of words) {
      if (!word.found && (selectedWord === word.word || reversedWord === word.word)) {
        return word;
      }
    }
    return null;
  }, [grid, words]);

  // Handle cell selection start (mouse/touch)
  const handleSelectionStart = (x: number, y: number) => {
    if (gameState !== 'playing') return;
    setIsSelecting(true);
    setStartCell({ x, y });
    setSelectedCells([{ x, y }]);
  };

  // Handle cell selection move
  const handleSelectionMove = (x: number, y: number) => {
    if (!isSelecting || !startCell || gameState !== 'playing') return;
    
    const dx = x - startCell.x;
    const dy = y - startCell.y;
    
    // Only allow straight lines or 45-degree diagonals
    if (dx !== 0 && dy !== 0 && Math.abs(dx) !== Math.abs(dy)) return;
    
    // Generate cells in line
    const stepX = dx === 0 ? 0 : dx > 0 ? 1 : -1;
    const stepY = dy === 0 ? 0 : dy > 0 ? 1 : -1;
    const distance = Math.max(Math.abs(dx), Math.abs(dy));
    
    const newCells: Position[] = [];
    for (let i = 0; i <= distance; i++) {
      newCells.push({
        x: startCell.x + i * stepX,
        y: startCell.y + i * stepY
      });
    }
    
    setSelectedCells(newCells);
  };

  // Handle selection end
  const handleSelectionEnd = () => {
    if (!isSelecting) return;
    setIsSelecting(false);
    
    const foundWord = checkSelection(selectedCells);
    if (foundWord) {
      setWords(prev => prev.map(w => 
        w.word === foundWord.word ? { ...w, found: true } : w
      ));
      setScore(prev => prev + foundWord.word.length * 10);
      
      // Check if all words found
      const updatedWords = words.map(w => 
        w.word === foundWord.word ? { ...w, found: true } : w
      );
      if (updatedWords.every(w => w.found)) {
        setGameState('won');
        // Add time bonus
        const timeBonus = Math.max(0, 300 - timeElapsed) * 2;
        setScore(prev => prev + timeBonus);
      }
    }
    
    setSelectedCells([]);
    setStartCell(null);
  };

  // Handle touch move for mobile
  const handleTouchMove = (e: React.TouchEvent) => {
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

  // Check if a cell is selected
  const isCellSelected = (x: number, y: number) => {
    return selectedCells.some(cell => cell.x === x && cell.y === y);
  };

  // Check if a cell is part of a found word
  const isCellInFoundWord = (x: number, y: number) => {
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

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get difficulty display name
  const difficultyLabel = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

  if (grid.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="word-search-container">
      {/* Header Stats */}
      <div className="bg-neutral-800 rounded-xl p-4 mb-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-xs text-neutral-400 uppercase tracking-wider">Score</div>
              <div className="text-2xl font-bold text-white">{score}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-neutral-400 uppercase tracking-wider">Time</div>
              <div className="text-2xl font-bold text-white">{formatTime(timeElapsed)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-neutral-400 uppercase tracking-wider">Words</div>
              <div className="text-2xl font-bold text-white">
                {words.filter(w => w.found).length}/{words.length}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
              {difficultyLabel}
            </span>
            <button
              onClick={() => setShowWordList(!showWordList)}
              className="px-3 py-1 bg-neutral-700 hover:bg-neutral-600 text-white rounded-full text-sm transition-colors"
            >
              {showWordList ? 'Hide List' : 'Show List'}
            </button>
            <button
              onClick={generatePuzzle}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors"
            >
              New Game
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Word List */}
        <div className={`lg:w-48 ${showWordList ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-neutral-800 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3">Find These Words</h3>
            <div className="space-y-2">
              {words.map((word, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${
                    word.found ? 'text-green-400' : 'text-neutral-400'
                  }`}
                >
                  {word.found ? (
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  <span className={word.found ? 'line-through' : ''}>{word.word}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game Grid */}
        <div className="flex-1">
          <div
            ref={gridRef}
            className="grid gap-1 select-none touch-none mx-auto"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
              maxWidth: `${gridSize * 40}px`,
            }}
            onMouseDown={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const cellSize = rect.width / gridSize;
              const x = Math.floor((e.clientX - rect.left) / cellSize);
              const y = Math.floor((e.clientY - rect.top) / cellSize);
              handleSelectionStart(x, y);
            }}
            onMouseMove={(e) => {
              if (!isSelecting) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const cellSize = rect.width / gridSize;
              const x = Math.floor((e.clientX - rect.left) / cellSize);
              const y = Math.floor((e.clientY - rect.top) / cellSize);
              handleSelectionMove(x, y);
            }}
            onMouseUp={handleSelectionEnd}
            onMouseLeave={handleSelectionEnd}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              const rect = e.currentTarget.getBoundingClientRect();
              const cellSize = rect.width / gridSize;
              const x = Math.floor((touch.clientX - rect.left) / cellSize);
              const y = Math.floor((touch.clientY - rect.top) / cellSize);
              handleSelectionStart(x, y);
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleSelectionEnd}
          >
            {grid.map((row, y) =>
              row.map((letter, x) => {
                const selected = isCellSelected(x, y);
                const inFoundWord = isCellInFoundWord(x, y);
                
                return (
                  <div
                    key={`${x}-${y}`}
                    className={`
                      aspect-square flex items-center justify-center
                      text-sm sm:text-base font-bold rounded
                      transition-all duration-150 cursor-pointer
                      ${selected
                        ? 'bg-green-500 text-white scale-105 shadow-lg z-10'
                        : inFoundWord
                          ? 'bg-green-500/30 text-green-300'
                          : 'bg-neutral-700 text-white hover:bg-neutral-600'
                      }
                    `}
                    style={{
                      minWidth: '24px',
                      minHeight: '24px',
                    }}
                  >
                    {letter}
                  </div>
                );
              })
            )}
          </div>
          
          {/* Instructions */}
          <div className="mt-4 text-center text-neutral-500 text-sm">
            {isSelecting ? 'Drag to select word' : 'Click and drag to select words'}
          </div>
        </div>
      </div>

      {/* Win Modal */}
      {gameState === 'won' && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 rounded-2xl p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-2">Congratulations!</h2>
            <p className="text-neutral-400 mb-6">You found all the words!</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-neutral-800 rounded-xl p-4">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Score</div>
                <div className="text-3xl font-bold text-green-400">{score}</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-4">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Time</div>
                <div className="text-3xl font-bold text-blue-400">{formatTime(timeElapsed)}</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={generatePuzzle}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Play Again
              </button>
              <a
                href="/games/"
                className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors block text-center"
              >
                More Games
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
