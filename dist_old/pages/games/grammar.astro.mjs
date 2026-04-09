import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DZoc_vH5.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useCallback } from 'react';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_BqrSaoVo.mjs';
export { renderers } from '../../renderers.mjs';

const categories = [
  { id: "fill-blank", name: "Fill in the Blank", icon: "📝", description: "Complete sentences with correct words", color: "bg-blue-600" },
  { id: "tense", name: "Verb Tenses", icon: "⏰", description: "Present, past, and future tenses", color: "bg-purple-600" },
  { id: "article", name: "Articles", icon: "📰", description: "a, an, and the usage", color: "bg-amber-600" },
  { id: "preposition", name: "Prepositions", icon: "🗺️", description: "in, on, at, for, to, and more", color: "bg-emerald-700" }
];
const grammarQuestions = [
  // Fill in the Blank - A1/A2 Level
  {
    id: "fb-1",
    type: "fill-blank",
    sentence: ["She", "to the store yesterday."],
    blankPosition: 1,
    options: ["go", "goes", "went", "going"],
    correctAnswer: "went",
    explanation: 'Use "went" for past tense of "go". This is a regular verb pattern.',
    level: "A2"
  },
  {
    id: "fb-2",
    type: "fill-blank",
    sentence: ["I have been learning English", "three years."],
    blankPosition: 0,
    options: ["for", "since", "during", "while"],
    correctAnswer: "for",
    explanation: 'Use "for" with a period of time (three years). Use "since" with a starting point.',
    level: "A2"
  },
  {
    id: "fb-3",
    type: "fill-blank",
    sentence: ["The book is", "the table and the chair."],
    blankPosition: 0,
    options: ["between", "among", "in", "on"],
    correctAnswer: "between",
    explanation: 'Use "between" for two items. Use "among" for three or more.',
    level: "B1"
  },
  {
    id: "fb-4",
    type: "fill-blank",
    sentence: ["If I", "rich, I would travel the world."],
    blankPosition: 1,
    options: ["am", "was", "were", "be"],
    correctAnswer: "were",
    explanation: 'In conditional sentences, use "were" (not "was") with all subjects for formal English.',
    level: "B1"
  },
  {
    id: "fb-5",
    type: "fill-blank",
    sentence: ["He asked me where I", "."],
    blankPosition: 1,
    options: ["live", "lived", "living", "do live"],
    correctAnswer: "lived",
    explanation: "In reported speech, change present tense to past tense.",
    level: "B1"
  },
  // Verb Tenses - Various Levels
  {
    id: "tense-1",
    type: "tense",
    sentence: ["She", "her homework every day."],
    blankPosition: 0,
    options: ["do", "does", "did", "done"],
    correctAnswer: "does",
    explanation: 'Third person singular (she) requires "does" for present simple.',
    level: "A2"
  },
  {
    id: "tense-2",
    type: "tense",
    sentence: ["By next month, I", "here for two years."],
    blankPosition: 0,
    options: ["will be", "will have been", "am", "have been"],
    correctAnswer: "will have been",
    explanation: 'Use future perfect ("will have been") for actions that will be completed by a future time.',
    level: "B2"
  },
  {
    id: "tense-3",
    type: "tense",
    sentence: ["If it rains tomorrow, we", "inside."],
    blankPosition: 0,
    options: ["stay", "will stay", "stayed", "would stay"],
    correctAnswer: "will stay",
    explanation: 'In first conditional sentences, use will + base verb after "if" for real possibilities.',
    level: "B1"
  },
  {
    id: "tense-4",
    type: "tense",
    sentence: ["The film", "when we arrived."],
    blankPosition: 0,
    options: ["started", "had started", "has started", "was starting"],
    correctAnswer: "had already started",
    explanation: 'Use past perfect ("had started") when an action happened before another past action.',
    level: "B2"
  },
  {
    id: "tense-5",
    type: "tense",
    sentence: ["I wish I", "harder when I was young."],
    blankPosition: 0,
    options: ["study", "studied", "had studied", "would study"],
    correctAnswer: "had studied",
    explanation: 'Use past perfect in third conditional ("I wish I had...") to express regrets about the past.',
    level: "C1"
  },
  {
    id: "tense-6",
    type: "tense",
    sentence: ["Right now, I", "my favorite TV show."],
    blankPosition: 0,
    options: ["watch", "am watching", "was watching", "will watch"],
    correctAnswer: "am watching",
    explanation: "Use present continuous (am/is/are + verb-ing) for actions happening right now.",
    level: "A2"
  },
  // Articles - Various Levels
  {
    id: "art-1",
    type: "article",
    sentence: ["She is", "university student."],
    blankPosition: 0,
    options: ["a", "an", "the", "-"],
    correctAnswer: "a",
    explanation: 'Use "a" before consonant sounds (university starts with "yoo" sound).',
    level: "A1"
  },
  {
    id: "art-2",
    type: "article",
    sentence: ["I saw", "unusual bird in the garden."],
    blankPosition: 0,
    options: ["a", "an", "the", "-"],
    correctAnswer: "an",
    explanation: 'Use "an" before vowel sounds (unusual starts with "uhn" sound).',
    level: "A1"
  },
  {
    id: "art-3",
    type: "article",
    sentence: ["The Earth revolves around", "Sun."],
    blankPosition: 0,
    options: ["the", "a", "an", "-"],
    correctAnswer: "the",
    explanation: 'Use "the" with unique nouns like celestial bodies (the Sun, the Moon, the Earth).',
    level: "A2"
  },
  {
    id: "art-4",
    type: "article",
    sentence: ["She plays piano every", "."],
    blankPosition: 0,
    options: ["day", "the day", "a day", "one day"],
    correctAnswer: "day",
    explanation: "Don't use articles with time expressions like 'every day', 'last night', 'next week'.",
    level: "B1"
  },
  {
    id: "art-5",
    type: "article",
    sentence: ["I need to buy", "new laptop."],
    blankPosition: 0,
    options: ["a", "an", "the", "-"],
    correctAnswer: "a",
    explanation: 'Use "a" before consonant sounds (new starts with "n" sound).',
    level: "A2"
  },
  {
    id: "art-6",
    type: "article",
    sentence: ["He is", "honest person."],
    blankPosition: 0,
    options: ["an", "a", "the", "-"],
    correctAnswer: "an",
    explanation: 'Use "an" before vowel sounds (honest starts with silent "h", so "ohn" sound).',
    level: "A1"
  },
  // Prepositions - Various Levels
  {
    id: "prep-1",
    type: "preposition",
    sentence: ["I was born", "1995."],
    blankPosition: 0,
    options: ["in", "on", "at", "by"],
    correctAnswer: "in",
    explanation: 'Use "in" for years, months, and longer time periods. Use "on" for specific dates.',
    level: "A1"
  },
  {
    id: "prep-2",
    type: "preposition",
    sentence: ["The meeting is", "Monday morning."],
    blankPosition: 0,
    options: ["on", "in", "at", "by"],
    correctAnswer: "on",
    explanation: 'Use "on" for days and dates (Monday, Tuesday, January 5th).',
    level: "A1"
  },
  {
    id: "prep-3",
    type: "preposition",
    sentence: ["Wait for me", "the bus stop."],
    blankPosition: 0,
    options: ["at", "in", "on", "by"],
    correctAnswer: "at",
    explanation: 'Use "at" for specific points (at the bus stop, at the door, at home).',
    level: "A1"
  },
  {
    id: "prep-4",
    type: "preposition",
    sentence: ["She is married", "a doctor."],
    blankPosition: 0,
    options: ["to", "with", "by", "for"],
    correctAnswer: "to",
    explanation: 'Use "married to" when referring to a spouse.',
    level: "A2"
  },
  {
    id: "prep-5",
    type: "preposition",
    sentence: ["I'm looking forward", "your reply."],
    blankPosition: 0,
    options: ["to", "for", "of", "at"],
    correctAnswer: "to",
    explanation: 'Use "looking forward to" + noun/gerund (-ing) to express anticipation.',
    level: "B1"
  },
  {
    id: "prep-6",
    type: "preposition",
    sentence: ["The book belongs", "my sister."],
    blankPosition: 0,
    options: ["to", "with", "for", "of"],
    correctAnswer: "to",
    explanation: 'Use "belong to" to indicate ownership.',
    level: "A2"
  },
  {
    id: "prep-7",
    type: "preposition",
    sentence: ["He succeeded", "passing the exam."],
    blankPosition: 0,
    options: ["in", "by", "through", "with"],
    correctAnswer: "in",
    explanation: 'Use "succeed in" + gerund (-ing) when talking about achieving something.',
    level: "B1"
  },
  {
    id: "prep-8",
    type: "preposition",
    sentence: ["She insists", "paying for dinner."],
    blankPosition: 0,
    options: ["on", "in", "at", "about"],
    correctAnswer: "on",
    explanation: 'Use "insist on" + gerund (-ing) when someone strongly wants to do something.',
    level: "B1"
  }
];
function GrammarChallenge() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [streak, setStreak] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState("all");
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const getQuestionsByCategory = useCallback((categoryId) => {
    let filtered = grammarQuestions.filter((q) => q.type === categoryId);
    if (selectedLevel !== "all") {
      filtered = filtered.filter((q) => q.level === selectedLevel);
    }
    return filtered.sort(() => Math.random() - 0.5).slice(0, 10);
  }, [selectedLevel]);
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setQuestions(getQuestionsByCategory(categoryId));
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setShowResult(false);
    setHasStarted(true);
    setQuestionStartTime(Date.now());
  };
  const handleSubmit = () => {
    if (!userAnswer) return;
    setShowExplanation(true);
    const isCorrect2 = userAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect2) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setShowExplanation(false);
      setQuestionStartTime(Date.now());
    } else {
      setShowResult(true);
    }
  };
  const handleRestart = () => {
    setSelectedCategory(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setShowResult(false);
    setHasStarted(false);
    setUserAnswer("");
    setShowExplanation(false);
  };
  const handleRetrySameCategory = () => {
    if (selectedCategory) {
      setQuestions(getQuestionsByCategory(selectedCategory));
      setCurrentQuestion(0);
      setScore(0);
      setStreak(0);
      setShowResult(false);
      setUserAnswer("");
      setShowExplanation(false);
      setQuestionStartTime(Date.now());
    }
  };
  if (!hasStarted) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-950 py-12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-white mb-3", children: "Grammar Challenge" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-lg max-w-2xl mx-auto", children: "Test your grammar skills with fill-in-the-blank questions. Learn from mistakes with instant explanations." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-3 text-center", children: "Filter by difficulty" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedLevel("all"),
              className: `px-4 py-2 rounded-lg font-medium transition-all ${selectedLevel === "all" ? "bg-green-600 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`,
              children: "All Levels"
            }
          ),
          levels.map((level) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedLevel(level),
              className: `px-4 py-2 rounded-lg font-medium transition-all ${selectedLevel === level ? "bg-green-600 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`,
              children: level
            },
            level
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: categories.map((category) => {
        const categoryQuestions = grammarQuestions.filter(
          (q) => q.type === category.id && (selectedLevel === "all" || q.level === selectedLevel)
        );
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleCategorySelect(category.id),
            className: `${category.color} p-6 rounded-xl text-left transition-all hover:scale-[1.02] hover:shadow-lg`,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-4xl mb-3 block", children: category.icon }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: category.name }),
              /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm mb-3", children: category.description }),
              /* @__PURE__ */ jsxs("span", { className: "inline-block bg-slate-900/60/20 text-white text-xs px-2 py-1 rounded", children: [
                categoryQuestions.length,
                " questions"
              ] })
            ]
          },
          category.id
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 bg-neutral-900 rounded-xl p-6 border border-neutral-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "How it works" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-neutral-400", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 mt-1", children: "✓" }),
            "Select a category above to start"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 mt-1", children: "✓" }),
            "Fill in the blank with the correct word"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 mt-1", children: "✓" }),
            "Get instant feedback with explanations"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 mt-1", children: "✓" }),
            "Track your score and streak as you progress"
          ] })
        ] })
      ] })
    ] }) });
  }
  if (showResult) {
    const percentage = Math.round(score / questions.length * 100);
    const getResultMessage = () => {
      if (percentage === 100) return { emoji: "🏆", title: "Perfect Score!", subtitle: "You're a grammar master!" };
      if (percentage >= 80) return { emoji: "🌟", title: "Great Job!", subtitle: "Your grammar is excellent!" };
      if (percentage >= 60) return { emoji: "👍", title: "Good Effort!", subtitle: "Keep practicing to improve!" };
      if (percentage >= 40) return { emoji: "📚", title: "Keep Learning!", subtitle: "Grammar takes practice!" };
      return { emoji: "💪", title: "Don't Give Up!", subtitle: "Try again to strengthen your skills!" };
    };
    const result = getResultMessage();
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-950 py-12 px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 rounded-2xl p-8 border border-neutral-800 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-7xl mb-4 block", children: result.emoji }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: result.title }),
      /* @__PURE__ */ jsx("p", { className: "text-neutral-400 mb-8", children: result.subtitle }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-7xl font-bold text-green-500 mb-2", children: [
          percentage,
          "%"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-neutral-400", children: [
          "You got ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: score }),
          " out of",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: questions.length }),
          " correct"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full bg-neutral-800 rounded-full h-4 overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000",
            style: { width: `${percentage}%` }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-400 mt-2", children: [
          /* @__PURE__ */ jsx("span", { children: "0%" }),
          /* @__PURE__ */ jsx("span", { children: "50%" }),
          /* @__PURE__ */ jsx("span", { children: "100%" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleRetrySameCategory,
            className: "flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors",
            children: "Try Again"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleRestart,
            className: "flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors",
            children: "Change Category"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-neutral-800", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-3", children: "Share your results" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `https://twitter.com/intent/tweet?text=I%20scored%20${percentage}%25%20on%20the%20Grammar%20Challenge%20at%20LearnEnglish.Life!%20📚&url=https://learnenglish.life/games/grammar/`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors",
              "aria-label": "Share on X",
              children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `https://www.facebook.com/sharer/sharer.php?u=https://learnenglish.life/games/grammar/`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors",
              "aria-label": "Share on Facebook",
              children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
            }
          )
        ] })
      ] })
    ] }) }) });
  }
  const question = questions[currentQuestion];
  const isCorrect = userAnswer === question.correctAnswer;
  const timeSpent = Math.round((Date.now() - questionStartTime) / 1e3);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-950 py-12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleRestart,
            className: "text-slate-400 hover:text-white transition-colors flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-slate-400", children: [
            "Question ",
            currentQuestion + 1,
            "/",
            questions.length
          ] }),
          streak >= 2 && /* @__PURE__ */ jsxs("span", { className: "bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-sm font-medium", children: [
            "🔥 ",
            streak,
            " streak"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full bg-neutral-800 rounded-full h-2", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-green-500 h-2 rounded-full transition-all",
          style: { width: `${(currentQuestion + (showExplanation ? 1 : 0)) / questions.length * 100}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "✅" }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-green-500", children: score }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "correct" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-neutral-800 px-4 py-2 rounded-lg", children: /* @__PURE__ */ jsxs("span", { className: "text-sm text-neutral-400", children: [
        categories.find((c) => c.id === question.type)?.icon,
        " ",
        categories.find((c) => c.id === question.type)?.name
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 rounded-2xl p-8 border border-neutral-800 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: `inline-block px-3 py-1 rounded-full text-xs font-semibold ${question.level === "A1" || question.level === "A2" ? "bg-green-500/20 text-green-400" : question.level === "B1" || question.level === "B2" ? "bg-amber-500/20 text-amber-400" : "bg-red-500/20 text-red-400"}`, children: question.level }) }),
      /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx("p", { className: "text-xl text-white leading-relaxed", children: question.sentence.map((part, index) => /* @__PURE__ */ jsx(React.Fragment, { children: index === question.blankPosition ? /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: userAnswer,
            onChange: (e) => !showExplanation && setUserAnswer(e.target.value),
            disabled: showExplanation,
            className: `w-40 px-3 py-2 bg-neutral-800 border-2 rounded-lg text-center text-lg font-semibold focus:outline-none transition-all ${showExplanation ? isCorrect ? "border-green-500 bg-green-500/20 text-green-400" : "border-red-500 bg-red-500/20 text-red-400" : userAnswer ? "border-green-500 text-white" : "border-neutral-600 text-white placeholder-neutral-500 focus:border-green-500"}`,
            placeholder: "?",
            autoFocus: true
          }
        ),
        showExplanation && !isCorrect && /* @__PURE__ */ jsx("span", { className: "absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-green-400 font-semibold whitespace-nowrap", children: question.correctAnswer })
      ] }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-200", children: part }) }, index)) }) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-3", children: "Or select an answer:" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: question.options.map((option) => {
          const isSelected = userAnswer === option;
          const isCorrectOption = option === question.correctAnswer;
          let buttonClass = "p-3 rounded-lg border-2 font-medium transition-all text-center";
          if (showExplanation) {
            if (isCorrectOption) {
              buttonClass += " border-green-500 bg-green-500/20 text-green-400";
            } else if (isSelected && !isCorrect) {
              buttonClass += " border-red-500 bg-red-500/20 text-red-400";
            } else {
              buttonClass += " border-neutral-800 text-slate-300";
            }
          } else {
            buttonClass += isSelected ? " border-green-500 bg-neutral-800 text-white" : " border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-600";
          }
          return /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => !showExplanation && setUserAnswer(option),
              disabled: showExplanation,
              className: buttonClass,
              children: option
            },
            option
          );
        }) })
      ] }),
      showExplanation && /* @__PURE__ */ jsx("div", { className: `p-4 rounded-xl border-2 ${isCorrect ? "bg-green-500/10 border-green-500/50" : "bg-amber-500/10 border-amber-500/50"}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-2xl", children: isCorrect ? "✅" : "💡" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: `font-semibold mb-1 ${isCorrect ? "text-green-400" : "text-amber-400"}`, children: isCorrect ? "Correct!" : "Grammar Tip" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-300 text-sm leading-relaxed", children: question.explanation }),
          !isCorrect && /* @__PURE__ */ jsxs("p", { className: "text-neutral-400 text-sm mt-2", children: [
            "The correct answer is ",
            /* @__PURE__ */ jsx("span", { className: "text-green-400 font-semibold", children: question.correctAnswer }),
            "."
          ] })
        ] })
      ] }) }),
      showExplanation && /* @__PURE__ */ jsxs("div", { className: "mt-4 text-center text-sm text-slate-400", children: [
        "Time: ",
        timeSpent,
        "s"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: !showExplanation ? /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleSubmit,
        disabled: !userAnswer,
        className: `flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all ${userAnswer ? "bg-green-600 hover:bg-green-700 text-white" : "bg-neutral-800 text-slate-300 cursor-not-allowed"}`,
        children: "Check Answer"
      }
    ) : /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleNext,
        className: "flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all",
        children: currentQuestion < questions.length - 1 ? "Next Question →" : "See Results"
      }
    ) })
  ] }) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Grammar Challenge",
    "description": "Test your English grammar skills with fill-in-the-blank questions covering tenses, articles, prepositions, and more. Get instant feedback and explanations.",
    "url": "https://learnenglish.life/games/grammar/",
    "applicationCategory": "EducationalGame",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Grammar Challenge | LearnEnglish.Life", "description": "Test your English grammar skills with fill-in-the-blank questions covering tenses, articles, prepositions, and more. Get instant feedback and explanations.", "canonicalUrl": "https://learnenglish.life/games/grammar/", "type": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section class="bg-gradient-to-b from-green-900/20 to-neutral-950 py-8 px-4"> <div class="max-w-content mx-auto"> <div class="flex items-center gap-2 text-sm text-green-400 mb-4"> <a href="/games/" class="hover:text-white transition-colors">Games</a> <span>/</span> <span>Grammar Challenge</span> </div> </div> </section>  ${renderComponent($$result2, "GrammarChallenge", GrammarChallenge, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/var/www/learnenglish.life/src/components/games/GrammarChallenge", "client:component-export": "default" })}  <section class="py-12 px-4 bg-neutral-950 border-t border-neutral-800"> <div class="max-w-content mx-auto"> <h2 class="text-2xl font-bold text-white mb-6">Keep Learning</h2> <div class="grid md:grid-cols-3 gap-6"> <!-- Grammar Guide --> <a href="/guides/grammar/" class="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-green-500/50 transition-all group"> <div class="text-3xl mb-3">📚</div> <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
