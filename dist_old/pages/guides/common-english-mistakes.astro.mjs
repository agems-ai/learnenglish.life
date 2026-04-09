import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DZoc_vH5.mjs';
import { a as $$Footer, $ as $$Header } from '../../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$AdUnit } from '../../chunks/AdUnit_CfA3FelO.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CommonEnglishMistakes = createComponent(($$result, $$props, $$slots) => {
  const mistakes = [
    { category: "Articles", items: [
      { wrong: "I am teacher", correct: "I am a teacher", explanation: "Use 'a' before singular countable nouns." },
      { wrong: "She is doctor", correct: "She is a doctor", explanation: "Singular professions need an article." },
      { wrong: "I went to school yesterday", correct: "I went to school yesterday", explanation: "Articles are omitted with school, hospital, church, etc. (when referring to their purpose)." },
      { wrong: "I need an umbrella. It is rain outside", correct: "I need an umbrella. It is raining outside", explanation: "Use the -ing form for ongoing weather." }
    ] },
    { category: "Prepositions", items: [
      { wrong: "I will call you in Monday", correct: "I will call you on Monday", explanation: "Use 'on' with days of the week." },
      { wrong: "I arrived to London", correct: "I arrived in London", explanation: "Use 'in' with cities, 'to' with verbs of motion." },
      { wrong: "She is married with John", correct: "She is married to John", explanation: "'Married to' is the standard collocation." },
      { wrong: "I am good in math", correct: "I am good at math", explanation: "'Good at' is the correct collocation for skills." },
      { wrong: "Listen the radio", correct: "Listen to the radio", explanation: "'Listen' always takes 'to' as a preposition." }
    ] },
    { category: "Verb Forms", items: [
      { wrong: "She don't understand", correct: "She doesn't understand", explanation: "Third person singular requires 'does' (not 'do')." },
      { wrong: "I have went to Paris", correct: "I have gone to Paris", explanation: "Use 'gone' (not 'went') after 'have/has.'" },
      { wrong: "If I was you", correct: "If I were you", explanation: "Use 'were' for hypothetical conditions (subjunctive mood)." },
      { wrong: "I used to going to the gym", correct: "I used to go to the gym", explanation: "'Used to' is followed by the base form, not -ing." },
      { wrong: "He made me to do it", correct: "He made me do it", explanation: "'Make' + object takes infinitive without 'to.'" }
    ] },
    { category: "Pronunciation", items: [
      { wrong: "W sound for V", correct: "V is for victory, not wictory", explanation: "Many learners confuse V and W sounds. Press your lip against your upper teeth for V." },
      { wrong: "Schedule as SKED-yule", correct: "Schedule as SHED-yule (UK) or SKED-yule (US)", explanation: "British and American English pronounce this differently." },
      { wrong: "Wednesday spelled out", correct: "Say it as one syllable: WENZ-day", explanation: "Do not pronounce all the letters. English has silent letters." }
    ] },
    { category: "Word Usage", items: [
      { wrong: "I am interesting in learning", correct: "I am interested in learning", explanation: "Use 'interested' (feeling), not 'interesting' (causing interest)." },
      { wrong: "The book is his", correct: "This book is his", explanation: "'His' as a determiner requires context: 'his book' or 'this is his.'" },
      { wrong: "My name is John", correct: "My name is John / I am John", explanation: "Both are correct. 'My name is' and 'I am' are both natural introductions." },
      { wrong: "I have 25 years old", correct: "I am 25 years old", explanation: "Use 'be' (am/is/are) for age, not 'have.'" }
    ] },
    { category: "Common Confusions", items: [
      { wrong: "Their/There/They are", correct: "Their = possession / There = place / They are = contraction", explanation: "Their (possessive), There (location), They are (contraction)." },
      { wrong: "Your/You are", correct: "Your = possession / You are = contraction", explanation: "You are = You're. Your = belonging to you." },
      { wrong: "Its/It is", correct: "Its = possession / It is = contraction", explanation: "It is = It's. Its = belonging to it (no apostrophe for possession)." },
      { wrong: "Than/Then", correct: "Than = comparison / Then = time", explanation: "Than (comparing), Then (time/sequence)." }
    ] }
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "25+ Common English Mistakes and How to Fix Them",
    "description": "Learn the most common English grammar mistakes made by learners and how to correct them. Perfect for intermediate learners improving their accuracy.",
    "author": {
      "@type": "Organization",
      "name": "LearnEnglish.Life"
    },
    "datePublished": "2025-06-01",
    "dateModified": "2025-06-01"
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "25+ Common English Mistakes and How to Fix Them (2025)", "description": "Learn the most common English mistakes learners make. Grammar, pronunciation, word usage with correct examples and explanations." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", " ", `<main class="max-w-4xl mx-auto px-4 py-8"> <!-- Breadcrumb --> <nav class="text-sm text-slate-400 mb-4"> <a href="/" class="hover:text-emerald-600">Home</a> <span class="mx-2">\u203A</span> <a href="/guides/" class="hover:text-emerald-600">Study Guides</a> <span class="mx-2">\u203A</span> <span class="text-gray-300">Common English Mistakes</span> </nav> <!-- Hero --> <div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-8"> <span class="text-purple-200 text-sm font-medium">Study Guide \xB7 25+ Mistakes</span> <h1 class="text-4xl font-bold mt-2 mb-4">25+ Common English Mistakes and How to Fix Them</h1> <p class="text-purple-100 text-lg mb-6">Even advanced English learners make these mistakes. Learn what they are and how to avoid them.</p> <div class="flex flex-wrap gap-4"> <span class="bg-slate-900/60/20 px-4 py-2 rounded-lg text-sm">Grammar</span> <span class="bg-slate-900/60/20 px-4 py-2 rounded-lg text-sm">Pronunciation</span> <span class="bg-slate-900/60/20 px-4 py-2 rounded-lg text-sm">Word Usage</span> </div> </div> <!-- Quick Summary --> <div class="bg-amber-950/60 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8"> <h2 class="font-semibold text-amber-200">TL;DR</h2> <p class="text-amber-300">The most common mistakes: forgetting articles (a/an), mixing up prepositions (in/on/to), wrong verb forms with third person, and confusing similar words (your/you're, their/there/they're).</p> </div> `, " <!-- Mistakes by Category --> ", " ", ' <!-- Practice Tips --> <section class="bg-emerald-900/30 rounded-xl p-6 mb-8"> <h2 class="text-xl font-bold mb-4">How to Avoid These Mistakes</h2> <div class="grid md:grid-cols-2 gap-4"> <div class="bg-slate-900/60 rounded-lg p-4"> <h3 class="font-semibold text-emerald-400 mb-2">Read Native Content</h3> <p class="text-neutral-300 text-sm">Read articles, books, and news in English. This helps you internalize correct patterns naturally.</p> </div> <div class="bg-slate-900/60 rounded-lg p-4"> <h3 class="font-semibold text-emerald-400 mb-2">Practice Speaking</h3> <p class="text-neutral-300 text-sm">Use apps like iTalki to practice with native speakers who can correct your mistakes in real-time.</p> </div> <div class="bg-slate-900/60 rounded-lg p-4"> <h3 class="font-semibold text-emerald-400 mb-2">Keep an Error Diary</h3> <p class="text-neutral-300 text-sm">Write down mistakes you make. Review them weekly to build awareness of your common errors.</p> </div> <div class="bg-slate-900/60 rounded-lg p-4"> <h3 class="font-semibold text-emerald-400 mb-2">Focus on One Category</h3> <p class="text-neutral-300 text-sm">Do not try to fix everything at once. Master one category (e.g., prepositions) before moving to the next.</p> </div> </div> </section> <!-- Related Content --> <section> <h2 class="text-xl font-bold mb-4">Continue Learning</h2> <div class="grid md:grid-cols-3 gap-4"> <a href="/reviews/italki/" class="bg-slate-900/60 rounded-xl shadow-sm p-4 hover:shadow-md transition"> <h3 class="font-semibold text-emerald-400">Practice with iTalki Tutors</h3> <p class="text-slate-400 text-sm mt-1">Get corrections from native speakers</p> </a> <a href="/guides/free-vs-paid-english-learning/" class="bg-slate-900/60 rounded-xl shadow-sm p-4 hover:shadow-md transition"> <h3 class="font-semibold text-emerald-400">Free vs Paid Resources</h3> <p class="text-slate-400 text-sm mt-1">Find the best learning approach for you</p> </a> <a href="/compare/best-english-learning-apps/" class="bg-slate-900/60 rounded-xl shadow-sm p-4 hover:shadow-md transition"> <h3 class="font-semibold text-emerald-400">Best English Apps</h3> <p class="text-slate-400 text-sm mt-1">Top apps for daily practice</p> </a> </div> </section> </main> ', " "])), unescapeHTML(JSON.stringify(articleSchema)), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "guide-header" }), mistakes.map((category, catIndex) => renderTemplate`<section class="mb-10"> <h2 class="text-2xl font-bold mb-4 flex items-center gap-2"> <span class="bg-indigo-900/40 text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center text-lg">${catIndex + 1}</span> ${category.category} </h2> <div class="space-y-4"> ${category.items.map((item, itemIndex) => renderTemplate`<div class="bg-slate-900/60 rounded-xl shadow-sm overflow-hidden"> <div class="grid md:grid-cols-2 gap-4 p-5"> <div class="border-r md:border-r-0 md:pr-4"> <span class="text-red-500 text-sm font-semibold">Wrong:</span> <p class="text-red-600 mt-1 font-medium">${item.wrong}</p> </div> <div class="bg-green-950/60 -mx-5 md:mx-0 md:px-4 py-2 flex items-center"> <div> <span class="text-green-600 text-sm font-semibold">Correct:</span> <p class="text-green-300 mt-1 font-medium">${item.correct}</p> </div> </div> </div> <div class="bg-neutral-800 px-5 py-3 text-sm text-neutral-300 border-t"> <strong>Why?</strong> ${item.explanation} </div> </div>`)} </div> </section>`), renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "guide-mid-content" }), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "/var/www/learnenglish.life/src/pages/guides/common-english-mistakes.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/guides/common-english-mistakes.astro";
const $$url = "/guides/common-english-mistakes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CommonEnglishMistakes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
