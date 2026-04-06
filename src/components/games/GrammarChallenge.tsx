import React, { useState, useCallback } from 'react';

interface GrammarQuestion {
  id: string;
  type: 'fill-blank' | 'tense' | 'article' | 'preposition';
  sentence: string[];
  blankPosition: number;
  options: string[];
  correctAnswer: string;
  explanation: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
}

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

const categories: Category[] = [
  { id: 'fill-blank', name: 'Fill in the Blank', icon: '📝', description: 'Complete sentences with correct words', color: 'bg-blue-600' },
  { id: 'tense', name: 'Verb Tenses', icon: '⏰', description: 'Present, past, and future tenses', color: 'bg-purple-600' },
  { id: 'article', name: 'Articles', icon: '📰', description: 'a, an, and the usage', color: 'bg-amber-600' },
  { id: 'preposition', name: 'Prepositions', icon: '🗺️', description: 'in, on, at, for, to, and more', color: 'bg-emerald-600' },
];

// Grammar questions database
const grammarQuestions: GrammarQuestion[] = [
  // Fill in the Blank - A1/A2 Level
  {
    id: 'fb-1',
    type: 'fill-blank',
    sentence: ['She', 'to the store yesterday.'],
    blankPosition: 1,
    options: ['go', 'goes', 'went', 'going'],
    correctAnswer: 'went',
    explanation: 'Use "went" for past tense of "go". This is a regular verb pattern.',
    level: 'A2',
  },
  {
    id: 'fb-2',
    type: 'fill-blank',
    sentence: ['I have been learning English', 'three years.'],
    blankPosition: 0,
    options: ['for', 'since', 'during', 'while'],
    correctAnswer: 'for',
    explanation: 'Use "for" with a period of time (three years). Use "since" with a starting point.',
    level: 'A2',
  },
  {
    id: 'fb-3',
    type: 'fill-blank',
    sentence: ['The book is', 'the table and the chair.'],
    blankPosition: 0,
    options: ['between', 'among', 'in', 'on'],
    correctAnswer: 'between',
    explanation: 'Use "between" for two items. Use "among" for three or more.',
    level: 'B1',
  },
  {
    id: 'fb-4',
    type: 'fill-blank',
    sentence: ['If I', 'rich, I would travel the world.'],
    blankPosition: 1,
    options: ['am', 'was', 'were', 'be'],
    correctAnswer: 'were',
    explanation: 'In conditional sentences, use "were" (not "was") with all subjects for formal English.',
    level: 'B1',
  },
  {
    id: 'fb-5',
    type: 'fill-blank',
    sentence: ['He asked me where I', '.'],
    blankPosition: 1,
    options: ['live', 'lived', 'living', 'do live'],
    correctAnswer: 'lived',
    explanation: 'In reported speech, change present tense to past tense.',
    level: 'B1',
  },

  // Verb Tenses - Various Levels
  {
    id: 'tense-1',
    type: 'tense',
    sentence: ['She', 'her homework every day.'],
    blankPosition: 0,
    options: ['do', 'does', 'did', 'done'],
    correctAnswer: 'does',
    explanation: 'Third person singular (she) requires "does" for present simple.',
    level: 'A2',
  },
  {
    id: 'tense-2',
    type: 'tense',
    sentence: ['By next month, I', 'here for two years.'],
    blankPosition: 0,
    options: ['will be', 'will have been', 'am', 'have been'],
    correctAnswer: 'will have been',
    explanation: 'Use future perfect ("will have been") for actions that will be completed by a future time.',
    level: 'B2',
  },
  {
    id: 'tense-3',
    type: 'tense',
    sentence: ['If it rains tomorrow, we', 'inside.'],
    blankPosition: 0,
    options: ['stay', 'will stay', 'stayed', 'would stay'],
    correctAnswer: 'will stay',
    explanation: 'In first conditional sentences, use will + base verb after "if" for real possibilities.',
    level: 'B1',
  },
  {
    id: 'tense-4',
    type: 'tense',
    sentence: ['The film', 'when we arrived.'],
    blankPosition: 0,
    options: ['started', 'had started', 'has started', 'was starting'],
    correctAnswer: 'had already started',
    explanation: 'Use past perfect ("had started") when an action happened before another past action.',
    level: 'B2',
  },
  {
    id: 'tense-5',
    type: 'tense',
    sentence: ['I wish I', 'harder when I was young.'],
    blankPosition: 0,
    options: ['study', 'studied', 'had studied', 'would study'],
    correctAnswer: 'had studied',
    explanation: 'Use past perfect in third conditional ("I wish I had...") to express regrets about the past.',
    level: 'C1',
  },
  {
    id: 'tense-6',
    type: 'tense',
    sentence: ['Right now, I', 'my favorite TV show.'],
    blankPosition: 0,
    options: ['watch', 'am watching', 'was watching', 'will watch'],
    correctAnswer: 'am watching',
    explanation: 'Use present continuous (am/is/are + verb-ing) for actions happening right now.',
    level: 'A2',
  },

  // Articles - Various Levels
  {
    id: 'art-1',
    type: 'article',
    sentence: ['She is', 'university student.'],
    blankPosition: 0,
    options: ['a', 'an', 'the', '-'],
    correctAnswer: 'a',
    explanation: 'Use "a" before consonant sounds (university starts with "yoo" sound).',
    level: 'A1',
  },
  {
    id: 'art-2',
    type: 'article',
    sentence: ['I saw', 'unusual bird in the garden.'],
    blankPosition: 0,
    options: ['a', 'an', 'the', '-'],
    correctAnswer: 'an',
    explanation: 'Use "an" before vowel sounds (unusual starts with "uhn" sound).',
    level: 'A1',
  },
  {
    id: 'art-3',
    type: 'article',
    sentence: ['The Earth revolves around', 'Sun.'],
    blankPosition: 0,
    options: ['the', 'a', 'an', '-'],
    correctAnswer: 'the',
    explanation: 'Use "the" with unique nouns like celestial bodies (the Sun, the Moon, the Earth).',
    level: 'A2',
  },
  {
    id: 'art-4',
    type: 'article',
    sentence: ['She plays piano every', '.'],
    blankPosition: 0,
    options: ['day', 'the day', 'a day', 'one day'],
    correctAnswer: 'day',
    explanation: "Don't use articles with time expressions like 'every day', 'last night', 'next week'.",
    level: 'B1',
  },
  {
    id: 'art-5',
    type: 'article',
    sentence: ['I need to buy', 'new laptop.'],
    blankPosition: 0,
    options: ['a', 'an', 'the', '-'],
    correctAnswer: 'a',
    explanation: 'Use "a" before consonant sounds (new starts with "n" sound).',
    level: 'A2',
  },
  {
    id: 'art-6',
    type: 'article',
    sentence: ['He is', 'honest person.'],
    blankPosition: 0,
    options: ['an', 'a', 'the', '-'],
    correctAnswer: 'an',
    explanation: 'Use "an" before vowel sounds (honest starts with silent "h", so "ohn" sound).',
    level: 'A1',
  },

  // Prepositions - Various Levels
  {
    id: 'prep-1',
    type: 'preposition',
    sentence: ['I was born', '1995.'],
    blankPosition: 0,
    options: ['in', 'on', 'at', 'by'],
    correctAnswer: 'in',
    explanation: 'Use "in" for years, months, and longer time periods. Use "on" for specific dates.',
    level: 'A1',
  },
  {
    id: 'prep-2',
    type: 'preposition',
    sentence: ['The meeting is', 'Monday morning.'],
    blankPosition: 0,
    options: ['on', 'in', 'at', 'by'],
    correctAnswer: 'on',
    explanation: 'Use "on" for days and dates (Monday, Tuesday, January 5th).',
    level: 'A1',
  },
  {
    id: 'prep-3',
    type: 'preposition',
    sentence: ['Wait for me', 'the bus stop.'],
    blankPosition: 0,
    options: ['at', 'in', 'on', 'by'],
    correctAnswer: 'at',
    explanation: 'Use "at" for specific points (at the bus stop, at the door, at home).',
    level: 'A1',
  },
  {
    id: 'prep-4',
    type: 'preposition',
    sentence: ['She is married', 'a doctor.'],
    blankPosition: 0,
    options: ['to', 'with', 'by', 'for'],
    correctAnswer: 'to',
    explanation: 'Use "married to" when referring to a spouse.',
    level: 'A2',
  },
  {
    id: 'prep-5',
    type: 'preposition',
    sentence: ['I\'m looking forward', 'your reply.'],
    blankPosition: 0,
    options: ['to', 'for', 'of', 'at'],
    correctAnswer: 'to',
    explanation: 'Use "looking forward to" + noun/gerund (-ing) to express anticipation.',
    level: 'B1',
  },
  {
    id: 'prep-6',
    type: 'preposition',
    sentence: ['The book belongs', 'my sister.'],
    blankPosition: 0,
    options: ['to', 'with', 'for', 'of'],
    correctAnswer: 'to',
    explanation: 'Use "belong to" to indicate ownership.',
    level: 'A2',
  },
  {
    id: 'prep-7',
    type: 'preposition',
    sentence: ['He succeeded', 'passing the exam.'],
    blankPosition: 0,
    options: ['in', 'by', 'through', 'with'],
    correctAnswer: 'in',
    explanation: 'Use "succeed in" + gerund (-ing) when talking about achieving something.',
    level: 'B1',
  },
  {
    id: 'prep-8',
    type: 'preposition',
    sentence: ['She insists', 'paying for dinner.'],
    blankPosition: 0,
    options: ['on', 'in', 'at', 'about'],
    correctAnswer: 'on',
    explanation: 'Use "insist on" + gerund (-ing) when someone strongly wants to do something.',
    level: 'B1',
  },
];

