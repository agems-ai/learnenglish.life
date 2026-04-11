import React, { useState } from 'react';

// Platform data with affiliate links
const platforms = {
  seeGuru: {
    name: 'See Guru',
    rating: 4.8,
    badge: 'BEST OVERALL',
    badgeColor: 'bg-emerald-600',
    description: 'Live 1-on-1 lessons with certified, diploma-holding English tutors. Honest feedback, flexible scheduling, and real conversation practice.',
    strengths: ['Certified, diploma-holding tutors', 'Flexible 1-on-1 scheduling', 'Free trial lesson'],
    price: '$12-40/hour',
    url: '/go/see-guru/',
    tags: ['live-tutoring', 'professional', 'flexible', 'all-levels']
  },
  preply: {
    name: 'Preply',
    rating: 4.6,
    badge: 'BEST STRUCTURE',
    badgeColor: 'bg-blue-600',
    description: 'Professional tutors, structured curriculum, and 1-on-1 lessons tailored to your goals.',
    strengths: ['From $10/hour', 'Certified teachers', 'Personalized plans'],
    price: '$10-50/hour',
    url: '/go/preply',
    tags: ['live-tutoring', 'structured', 'professional', 'intermediate-advanced']
  },
  cambly: {
    name: 'Cambly',
    rating: 4.4,
    badge: 'BEST VALUE',
    badgeColor: 'bg-purple-600',
    description: 'Unlimited conversation practice with native speakers. Great for building confidence.',
    strengths: ['From $6.50/week', 'Unlimited minutes', 'No commitment'],
    price: '$6.50/week',
    url: '/go/cambly',
    tags: ['native-speakers', 'conversational', 'budget', 'beginner']
  },
  italki: {
    name: 'iTalki',
    rating: 4.3,
    badge: 'BEST BUDGET',
    badgeColor: 'bg-amber-600',
    description: 'Affordable 1-on-1 tutoring with community tutors and professional teachers.',
    strengths: ['From $3/hour', 'Community + pro tutors', 'Flexible booking'],
    price: '$3-30/hour',
    url: '/go/italki',
    tags: ['budget', 'flexible', 'community', 'all-levels']
  },
  babbel: {
    name: 'Babbel',
    rating: 4.2,
    badge: 'BEST APP',
    badgeColor: 'bg-teal-600',
    description: 'Self-paced courses with speech recognition and cultural insights. Perfect for independent learners.',
    strengths: ['From $6.95/month', 'No live sessions needed', 'Mobile app'],
    price: '$6.95/month',
    url: '/go/babbel',
    tags: ['self-paced', 'app', 'beginner-intermediate', 'budget']
  }
};

