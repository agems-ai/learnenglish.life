import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DZoc_vH5.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BqrSaoVo.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const platforms = {
  seeGuru: {
    name: "See Guru",
    rating: 4.8,
    badge: "BEST OVERALL",
    badgeColor: "bg-emerald-600",
    description: "Live 1-on-1 lessons with certified, diploma-holding English tutors. Honest feedback, flexible scheduling, and real conversation practice.",
    strengths: ["Certified, diploma-holding tutors", "Flexible 1-on-1 scheduling", "Free trial lesson"],
    price: "$12-40/hour",
    url: "https://see.guru/?aff=SG-SUAG151",
    tags: ["live-tutoring", "professional", "flexible", "all-levels"]
  },
  preply: {
    name: "Preply",
    rating: 4.6,
    badge: "BEST STRUCTURE",
    badgeColor: "bg-blue-600",
    description: "Professional tutors, structured curriculum, and 1-on-1 lessons tailored to your goals.",
    strengths: ["From $10/hour", "Certified teachers", "Personalized plans"],
    price: "$10-50/hour",
    url: "/go/preply",
    tags: ["live-tutoring", "structured", "professional", "intermediate-advanced"]
  },
  cambly: {
    name: "Cambly",
    rating: 4.4,
    badge: "BEST VALUE",
    badgeColor: "bg-purple-600",
    description: "Unlimited conversation practice with native speakers. Great for building confidence.",
    strengths: ["From $6.50/week", "Unlimited minutes", "No commitment"],
    price: "$6.50/week",
    url: "/go/cambly",
    tags: ["native-speakers", "conversational", "budget", "beginner"]
  },
  italki: {
    name: "iTalki",
    rating: 4.3,
    badge: "BEST BUDGET",
    badgeColor: "bg-amber-600",
    description: "Affordable 1-on-1 tutoring with community tutors and professional teachers.",
    strengths: ["From $3/hour", "Community + pro tutors", "Flexible booking"],
    price: "$3-30/hour",
    url: "/go/italki",
    tags: ["budget", "flexible", "community", "all-levels"]
  },
  babbel: {
    name: "Babbel",
    rating: 4.2,
    badge: "BEST APP",
    badgeColor: "bg-teal-600",
    description: "Self-paced courses with speech recognition and cultural insights. Perfect for independent learners.",
    strengths: ["From $6.95/month", "No live sessions needed", "Mobile app"],
    price: "$6.95/month",
    url: "/go/babbel",
    tags: ["self-paced", "app", "beginner-intermediate", "budget"]
  }
};
const quizQuestions = [
  {
    id: "level",
    question: "What is your current English level?",
    subtitle: "Be honest, this helps us recommend the right fit.",
    type: "single",
    options: [
      { label: "I'm a complete beginner", value: "beginner", score: { babbel: 2, cambly: 1, italki: 2, seeGuru: 1, preply: 1 } },
      { label: "I can have basic conversations", value: "intermediate", score: { italki: 2, seeGuru: 2, cambly: 1, preply: 2, babbel: 1 } },
      { label: "I speak fluently but want to improve", value: "advanced", score: { preply: 3, seeGuru: 2, cambly: 1, italki: 1, babbel: 0 } }
    ]
  },
  {
    id: "goal",
    question: "What is your main learning goal?",
    subtitle: "Choose the one that matters most to you.",
    type: "single",
    options: [
      { label: "Improve my conversation skills", value: "conversation", score: { cambly: 3, seeGuru: 2, italki: 2, preply: 1, babbel: 0 } },
      { label: "Prepare for an exam (TOEFL, IELTS, etc.)", value: "exam", score: { preply: 3, seeGuru: 2, italki: 1, babbel: 1, cambly: 0 } },
      { label: "Build confidence for work or travel", value: "practical", score: { seeGuru: 3, cambly: 2, italki: 2, preply: 1, babbel: 1 } },
      { label: "Learn at my own pace", value: "self-paced", score: { babbel: 3, italki: 1, cambly: 1, seeGuru: 0, preply: 0 } }
    ]
  },
  {
    id: "budget",
    question: "What is your monthly budget for English learning?",
    subtitle: "We have options for every budget.",
    type: "single",
    options: [
      { label: "Under $20/month", value: "budget", score: { babbel: 3, cambly: 3, italki: 2, seeGuru: 0, preply: 0 } },
      { label: "$20-50/month", value: "mid", score: { italki: 3, seeGuru: 3, preply: 2, cambly: 1, babbel: 1 } },
      { label: "$50+ per month (for premium tutoring)", value: "premium", score: { seeGuru: 3, preply: 3, italki: 1, cambly: 0, babbel: 0 } }
    ]
  },
  {
    id: "time",
    question: "How much time can you commit per week?",
    subtitle: "Realistic commitment leads to better results.",
    type: "single",
    options: [
      { label: "Just 15-30 minutes a few times a week", value: "casual", score: { babbel: 3, cambly: 2, italki: 1, seeGuru: 0, preply: 0 } },
      { label: "About 1-3 hours per week", value: "moderate", score: { italki: 3, seeGuru: 2, preply: 2, cambly: 1, babbel: 1 } },
      { label: "3+ hours, I am serious about progress", value: "serious", score: { seeGuru: 3, preply: 3, italki: 2, cambly: 1, babbel: 0 } }
    ]
  },
  {
    id: "style",
    question: "How do you prefer to learn?",
    subtitle: "Pick whichever feels more natural to you.",
    type: "single",
    options: [
      { label: "Live conversations with a real teacher", value: "live", score: { seeGuru: 3, preply: 3, italki: 3, cambly: 2, babbel: 0 } },
      { label: "Apps and self-paced lessons", value: "app", score: { babbel: 3, cambly: 1, italki: 0, seeGuru: 0, preply: 0 } },
      { label: "Mix of structured lessons and practice", value: "mixed", score: { preply: 2, italki: 2, seeGuru: 2, babbel: 1, cambly: 1 } }
    ]
  }
];
function calculateRecommendations(answers) {
  const scores = {
    seeGuru: 0,
    preply: 0,
    cambly: 0,
    italki: 0,
    babbel: 0
  };
  Object.entries(answers).forEach(([questionId, selectedValue]) => {
    const question = quizQuestions.find((q) => q.id === questionId);
    if (!question) return;
    const selectedOption = question.options.find((o) => o.value === selectedValue);
    if (!selectedOption) return;
    Object.entries(selectedOption.score).forEach(([platform, points]) => {
      scores[platform] += points;
    });
  });
  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a).map(([name]) => name);
  const result = {};
  sorted.forEach((key) => {
    result[key] = platforms[key];
  });
  return result;
}
function ProgressBar({ step, total }) {
  const progress = (step + 1) / total * 100;
  return /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-slate-400 mb-2", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "Question ",
        step + 1,
        " of ",
        total
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        Math.round(progress),
        "% complete"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-neutral-700 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full transition-all duration-500 ease-out",
        style: { width: `${progress}%` }
      }
    ) })
  ] });
}
function OptionButton({
  label,
  selected,
  onClick
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: `w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${selected ? "border-emerald-500 bg-emerald-500/20 text-white" : "border-neutral-600 bg-neutral-800/50 text-neutral-200 hover:border-emerald-400/50 hover:bg-neutral-700/50 hover:text-white"}`,
      children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: label })
    }
  );
}
function ResultsPage({ recommendations, onRestart }) {
  const sortedPlatforms = Object.entries(recommendations).sort(([, a], [, b]) => {
    return b.rating - a.rating;
  });
  const topPlatform = sortedPlatforms[0];
  const runnerUps = sortedPlatforms.slice(1, 3);
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: "🎯" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: "Your Perfect Match" }),
    /* @__PURE__ */ jsx("p", { className: "text-neutral-400 mb-8", children: "Based on your answers, we recommend:" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-2xl p-8 border border-emerald-600 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: `${topPlatform[1].badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`, children: topPlatform[1].badge }),
        /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-emerald-400", children: [
          topPlatform[1].rating,
          "/5"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: topPlatform[1].name }),
      /* @__PURE__ */ jsx("p", { className: "text-neutral-300 mb-6", children: topPlatform[1].description }),
      /* @__PURE__ */ jsx("ul", { className: "text-left max-w-sm mx-auto space-y-2 mb-8", children: topPlatform[1].strengths.map((strength, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-neutral-200", children: [
        /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "✓" }),
        " ",
        strength
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-neutral-400 mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: "Price:" }),
        " ",
        topPlatform[1].price
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: topPlatform[1].url,
          target: "_blank",
          rel: "noopener sponsored",
          className: "inline-block w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-colors",
          children: [
            "Try ",
            topPlatform[1].name,
            " Free →"
          ]
        }
      )
    ] }),
    runnerUps.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500 mb-4", children: "Also great options for you:" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4 max-w-2xl mx-auto", children: runnerUps.map(([key, platform]) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: `${platform.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`, children: platform.badge }),
          /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-white", children: [
            platform.rating,
            "/5"
          ] })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white mb-2", children: platform.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-400 mb-4 line-clamp-2", children: platform.description }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: platform.url,
            target: "_blank",
            rel: "noopener sponsored",
            className: "text-emerald-400 hover:text-emerald-300 font-semibold text-sm",
            children: "Try free →"
          }
        )
      ] }, key)) })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-neutral-500 mb-8", children: [
      "* We may earn a commission when you sign up through our links. Our recommendations remain 100% unbiased.",
      /* @__PURE__ */ jsx("a", { href: "/affiliate-disclosure/", className: "text-emerald-400 hover:underline ml-1", children: "Learn more" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onRestart,
        className: "px-6 py-3 border-2 border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-colors",
        children: "Retake Quiz"
      }
    )
  ] });
}
function TutorQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const question = quizQuestions[currentStep];
  const handleOptionSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
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
    return /* @__PURE__ */ jsx("div", { className: "bg-neutral-900 rounded-2xl p-8 max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(ResultsPage, { recommendations, onRestart: handleRestart }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 rounded-2xl p-8 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx(ProgressBar, { step: currentStep, total: quizQuestions.length }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: question.question }),
      question.subtitle && /* @__PURE__ */ jsx("p", { className: "text-neutral-400", children: question.subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-8", children: question.options.map((option, index) => /* @__PURE__ */ jsx(
      OptionButton,
      {
        label: option.label,
        selected: currentAnswer === option.value,
        onClick: () => handleOptionSelect(option.value)
      },
      option.value
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      currentStep > 0 ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCurrentStep(currentStep - 1),
          className: "px-6 py-3 text-neutral-400 hover:text-white transition-colors",
          children: "← Back"
        }
      ) : /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleNext,
          disabled: !canProceed,
          className: `px-8 py-3 font-bold rounded-lg transition-colors ${canProceed ? "bg-emerald-600 text-white hover:bg-emerald-500" : "bg-neutral-700 text-neutral-500 cursor-not-allowed"}`,
          children: currentStep < quizQuestions.length - 1 ? "Continue →" : "See My Results →"
        }
      )
    ] })
  ] });
}