export default function GrammarChallenge() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [questions, setQuestions] = useState<GrammarQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [streak, setStreak] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const getQuestionsByCategory = useCallback((categoryId: string) => {
    let filtered = grammarQuestions.filter(q => q.type === categoryId);
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(q => q.level === selectedLevel);
    }
    return filtered.sort(() => Math.random() - 0.5).slice(0, 10);
  }, [selectedLevel]);

  const handleCategorySelect = (categoryId: string) => {
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
    const isCorrect = userAnswer === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
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
    setUserAnswer('');
    setShowExplanation(false);
  };

  const handleRetrySameCategory = () => {
    if (selectedCategory) {
      setQuestions(getQuestionsByCategory(selectedCategory));
      setCurrentQuestion(0);
      setScore(0);
      setStreak(0);
      setShowResult(false);
      setUserAnswer('');
      setShowExplanation(false);
      setQuestionStartTime(Date.now());
    }
  };

  // Category Selection Screen
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-neutral-950 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-3">
              Grammar Challenge
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Test your grammar skills with fill-in-the-blank questions. 
              Learn from mistakes with instant explanations.
            </p>
          </div>

          {/* Level Filter */}
          <div className="mb-8">
            <p className="text-sm text-neutral-500 mb-3 text-center">Filter by difficulty</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedLevel('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevel === 'all'
                    ? 'bg-green-600 text-white'
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
              >
                All Levels
              </button>
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedLevel === level
                      ? 'bg-green-600 text-white'
                      : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map(category => {
              const categoryQuestions = grammarQuestions.filter(q => 
                q.type === category.id && (selectedLevel === 'all' || q.level === selectedLevel)
              );
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`${category.color} p-6 rounded-xl text-left transition-all hover:scale-[1.02] hover:shadow-lg`}
                >
                  <span className="text-4xl mb-3 block">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-3">{category.description}</p>
                  <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded">
                    {categoryQuestions.length} questions
                  </span>
                </button>
              );
            })}
          </div>

          {/* Info Box */}
          <div className="mt-10 bg-neutral-900 rounded-xl p-6 border border-neutral-800">
            <h3 className="text-lg font-semibold text-white mb-3">How it works</h3>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Select a category above to start
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Fill in the blank with the correct word
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Get instant feedback with explanations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Track your score and streak as you progress
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    const getResultMessage = () => {
      if (percentage === 100) return { emoji: '🏆', title: 'Perfect Score!', subtitle: "You're a grammar master!" };
      if (percentage >= 80) return { emoji: '🌟', title: 'Great Job!', subtitle: 'Your grammar is excellent!' };
      if (percentage >= 60) return { emoji: '👍', title: 'Good Effort!', subtitle: 'Keep practicing to improve!' };
      if (percentage >= 40) return { emoji: '📚', title: 'Keep Learning!', subtitle: 'Grammar takes practice!' };
      return { emoji: '💪', title: "Don't Give Up!", subtitle: 'Try again to strengthen your skills!' };
    };
    const result = getResultMessage();

    return (
      <div className="min-h-screen bg-neutral-950 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 text-center">
            <span className="text-7xl mb-4 block">{result.emoji}</span>
            <h2 className="text-3xl font-bold text-white mb-2">{result.title}</h2>
            <p className="text-neutral-400 mb-8">{result.subtitle}</p>

            {/* Score Display */}
            <div className="mb-8">
              <div className="text-7xl font-bold text-green-500 mb-2">{percentage}%</div>
              <p className="text-neutral-400">
                You got <span className="text-white font-semibold">{score}</span> out of{' '}
                <span className="text-white font-semibold">{questions.length}</span> correct
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="w-full bg-neutral-800 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-neutral-500 mt-2">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRetrySameCategory}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={handleRestart}
                className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Change Category
              </button>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <p className="text-sm text-neutral-500 mb-3">Share your results</p>
              <div className="flex justify-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=I%20scored%20${percentage}%25%20on%20the%20Grammar%20Challenge%20at%20LearnEnglish.Life!%20📚&url=https://learnenglish.life/games/grammar/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors"
                  aria-label="Share on X"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://learnenglish.life/games/grammar/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question Screen
  const question = questions[currentQuestion];
  const isCorrect = userAnswer === question.correctAnswer;
  const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);

  return (
    <div className="min-h-screen bg-neutral-950 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <button
              onClick={handleRestart}
              className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-500">
                Question {currentQuestion + 1}/{questions.length}
              </span>
              {streak >= 2 && (
                <span className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-sm font-medium">
                  🔥 {streak} streak
                </span>
              )}
            </div>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + (showExplanation ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Score Display */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <span className="text-xl font-bold text-green-500">{score}</span>
            <span className="text-neutral-600">correct</span>
          </div>
          <div className="bg-neutral-800 px-4 py-2 rounded-lg">
            <span className="text-sm text-neutral-400">
              {categories.find(c => c.id === question.type)?.icon}{' '}
              {categories.find(c => c.id === question.type)?.name}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 mb-6">
          {/* Level Badge */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              question.level === 'A1' || question.level === 'A2' ? 'bg-green-500/20 text-green-400' :
              question.level === 'B1' || question.level === 'B2' ? 'bg-amber-500/20 text-amber-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {question.level}
            </span>
          </div>

          {/* Question Sentence with Blank */}
          <div className="mb-8">
            <p className="text-xl text-white leading-relaxed">
              {question.sentence.map((part, index) => (
                <React.Fragment key={index}>
                  {index === question.blankPosition ? (
                    <span className="relative inline-block">
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => !showExplanation && setUserAnswer(e.target.value)}
                        disabled={showExplanation}
                        className={`w-40 px-3 py-2 bg-neutral-800 border-2 rounded-lg text-center text-lg font-semibold focus:outline-none transition-all ${
                          showExplanation
                            ? isCorrect
                              ? 'border-green-500 bg-green-500/20 text-green-400'
                              : 'border-red-500 bg-red-500/20 text-red-400'
                            : userAnswer
                            ? 'border-green-500 text-white'
                            : 'border-neutral-600 text-white placeholder-neutral-500 focus:border-green-500'
                        }`}
                        placeholder="?"
                        autoFocus
                      />
                      {showExplanation && !isCorrect && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-green-400 font-semibold whitespace-nowrap">
                          {question.correctAnswer}
                        </span>
                      )}
                    </span>
                  ) : (
                    <span className="text-neutral-200">{part}</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Multiple Choice Options */}
          <div className="mb-6">
            <p className="text-sm text-neutral-500 mb-3">Or select an answer:</p>
            <div className="grid grid-cols-2 gap-3">
              {question.options.map((option) => {
                const isSelected = userAnswer === option;
                const isCorrectOption = option === question.correctAnswer;
                let buttonClass = 'p-3 rounded-lg border-2 font-medium transition-all text-center';
                
                if (showExplanation) {
                  if (isCorrectOption) {
                    buttonClass += ' border-green-500 bg-green-500/20 text-green-400';
                  } else if (isSelected && !isCorrect) {
                    buttonClass += ' border-red-500 bg-red-500/20 text-red-400';
                  } else {
                    buttonClass += ' border-neutral-800 text-neutral-600';
                  }
                } else {
                  buttonClass += isSelected
                    ? ' border-green-500 bg-neutral-800 text-white'
                    : ' border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-600';
                }

                return (
                  <button
                    key={option}
                    onClick={() => !showExplanation && setUserAnswer(option)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`p-4 rounded-xl border-2 ${
              isCorrect 
                ? 'bg-green-500/10 border-green-500/50' 
                : 'bg-amber-500/10 border-amber-500/50'
            }`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{isCorrect ? '✅' : '💡'}</span>
                <div>
                  <h4 className={`font-semibold mb-1 ${isCorrect ? 'text-green-400' : 'text-amber-400'}`}>
                    {isCorrect ? 'Correct!' : 'Grammar Tip'}
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {question.explanation}
                  </p>
                  {!isCorrect && (
                    <p className="text-neutral-400 text-sm mt-2">
                      The correct answer is <span className="text-green-400 font-semibold">{question.correctAnswer}</span>.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Time Spent */}
          {showExplanation && (
            <div className="mt-4 text-center text-sm text-neutral-500">
              Time: {timeSpent}s
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!showExplanation ? (
            <button
              onClick={handleSubmit}
              disabled={!userAnswer}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                userAnswer
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