// Quiz questions with options and scoring
const quizQuestions = [
  {
    id: 'level',
    question: 'What is your current English level?',
    subtitle: 'Be honest, this helps us recommend the right fit.',
    type: 'single',
    options: [
      { label: "I'm a complete beginner", value: 'beginner', score: { babbel: 2, cambly: 1, italki: 2, seeGuru: 1, preply: 1 } },
      { label: 'I can have basic conversations', value: 'intermediate', score: { italki: 2, seeGuru: 2, cambly: 1, preply: 2, babbel: 1 } },
      { label: 'I speak fluently but want to improve', value: 'advanced', score: { preply: 3, seeGuru: 2, cambly: 1, italki: 1, babbel: 0 } }
    ]
  },
  {
    id: 'goal',
    question: 'What is your main learning goal?',
    subtitle: 'Choose the one that matters most to you.',
    type: 'single',
    options: [
      { label: 'Improve my conversation skills', value: 'conversation', score: { cambly: 3, seeGuru: 2, italki: 2, preply: 1, babbel: 0 } },
      { label: 'Prepare for an exam (TOEFL, IELTS, etc.)', value: 'exam', score: { preply: 3, seeGuru: 2, italki: 1, babbel: 1, cambly: 0 } },
      { label: 'Build confidence for work or travel', value: 'practical', score: { seeGuru: 3, cambly: 2, italki: 2, preply: 1, babbel: 1 } },
      { label: 'Learn at my own pace', value: 'self-paced', score: { babbel: 3, italki: 1, cambly: 1, seeGuru: 0, preply: 0 } }
    ]
  },
  {
    id: 'budget',
    question: 'What is your monthly budget for English learning?',
    subtitle: 'We have options for every budget.',
    type: 'single',
    options: [
      { label: 'Under $20/month', value: 'budget', score: { babbel: 3, cambly: 3, italki: 2, seeGuru: 0, preply: 0 } },
      { label: '$20-50/month', value: 'mid', score: { italki: 3, seeGuru: 3, preply: 2, cambly: 1, babbel: 1 } },
      { label: '$50+ per month (for premium tutoring)', value: 'premium', score: { seeGuru: 3, preply: 3, italki: 1, cambly: 0, babbel: 0 } }
    ]
  },
  {
    id: 'time',
    question: 'How much time can you commit per week?',
    subtitle: 'Realistic commitment leads to better results.',
    type: 'single',
    options: [
      { label: 'Just 15-30 minutes a few times a week', value: 'casual', score: { babbel: 3, cambly: 2, italki: 1, seeGuru: 0, preply: 0 } },
      { label: 'About 1-3 hours per week', value: 'moderate', score: { italki: 3, seeGuru: 2, preply: 2, cambly: 1, babbel: 1 } },
      { label: '3+ hours, I am serious about progress', value: 'serious', score: { seeGuru: 3, preply: 3, italki: 2, cambly: 1, babbel: 0 } }
    ]
  },
  {
    id: 'style',
    question: 'How do you prefer to learn?',
    subtitle: 'Pick whichever feels more natural to you.',
    type: 'single',
    options: [
      { label: 'Live conversations with a real teacher', value: 'live', score: { seeGuru: 3, preply: 3, italki: 3, cambly: 2, babbel: 0 } },
      { label: 'Apps and self-paced lessons', value: 'app', score: { babbel: 3, cambly: 1, italki: 0, seeGuru: 0, preply: 0 } },
      { label: 'Mix of structured lessons and practice', value: 'mixed', score: { preply: 2, italki: 2, seeGuru: 2, babbel: 1, cambly: 1 } }
    ]
  }
];

// Calculate recommendations based on answers
function calculateRecommendations(answers: Record<string, string>): typeof platforms {
  const scores = {
    seeGuru: 0,
    preply: 0,
    cambly: 0,
    italki: 0,
    babbel: 0
  };
  
  Object.entries(answers).forEach(([questionId, selectedValue]) => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (!question) return;
    
    const selectedOption = question.options.find(o => o.value === selectedValue);
    if (!selectedOption) return;
    
    Object.entries(selectedOption.score).forEach(([platform, points]) => {
      scores[platform as keyof typeof scores] += points as number;
    });
  });
  
  // Sort platforms by score
  const sorted = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .map(([name]) => name as keyof typeof platforms);
  
  // Return platforms in order
  const result: Record<string, typeof platforms.seeGuru> = {};
  sorted.forEach(key => {
    result[key] = platforms[key];
  });
  
  return result;
}