Grammar Guides
</h3> <p class="text-neutral-400 text-sm">
Comprehensive grammar explanations from A1 to C2 level.
</p> </a> <!-- Vocabulary Game --> <a href="/games/vocabulary/" class="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-green-500/50 transition-all group"> <div class="text-3xl mb-3">📝</div> <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
Vocabulary Quiz
</h3> <p class="text-neutral-400 text-sm">
Test your vocabulary across different topics and difficulty levels.
</p> </a> <!-- Word Search --> <a href="/games/word-search/" class="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-green-500/50 transition-all group"> <div class="text-3xl mb-3">🔍</div> <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
Word Search
</h3> <p class="text-neutral-400 text-sm">
Find hidden words and expand your vocabulary.
</p> </a> </div> </div> </section>  <section class="py-6 px-4 bg-neutral-900 border-t border-neutral-800"> <div class="max-w-content mx-auto"> <div class="bg-neutral-800 rounded-lg p-4 text-center"> <p class="text-slate-400 text-sm">Advertisement</p> <!-- AdSense placeholder --> <div class="h-24 bg-neutral-700 rounded flex items-center justify-center"> <span class="text-slate-400 text-sm">Ad Space</span> </div> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Footer", $$Footer, {})} ` })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, {})} ` })}`, "structured-data": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "structured-data" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(structuredData))) })}` })}`;
}, "/var/www/learnenglish.life/src/pages/games/grammar/index.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/games/grammar/index.astro";
const $$url = "/games/grammar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