const $$Quiz = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Find Your Perfect English Tutor, Quiz", "description": "Answer 5 questions and get personalized English tutor recommendations based on your level, goals, and budget." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="bg-gradient-to-br from-emerald-950 via-neutral-950 to-teal-950 py-12 md:py-16"> <div class="max-w-4xl mx-auto px-4 text-center"> <div class="text-5xl mb-4">🎓</div> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
Find Your <span class="text-emerald-400">Perfect English Tutor</span> </h1> <p class="text-lg text-neutral-300 max-w-2xl mx-auto">
Answer 5 quick questions and get personalized recommendations from our team-tested platforms.
</p> </div> </section>  <section class="py-12 bg-neutral-950"> <div class="max-w-3xl mx-auto px-4"> ${renderComponent($$result2, "TutorQuiz", TutorQuiz, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/var/www/learnenglish.life/src/components/TutorQuiz", "client:component-export": "default" })} </div> </section>  <section class="py-12 bg-neutral-900 border-t border-neutral-800"> <div class="max-w-4xl mx-auto px-4"> <div class="text-center mb-8"> <h2 class="text-2xl font-bold text-white mb-2">Why Trust Our Recommendations?</h2> <p class="text-neutral-400">We test every platform so you don't have to guess.</p> </div> <div class="grid md:grid-cols-3 gap-6"> <div class="text-center"> <div class="text-3xl mb-3">🔬</div> <h3 class="text-lg font-semibold text-white mb-2">Tested Personally</h3> <p class="text-sm text-neutral-400">Our team has used every platform we recommend.</p> </div> <div class="text-center"> <div class="text-3xl mb-3">⚖️</div> <h3 class="text-lg font-semibold text-white mb-2">100% Unbiased</h3> <p class="text-sm text-neutral-400">Affiliate links never influence our ratings or recommendations.</p> </div> <div class="text-center"> <div class="text-3xl mb-3">🆕</div> <h3 class="text-lg font-semibold text-white mb-2">Updated Monthly</h3> <p class="text-sm text-neutral-400">We re-test platforms regularly to keep recommendations current.</p> </div> </div> </div> </section>  <section class="py-8 bg-neutral-900"> <div class="max-w-6xl mx-auto px-4"> <div class="border border-neutral-800 rounded-lg p-4 text-center"> <span class="text-neutral-500 text-sm">Advertisement</span> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/var/www/learnenglish.life/src/pages/quiz.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/quiz.astro";
const $$url = "/quiz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Quiz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
