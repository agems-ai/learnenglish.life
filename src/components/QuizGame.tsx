import React, { useState, useEffect } from 'react';
import { useAnalytics } from './analytics';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizGameProps {
  quizId: string;
  quizTitle: string;
  questions: Question[];
}

export default function QuizGame({ quizId, quizTitle, questions }: QuizGameProps) {
  const { trackQuizStart, trackQuizComplete, trackQuizQuestionAnswer } = useAnalytics();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestion]);

  const handleStart = () => {
    setHasStarted(true);
    trackQuizStart(quizId, quizTitle);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    const timeSpent = Date.now() - questionStartTime;
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    trackQuizQuestionAnswer(quizId, currentQuestion + 1, isCorrect, timeSpent);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      trackQuizComplete(quizId, quizTitle, score, questions.length);
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setHasStarted(false);
    setQuestionStartTime(Date.now());
  };

  const progress = ((currentQuestion + (selectedAnswer !== null ? 1 : 0)) / questions.length) * 100;

  if (!hasStarted) {
    return (
      <div className="quiz-container bg-neutral-900 rounded-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">{quizTitle}</h2>
        <p className="text-neutral-400 mb-6">
          Test your knowledge with {questions.length} questions.
        </p>
        <button
          onClick={handleStart}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-container bg-neutral-900 rounded-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Quiz Complete!</h2>
        <div className="text-center mb-6">
          <div className="text-6xl font-bold text-green-500 mb-2">{percentage}%</div>
          <p className="text-neutral-400">
            You got {score} out of {questions.length} questions correct.
          </p>
        </div>
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-400 mb-1">
            <span>Score</span>
            <span>{score}/{questions.length}</span>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        <button
          onClick={handleRestart}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="quiz-container bg-neutral-900 rounded-xl p-8 max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-400 mb-1">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>Score: {score}</span>
        </div>
        <div className="w-full bg-neutral-800 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-semibold text-white mb-6">{q.question}</h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options.map((option, index) => {
          let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all';
          
          if (selectedAnswer === null) {
            buttonClass += ' border-neutral-700 hover:border-green-500 text-neutral-300 hover:text-white';
          } else if (index === q.correctAnswer) {
            buttonClass += ' border-green-500 bg-green-500/20 text-green-400';
          } else if (index === selectedAnswer) {
            buttonClass += ' border-red-500 bg-red-500/20 text-red-400';
          } else {
            buttonClass += ' border-neutral-800 text-slate-300';
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={buttonClass}
            >
              <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      {selectedAnswer !== null && (
        <button
          onClick={handleNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  );
}
