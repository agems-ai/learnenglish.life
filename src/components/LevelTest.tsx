import React, { useState } from 'react';

type CEFR = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface LevelQuestion {
  id: number;
  level: CEFR;
  question: string;
  sentence?: string[];
  blank?: number;
  options: string[];
  correct: string;
}

// 25 questions, roughly 4-5 per CEFR band, ordered by increasing difficulty
const questions: LevelQuestion[] = [
  // A1
  { id: 1, level: 'A1', question: 'Choose the correct form:', sentence: ['My name', 'Anna.'], blank: 0, options: ['is', 'are', 'am', 'be'], correct: 'is' },
  { id: 2, level: 'A1', question: 'Choose the correct word:', sentence: ['I have', 'sister and two brothers.'], blank: 0, options: ['a', 'an', 'the', '-'], correct: 'a' },
  { id: 3, level: 'A1', question: 'Choose the correct verb:', sentence: ['She', 'tea every morning.'], blank: 0, options: ['drink', 'drinks', 'drinking', 'is drink'], correct: 'drinks' },
  { id: 4, level: 'A1', question: 'Choose the correct preposition:', sentence: ['The cat is', 'the table.'], blank: 0, options: ['in', 'on', 'at', 'by'], correct: 'on' },

  // A2
  { id: 5, level: 'A2', question: 'Choose the correct tense:', sentence: ['Yesterday I', 'to the cinema.'], blank: 0, options: ['go', 'went', 'going', 'have gone'], correct: 'went' },
  { id: 6, level: 'A2', question: 'Choose the comparative form:', sentence: ['This book is', 'than that one.'], blank: 0, options: ['interesting', 'more interesting', 'most interesting', 'interestinger'], correct: 'more interesting' },
  { id: 7, level: 'A2', question: 'Choose the correct form:', sentence: ['There', 'many people at the party.'], blank: 0, options: ['was', 'were', 'is', 'are'], correct: 'were' },
  { id: 8, level: 'A2', question: 'Choose the correct word:', sentence: ['I don\'t have', 'money.'], blank: 0, options: ['some', 'any', 'no', 'much'], correct: 'any' },

  // B1
  { id: 9, level: 'B1', question: 'Choose the correct tense:', sentence: ['If it', 'tomorrow, we will stay home.'], blank: 0, options: ['rain', 'rains', 'will rain', 'rained'], correct: 'rains' },
  { id: 10, level: 'B1', question: 'Choose the correct form:', sentence: ['I have lived here', '2015.'], blank: 0, options: ['for', 'since', 'during', 'from'], correct: 'since' },
  { id: 11, level: 'B1', question: 'Choose the correct modal:', sentence: ['You', 'smoke in this restaurant.'], blank: 0, options: ['mustn\'t', 'don\'t have to', 'needn\'t', 'shouldn\'t have'], correct: 'mustn\'t' },
  { id: 12, level: 'B1', question: 'Choose the reported speech form:', sentence: ['He said that he', 'tired.'], blank: 0, options: ['is', 'was', 'has been', 'be'], correct: 'was' },
  { id: 13, level: 'B1', question: 'Choose the correct phrasal verb:', sentence: ['Please', 'your homework on time.'], blank: 0, options: ['hand over', 'hand in', 'hand out', 'hand down'], correct: 'hand in' },

  // B2
  { id: 14, level: 'B2', question: 'Choose the correct passive form:', sentence: ['The Mona Lisa', 'by Leonardo da Vinci.'], blank: 0, options: ['painted', 'was painted', 'has painted', 'is painting'], correct: 'was painted' },
  { id: 15, level: 'B2', question: 'Choose the correct form:', sentence: ['She suggested', 'to the beach.'], blank: 0, options: ['to go', 'going', 'go', 'we go'], correct: 'going' },
  { id: 16, level: 'B2', question: 'Choose the second conditional:', sentence: ['If I', 'you, I would accept the offer.'], blank: 0, options: ['am', 'was', 'were', 'be'], correct: 'were' },
  { id: 17, level: 'B2', question: 'Choose the correct relative pronoun:', sentence: ['The house', 'we bought is 100 years old.'], blank: 0, options: ['who', 'whose', 'which', 'whom'], correct: 'which' },
  { id: 18, level: 'B2', question: 'Choose the correct expression:', sentence: ['I\'m used', 'up early.'], blank: 0, options: ['to get', 'to getting', 'get', 'getting'], correct: 'to getting' },

  // C1
  { id: 19, level: 'C1', question: 'Choose the inverted form:', sentence: ['Not only', 'late, but he was also rude.'], blank: 0, options: ['he was', 'was he', 'he has been', 'has he been'], correct: 'was he' },
  { id: 20, level: 'C1', question: 'Choose the correct form:', sentence: ['I wish I', 'that job last year.'], blank: 0, options: ['took', 'had taken', 'have taken', 'would take'], correct: 'had taken' },
  { id: 21, level: 'C1', question: 'Choose the correct expression:', sentence: ['It\'s high time you', 'a decision.'], blank: 0, options: ['make', 'made', 'to make', 'making'], correct: 'made' },
  { id: 22, level: 'C1', question: 'Choose the idiomatic phrase:', sentence: ['He was caught', 'when the police raided the office.'], blank: 0, options: ['red-handed', 'hands red', 'handed-red', 'in red hands'], correct: 'red-handed' },

  // C2
  { id: 23, level: 'C2', question: 'Choose the correct advanced form:', sentence: ['Had I known, I', 'differently.'], blank: 0, options: ['would act', 'would have acted', 'had acted', 'have acted'], correct: 'would have acted' },
  { id: 24, level: 'C2', question: 'Choose the correct idiom meaning "to accept an unpleasant situation":', options: ['bite the dust', 'bite the bullet', 'hit the sack', 'spill the beans'], correct: 'bite the bullet' },
  { id: 25, level: 'C2', question: 'Choose the word with the closest meaning to "ubiquitous":', options: ['rare', 'everywhere', 'forbidden', 'essential'], correct: 'everywhere' },
];

