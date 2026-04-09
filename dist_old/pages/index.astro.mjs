import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DZoc_vH5.mjs';
import { a as $$Footer, $ as $$Header } from '../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$AdUnit } from '../chunks/AdUnit_CfA3FelO.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Honest Platform Reviews",
      description: "In-depth, unbiased reviews of 50+ tutoring platforms, courses, and apps.",
      icon: "\u{1F4DD}"
    },
    {
      title: "Side-by-Side Comparisons",
      description: "Compare prices, features, and user ratings to find your perfect match.",
      icon: "\u2696\uFE0F"
    },
    {
      title: "AI Learning Tools",
      description: "Practice with our free AI-powered grammar checker, vocabulary builder, and more.",
      icon: "\u{1F916}"
    },
    {
      title: "Interactive Games",
      description: "Learn English through fun games: quizzes, word puzzles, and challenges.",
      icon: "\u{1F3AE}"
    }
  ];
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LearnEnglish.Life",
    "url": "https://learnenglish.life",
    "description": "Honest reviews, side-by-side comparisons and free practice tools to help you find the best way to learn English online.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://learnenglish.life/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LearnEnglish.Life",
      "url": "https://learnenglish.life"
    }
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "LearnEnglish.Life - Your Guide to the Best English Learning Resources", "description": "Honest reviews, side-by-side comparisons and free practice tools to help you find the best way to learn English online \u2014 including tutors, courses and apps tested for you." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", "  ", '<section class="bg-gradient-to-br from-emerald-950 via-neutral-950 to-teal-950 py-16 md:py-24"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="text-center max-w-3xl mx-auto"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">\nMaster English with the\n<span class="text-emerald-400">Right Tools</span> </h1> <p class="text-lg md:text-xl text-neutral-300 mb-8">\nHonest reviews, expert comparisons, and free AI-powered practice tools.\n          Everything you need to find your perfect English learning path.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/reviews/" class="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors">\nExplore Reviews\n</a> <a href="/tools/" class="px-8 py-4 bg-slate-900/60/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:border-emerald-400 hover:text-emerald-400 transition-colors">\nTry Free Tools\n</a> </div> </div> </div> </section>  <div class="bg-neutral-800 border border-neutral-600 rounded-lg flex items-center justify-center" style="width:100%; max-width:728px; height:90px; margin:0 auto;"> <span class="text-neutral-400 text-sm">Ad Placement: Leaderboard (728x90)</span> </div>  <div class="bg-amber-950/60 border-y border-amber-700 py-4"> <div class="max-w-6xl mx-auto px-4 text-center text-sm text-amber-100"> <strong class="text-amber-300">\u{1F517} Affiliate Disclosure:</strong> We may earn a commission at no extra cost to you when you sign up through our links. Our reviews remain 100% unbiased. <a href="/affiliate-disclosure/" class="underline text-amber-300 hover:text-white">Learn more</a> </div> </div>  <div class="bg-neutral-900 py-4"> <div class="max-w-6xl mx-auto px-4"> ', ' </div> </div>  <section class="py-16 bg-neutral-950"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">\nStart Learning Today: Our Top Picks\n</h2> <p class="text-lg text-neutral-300 max-w-2xl mx-auto">\nWe tested dozens of platforms. Here are our three favorites for learning English online.\n</p> </div> <div class="grid md:grid-cols-3 gap-8"> <!-- See Guru - BEST OVERALL --> <div class="bg-neutral-900 rounded-2xl p-6 border border-emerald-800"> <div class="flex items-center justify-between mb-4"> <span class="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">BEST OVERALL</span> <span class="text-2xl font-bold text-emerald-400">4.8/5</span> </div> <h3 class="text-2xl font-bold text-white mb-1">See Guru</h3> <div class="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold px-2.5 py-1 rounded-full mb-3">\u{1F381} 3 FREE TRIAL LESSONS</div> <p class="text-neutral-300 mb-4">The only platform that gives you three free 1-on-1 lessons with real human tutors - not bots, not videos. Certified, diploma-holding teachers and flexible scheduling.</p> <ul class="text-sm space-y-2 mb-6"> <li class="flex items-center gap-2 text-neutral-200">\u2705 <strong>3 free trial lessons</strong> with real tutors</li> <li class="flex items-center gap-2 text-neutral-200">\u2705 Certified, diploma-holding teachers</li> <li class="flex items-center gap-2 text-neutral-200">\u2705 Flexible 1-on-1 scheduling, $5+/lesson</li> </ul> <a href="https://see.guru/?aff=SG-SUAG151" target="_blank" rel="noopener sponsored" class="block w-full bg-emerald-600 text-white text-center font-bold py-3 rounded-lg hover:bg-emerald-500 transition-colors">\nGet 3 Free Lessons \u2192\n</a> </div> <!-- Preply --> <div class="bg-neutral-900 rounded-2xl p-6 border border-blue-800"> <div class="flex items-center justify-between mb-4"> <span class="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">BEST STRUCTURE</span> <span class="text-2xl font-bold text-blue-400">4.6/5</span> </div> <h3 class="text-2xl font-bold text-white mb-2">Preply</h3> <p class="text-neutral-300 mb-4">Professional tutors, structured curriculum, and 1-on-1 lessons tailored to your goals.</p> <ul class="text-sm space-y-2 mb-6"> <li class="flex items-center gap-2 text-neutral-200">\u2705 From $10/hour</li> <li class="flex items-center gap-2 text-neutral-200">\u2705 Certified teachers</li> <li class="flex items-center gap-2 text-neutral-200">\u2705 Personalized plans</li> </ul> <a href="/go/preply" class="block w-full bg-blue-600 text-white text-center font-bold py-3 rounded-lg hover:bg-blue-500 transition-colors">\nTry Preply Free \u2192\n</a> </div> <!-- Cambly --> <div class="bg-neutral-900 rounded-2xl p-6 border border-purple-800"> <div class="flex items-center justify-between mb-4"> <span class="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span> <span class="text-2xl font-bold text-purple-400">4.4/5</span> </div> <h3 class="text-2xl font-bold text-white mb-2">Cambly</h3> <p class="text-neutral-300 mb-4">Unlimited conversation practice with native speakers. Great for building confidence.</p> <ul class="text-sm space-y-2 mb-6"> <li class="flex items-center gap-2 text-neutral-200">\u2705 From $6.50/week</li> <li class="flex items-center gap-2 text-neutral-200">\u2705 Unlimited minutes</li> <li class="flex items-center gap-2 text-neutral-200">\u2705 No subscription</li> </ul> <a href="/go/cambly" class="block w-full bg-purple-600 text-white text-center font-bold py-3 rounded-lg hover:bg-purple-500 transition-colors">\nTry Cambly Free \u2192\n</a> </div> </div> <p class="text-center text-sm text-neutral-400 mt-6">\n* We may earn a commission when you sign up through our links. <a href="/affiliate-disclosure/" class="text-emerald-400 hover:underline">Full disclosure</a> </p> </div> </section>  <section class="py-16 bg-neutral-900 text-white"> <div class="max-w-4xl mx-auto px-4 text-center"> <div class="text-5xl mb-6">\u{1F4E7}</div> <h2 class="text-3xl md:text-4xl font-bold mb-4">\nGet Free English Tips Weekly\n</h2> <p class="text-xl text-gray-300 mb-8">\nJoin learners getting vocabulary lists, grammar guides, and exclusive deals.\n</p> <!-- Formspree form for MVP --> <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="email-signup" class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"> <input type="email" name="email" placeholder="your@email.com" required class="flex-1 px-6 py-4 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"> <input type="hidden" name="_subject" value="New LearnEnglish.Life Subscriber"> <button type="submit" class="px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-colors whitespace-nowrap">\nGet Free Tips\n</button> </form> <div id="form-success" class="hidden mt-4 p-4 bg-emerald-700 rounded-lg">\n\u2705 Thanks for subscribing! Check your inbox for a welcome email.\n</div> <p class="text-sm text-gray-400 mt-4">\nNo spam, ever. Unsubscribe anytime.\n</p> </div> </section>  <section class="py-16 md:py-20 bg-neutral-900"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">\nEverything You Need to Succeed\n</h2> <p class="text-lg text-neutral-300 max-w-2xl mx-auto">\nWe research, test, and compare so you can focus on learning.\n</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ', ' </div> </div> </section>  <div class="py-8 bg-neutral-900"> <div class="max-w-6xl mx-auto px-4"> ', ' </div> </div>  <section class="py-16 bg-emerald-700"> <div class="max-w-4xl mx-auto px-4 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">\nStart Your English Journey Today\n</h2> <p class="text-xl text-emerald-100 mb-8">\nNo credit card required. 100% free tools to get you started.\n</p> <a href="/tools/" class="inline-block px-8 py-4 bg-slate-900/60 text-emerald-600 font-bold rounded-lg hover:bg-gray-900/40 transition-colors">\nTry AI Tools Free\n</a> </div> </section>  <section class="py-8 bg-neutral-900"> <div class="max-w-4xl mx-auto px-4 text-center"> <p class="text-sm text-neutral-400">\nWe use affiliate links to support our operations. Our reviews are based on research, \n        not compensation. <a href="/about/" class="text-emerald-400 hover:underline">Learn more</a> </p> </div> </section> ', "   "])), unescapeHTML(JSON.stringify(websiteSchema)), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "header", "format": "horizontal" }), features.map((feature) => renderTemplate`<div class="bg-neutral-950 rounded-xl p-6 border border-neutral-700 hover:shadow-md transition-shadow"> <div class="text-4xl mb-4">${feature.icon}</div> <h3 class="text-xl font-semibold text-white mb-2">${feature.title}</h3> <p class="text-neutral-400">${feature.description}</p> </div>`), renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "fluid" }), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "/var/www/learnenglish.life/src/pages/index.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
