import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DZoc_vH5.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$AdUnit } from '../chunks/AdUnit_CfA3FelO.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const guides = [
    {
      title: "English Grammar Basics",
      description: "The core rules every learner needs in their first 90 days. Tenses, articles, prepositions explained simply.",
      icon: "\u{1F4D6}",
      image: "/guides/grammar-basics.jpg",
      href: "/guides/english-grammar-basics/",
      readTime: "12 min",
      level: "Beginner"
    },
    {
      title: "Common English Mistakes",
      description: "The 30 errors most non-native speakers make. Spot them in your own writing and fix them for good.",
      icon: "\u26A0\uFE0F",
      image: "/guides/common-mistakes.jpg",
      href: "/guides/common-english-mistakes/",
      readTime: "9 min",
      level: "Intermediate"
    },
    {
      title: "How to Practice Speaking Alone",
      description: "Build fluency without a partner. Shadowing, self-talk, and recording techniques that actually work.",
      icon: "\u{1F5E3}\uFE0F",
      image: "/guides/speaking-alone.jpg",
      href: "/guides/how-to-practice-speaking-alone/",
      readTime: "8 min",
      level: "All Levels"
    },
    {
      title: "How to Choose the Right Tutor",
      description: "Cut through the marketing. Questions to ask, red flags to spot, and how to test-drive a tutor.",
      icon: "\u{1F3AF}",
      image: "/guides/choose-tutor.jpg",
      href: "/guides/how-to-choose-english-tutor/",
      readTime: "10 min",
      level: "Beginner+"
    },
    {
      title: "Best English Apps for Beginners",
      description: "Free and paid apps that take you from your first word to your first conversation. Honest pros and cons.",
      icon: "\u{1F4F1}",
      image: "/guides/apps-for-beginners.jpg",
      href: "/guides/best-english-apps-for-beginners/",
      readTime: "7 min",
      level: "Beginner"
    },
    {
      title: "Best English Apps for Kids",
      description: "Game-based learning that actually keeps young learners engaged. Tested with real kids ages 5\u201312.",
      icon: "\u{1F3AE}",
      image: "/guides/apps-for-kids.jpg",
      href: "/guides/best-english-apps-for-kids/",
      readTime: "6 min",
      level: "Parents"
    },
    {
      title: "Free vs Paid English Learning",
      description: "When free is enough, when paid is worth it, and how to mix both for the best result on a budget.",
      icon: "\u{1F4B0}",
      image: "/guides/free-vs-paid.jpg",
      href: "/guides/free-vs-paid-english-learning/",
      readTime: "8 min",
      level: "All Levels"
    },
    {
      title: "Grammar Reference",
      description: "Quick lookup tables for the rules you keep forgetting. Bookmark and come back any time.",
      icon: "\u{1F4DA}",
      image: "/guides/grammar-ref.jpg",
      href: "/guides/grammar/",
      readTime: "Reference",
      level: "All Levels"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "English Study Guides | LearnEnglish.Life", "description": "Free study guides covering English grammar, common mistakes, speaking practice, choosing a tutor and the best learning apps. Built for self-directed learners." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="bg-gradient-to-br from-emerald-950/60 to-teal-950/60 py-12"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
Free Study Guides
</h1> <p class="text-lg text-slate-300 max-w-2xl mx-auto">
Comprehensive guides to master English grammar, vocabulary, and more. 
        all completely free.
</p> </div> </section>  <div class="py-4 bg-neutral-800"> <div class="max-w-6xl mx-auto px-4"> ${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "header", "format": "horizontal" })} </div> </div>  <section class="py-12"> <div class="max-w-6xl mx-auto px-4"> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${guides.map((guide) => renderTemplate`<a${addAttribute(guide.href, "href")} class="block bg-slate-900/60 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors group overflow-hidden"> ${guide.image ? renderTemplate`<div class="h-40 overflow-hidden"> <img${addAttribute(guide.image, "src")}${addAttribute(guide.title, "alt")} loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> </div>` : renderTemplate`<div class="h-40 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 flex items-center justify-center"> <span class="text-5xl">${guide.icon}</span> </div>`} <div class="p-6"> <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors"> ${guide.title} </h3> <p class="text-slate-300 mb-4">${guide.description}</p> <div class="flex items-center gap-4 text-sm text-slate-400"> <span>${guide.readTime}</span> <span class="px-2 py-1 bg-slate-800 text-slate-300 rounded-full text-xs"> ${guide.level} </span> </div> </div> </a>`)} </div> </div> </section>  <div class="py-8"> <div class="max-w-6xl mx-auto px-4"> ${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "fluid" })} </div> </div>  <section class="py-12 bg-slate-950 border-y border-slate-800"> <div class="max-w-4xl mx-auto px-4 text-center"> <h2 class="text-2xl font-bold text-white mb-4">
Ready for Personalized Learning?
</h2> <p class="text-slate-300 mb-6">
Get matched with the perfect tutor or course for your goals.
</p> <a href="/reviews/" class="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors">
Find Your Platform →
</a> </div> </section>  <section class="py-8 bg-gray-900/40"> <div class="max-w-4xl mx-auto px-4 text-center"> <p class="text-sm text-slate-400"></p> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/var/www/learnenglish.life/src/pages/guides/index.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/guides/index.astro";
const $$url = "/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