interface LevelResult {
  level: CEFR;
  title: string;
  description: string;
  canDo: string[];
  nextStep: string;
  recommendLink: string;
  recommendLabel: string;
}

const levelResults: Record<CEFR, LevelResult> = {
  A1: {
    level: 'A1',
    title: 'A1 — Beginner',
    description: 'You can understand and use basic phrases for everyday needs. You can introduce yourself and answer simple personal questions.',
    canDo: [
      'Say hello, introduce yourself, and give basic personal info',
      'Understand simple questions spoken slowly',
      'Read very short, familiar texts like signs or menus',
    ],
    nextStep: 'Focus on building core vocabulary (500 most common words) and present-tense verbs. Short daily practice beats long weekly sessions.',
    recommendLink: '/guides/best-english-tutors-for-beginners/',
    recommendLabel: 'See beginner-friendly tutors',
  },
  A2: {
    level: 'A2',
    title: 'A2 — Elementary',
    description: 'You can handle routine tasks, describe your background, and understand common phrases about family, shopping, and work.',
    canDo: [
      'Have short conversations on familiar topics',
      'Describe your daily routine, job, and hobbies',
      'Read short simple texts and find specific information',
    ],
    nextStep: 'Work on past and future tenses, common phrasal verbs, and vocabulary for travel and work situations.',
    recommendLink: '/guides/best-english-tutors-for-beginners/',
    recommendLabel: 'See beginner-friendly tutors',
  },
  B1: {
    level: 'B1',
    title: 'B1 — Intermediate',
    description: 'You can deal with most situations while travelling, describe experiences and events, and give opinions on familiar topics.',
    canDo: [
      'Hold longer conversations on familiar and personal topics',
      'Write simple connected text on subjects you know',
      'Understand the main points of clear speech on familiar matters',
    ],
    nextStep: 'Focus on fluency: speak more than you study. Book regular conversation practice and work on conditionals, reported speech, and nuanced vocabulary.',
    recommendLink: '/compare/',
    recommendLabel: 'Compare tutoring platforms',
  },
  B2: {
    level: 'B2',
    title: 'B2 — Upper-Intermediate',
    description: 'You can interact with a degree of fluency, understand complex texts, and produce clear detailed text on a wide range of subjects.',
    canDo: [
      'Discuss abstract topics and defend your point of view',
      'Understand most TV shows and films at normal speed',
      'Write detailed texts with clear arguments',
    ],
    nextStep: 'Refine advanced grammar (perfect tenses, inversion, conditionals) and work on register. This is where exam prep (IELTS, CAE) becomes realistic.',
    recommendLink: '/guides/ielts-preparation-complete-guide/',
    recommendLabel: 'See IELTS preparation guide',
  },
  C1: {
    level: 'C1',
    title: 'C1 — Advanced',
    description: 'You use English flexibly and effectively for social, academic, and professional purposes. You express yourself fluently and precisely.',
    canDo: [
      'Understand a wide range of demanding texts and implicit meaning',
      'Use English flexibly in professional and academic contexts',
      'Produce clear, well-structured, detailed text on complex subjects',
    ],
    nextStep: 'Polish idiomatic expressions, reduce errors in advanced structures, and work on specialized vocabulary for your field. Consider CAE or CPE prep.',
    recommendLink: '/compare/best-business-english-tutors/',
    recommendLabel: 'See advanced and business tutors',
  },
  C2: {
    level: 'C2',
    title: 'C2 — Proficient',
    description: 'You can understand virtually everything you hear or read with ease, and express yourself spontaneously and precisely.',
    canDo: [
      'Summarize information from different spoken and written sources',
      'Express fine shades of meaning even in complex situations',
      'Understand native speakers at full speed, including jokes and cultural references',
    ],
    nextStep: 'Maintain your level with regular reading of challenging material, conversation with natives, and occasional targeted work on gaps. Consider CPE certification.',
    recommendLink: '/compare/best-business-english-tutors/',
    recommendLabel: 'See advanced and business tutors',
  },
};