// Progress bar component
function ProgressBar({ step, total }: { step: number; total: number }) {
  const progress = ((step + 1) / total) * 100;
  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-slate-400 mb-2">
        <span>Question {step + 1} of {total}</span>
        <span>{Math.round(progress)}% complete</span>
      </div>
      <div className="w-full bg-neutral-700 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

// Option button component
function OptionButton({ 
  label, 
  selected, 
  onClick 
}: { 
  label: string; 
  selected: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
        selected 
          ? 'border-emerald-500 bg-emerald-500/20 text-white' 
          : 'border-neutral-600 bg-neutral-800/50 text-neutral-200 hover:border-emerald-400/50 hover:bg-neutral-700/50 hover:text-white'
      }`}
    >
      <span className="text-lg">{label}</span>
    </button>
  );
}

// Results page component
function ResultsPage({ recommendations, onRestart }: { 
  recommendations: typeof platforms; 
  onRestart: () => void;
}) {
  const sortedPlatforms = Object.entries(recommendations)
    .sort(([, a], [, b]) => {
      // Sort by rating for equal scores
      return b.rating - a.rating;
    }) as [keyof typeof platforms, typeof platforms.seeGuru][];
  
  const topPlatform = sortedPlatforms[0];
  const runnerUps = sortedPlatforms.slice(1, 3);
  
  return (
    <div className="text-center">
      {/* Celebration icon */}
      <div className="text-6xl mb-4">🎯</div>
      <h2 className="text-3xl font-bold text-white mb-2">Your Perfect Match</h2>
      <p className="text-neutral-400 mb-8">Based on your answers, we recommend:</p>
      
      {/* Top recommendation */}
      <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-2xl p-8 border border-emerald-600 mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className={`${topPlatform[1].badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {topPlatform[1].badge}
          </span>
          <span className="text-2xl font-bold text-emerald-400">{topPlatform[1].rating}/5</span>
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-4">{topPlatform[1].name}</h3>
        <p className="text-neutral-300 mb-6">{topPlatform[1].description}</p>
        
        <ul className="text-left max-w-sm mx-auto space-y-2 mb-8">
          {topPlatform[1].strengths.map((strength, i) => (
            <li key={i} className="flex items-center gap-2 text-neutral-200">
              <span className="text-emerald-400">✓</span> {strength}
            </li>
          ))}
        </ul>
        
        <div className="text-sm text-neutral-400 mb-4">
          <span className="font-semibold text-white">Price:</span> {topPlatform[1].price}
        </div>
        
        <a 
          href={topPlatform[1].url}
          target="_blank"
          rel="noopener sponsored"
          className="inline-block w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-colors"
        >
          Try {topPlatform[1].name} Free →
        </a>
      </div>
      
      {/* Runner-up recommendations */}
      {runnerUps.length > 0 && (
        <div className="mb-8">
          <p className="text-sm text-neutral-500 mb-4">Also great options for you:</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {runnerUps.map(([key, platform]) => (
              <div key={key} className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${platform.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {platform.badge}
                  </span>
                  <span className="text-lg font-bold text-white">{platform.rating}/5</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{platform.name}</h4>
                <p className="text-sm text-neutral-400 mb-4 line-clamp-2">{platform.description}</p>
                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener sponsored"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
                >
                  Try free →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Affiliate disclosure */}
      <p className="text-xs text-neutral-500 mb-8">
        * We may earn a commission when you sign up through our links. Our recommendations remain 100% unbiased. 
        <a href="/affiliate-disclosure/" className="text-emerald-400 hover:underline ml-1">Learn more</a>
      </p>
      
      {/* Restart button */}
      <button
        onClick={onRestart}
        className="px-6 py-3 border-2 border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-colors"
      >
        Retake Quiz
      </button>
    </div>
  );
}

// Main TutorQuiz component
export default function TutorQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const question = quizQuestions[currentStep];
  
  const handleOptionSelect = (value: string) => {
    setAnswers(prev => ({ ...prev, [question.id]: value }));
  };
  
  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };
  
  const currentAnswer = answers[question.id];
  const canProceed = !!currentAnswer;
  const recommendations = calculateRecommendations(answers);
  
  if (showResults) {
    return (
      <div className="bg-neutral-900 rounded-2xl p-8 max-w-3xl mx-auto">
        <ResultsPage recommendations={recommendations} onRestart={handleRestart} />
      </div>
    );
  }
  
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 max-w-3xl mx-auto">
      <ProgressBar step={currentStep} total={quizQuestions.length} />
      
      {/* Question */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{question.question}</h3>
        {question.subtitle && (
          <p className="text-neutral-400">{question.subtitle}</p>
        )}
      </div>
      
      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <OptionButton
            key={option.value}
            label={option.label}
            selected={currentAnswer === option.value}
            onClick={() => handleOptionSelect(option.value)}
          />
        ))}
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between items-center">
        {currentStep > 0 ? (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="px-6 py-3 text-neutral-400 hover:text-white transition-colors"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}
        
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className={`px-8 py-3 font-bold rounded-lg transition-colors ${
            canProceed
              ? 'bg-emerald-600 text-white hover:bg-emerald-500'
              : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
          }`}
        >
          {currentStep < quizQuestions.length - 1 ? 'Continue →' : 'See My Results →'}
        </button>
      </div>
    </div>
  );
}