function calculateLevel(answers: Record<number, string>): CEFR {
  // Weight each correct answer by its level; level = highest band where user got 50%+ correct
  const byLevel: Record<CEFR, { correct: number; total: number }> = {
    A1: { correct: 0, total: 0 },
    A2: { correct: 0, total: 0 },
    B1: { correct: 0, total: 0 },
    B2: { correct: 0, total: 0 },
    C1: { correct: 0, total: 0 },
    C2: { correct: 0, total: 0 },
  };
  for (const q of questions) {
    byLevel[q.level].total += 1;
    if (answers[q.id] === q.correct) {
      byLevel[q.level].correct += 1;
    }
  }
  const order: CEFR[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  let achieved: CEFR = 'A1';
  for (const lvl of order) {
    const { correct, total } = byLevel[lvl];
    if (total === 0) continue;
    if (correct / total >= 0.5) {
      achieved = lvl;
    } else {
      break;
    }
  }
  return achieved;
}

export default function LevelTest() {
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string>('');
  const [finished, setFinished] = useState(false);

  if (!started) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Before you start</h2>
          <ul className="space-y-3 text-slate-300 mb-8">
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">1.</span> 25 multiple-choice questions covering grammar, vocabulary, and expressions.</li>
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">2.</span> Questions get harder as you go. Don't guess if you're unsure, pick an answer only when you actually know it.</li>
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">3.</span> No timer. Typical completion is 10 to 15 minutes.</li>
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">4.</span> Your result maps to the CEFR scale (A1 to C2) used by schools, employers, and exam boards worldwide.</li>
          </ul>
          <button
            onClick={() => setStarted(true)}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-lg transition-colors"
          >
            Start the test
          </button>
          <p className="text-xs text-slate-500 mt-4">This is an informal self-assessment, not an official certification. For exam-grade results, take a Cambridge, IELTS, or TOEFL test.</p>
        </div>
      </div>
    );
  }

  if (finished) {
    const level = calculateLevel(answers);
    const result = levelResults[level];
    const correctCount = questions.filter(q => answers[q.id] === q.correct).length;

    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-700 rounded-2xl p-8 mb-6">
          <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wider mb-2">Your level</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{result.title}</h2>
          <p className="text-slate-200 text-lg leading-relaxed mb-4">{result.description}</p>
          <p className="text-sm text-slate-400">You answered {correctCount} out of {questions.length} correctly.</p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">What you can do at {level}</h3>
          <ul className="space-y-2">
            {result.canDo.map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-300">
                <span className="text-emerald-400 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 mb-6">
          <h3 className="text-xl font-bold text-white mb-3">What to work on next</h3>
          <p className="text-slate-300 leading-relaxed mb-6">{result.nextStep}</p>
          <a
            href={result.recommendLink}
            className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
          >
            {result.recommendLabel}
          </a>
        </div>

        <div className="bg-emerald-950/40 border border-emerald-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-3">Want a real teacher to confirm your level?</h3>
          <p className="text-slate-300 mb-5">
            See Guru gives you three free 1 on 1 lessons with certified teachers. They can do a proper oral assessment, spot gaps this test missed, and plan lessons around your actual needs.
          </p>
          <a
            href="/go/see-guru/"
            rel="sponsored nofollow"
            className="inline-block px-6 py-3 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Claim 3 free lessons
          </a>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => {
              setStarted(false);
              setCurrentIdx(0);
              setAnswers({});
              setSelected('');
              setFinished(false);
            }}
            className="text-slate-400 hover:text-white underline"
          >
            Retake the test
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIdx];
  const progress = Math.round(((currentIdx) / questions.length) * 100);

  const submit = () => {
    if (!selected) return;
    const next = { ...answers, [q.id]: selected };
    setAnswers(next);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelected('');
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6">
        <div className="flex justify-between items-center text-sm text-slate-400 mb-2">
          <span>Question {currentIdx + 1} of {questions.length}</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-neutral-800 rounded-full h-2">
          <div className="bg-emerald-500 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 mb-6">
        <p className="text-slate-400 text-sm mb-4">{q.question}</p>
        {q.sentence && q.blank !== undefined ? (
          <p className="text-2xl text-white leading-relaxed mb-8">
            {q.sentence.map((part, i) => (
              <React.Fragment key={i}>
                {i === q.blank ? (
                  <span className="inline-block mx-1 px-4 py-1 bg-neutral-800 border-2 border-dashed border-emerald-500 rounded text-emerald-300 font-semibold">
                    {selected || '___'}
                  </span>
                ) : (
                  <span>{part}{' '}</span>
                )}
              </React.Fragment>
            ))}
          </p>
        ) : (
          <p className="text-xl text-white leading-relaxed mb-8">{q.question}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map(opt => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                selected === opt
                  ? 'border-emerald-500 bg-emerald-500/10 text-white'
                  : 'border-neutral-700 bg-neutral-800 text-slate-300 hover:border-neutral-500'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={submit}
        disabled={!selected}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          selected
            ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
            : 'bg-neutral-800 text-slate-500 cursor-not-allowed'
        }`}
      >
        {currentIdx < questions.length - 1 ? 'Next question' : 'See my level'}
      </button>
    </div>
  );
}
