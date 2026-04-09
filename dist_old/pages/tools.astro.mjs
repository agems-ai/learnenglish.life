import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DZoc_vH5.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$AdUnit } from '../chunks/AdUnit_CfA3FelO.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tools = [
    {
      title: "AI Conversation Partner",
      description: "Practice speaking with our AI. Get instant feedback on your English.",
      icon: "\u{1F4AC}",
      status: "Coming Soon",
      href: "#"
    },
    {
      title: "Grammar Checker",
      description: "Paste your text and get instant grammar and style suggestions.",
      icon: "\u270D\uFE0F",
      status: "Coming Soon",
      href: "#"
    },
    {
      title: "Vocabulary Builder",
      description: "Learn new words with spaced repetition flashcards and quizzes.",
      icon: "\u{1F4DA}",
      status: "Coming Soon",
      href: "#"
    },
    {
      title: "Pronunciation Coach",
      description: "Record yourself and compare with native speakers.",
      icon: "\u{1F3A4}",
      status: "Coming Soon",
      href: "#"
    }
  ];
  const games = [
    { title: "Grammar Challenge", description: "Test your grammar knowledge", icon: "\u{1F3AF}", href: "#" },
    { title: "Word Match", description: "Match words with definitions", icon: "\u{1F524}", href: "#" },
    { title: "Fill in the Blank", description: "Complete sentences correctly", icon: "\u{1F4DD}", href: "#" },
    { title: "Spelling Bee", description: "Spell words correctly", icon: "\u{1F41D}", href: "#" }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Free English Learning Tools | LearnEnglish.Life", "description": "Free interactive tools for English learners, grammar checker, vocabulary builder, pronunciation practice and more. No signup required." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="bg-gradient-to-br from-emerald-950/60 to-teal-950/60 py-12"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
Free AI-Powered Learning Tools
</h1> <p class="text-lg text-slate-300 max-w-2xl mx-auto">
Practice English for free with our interactive tools and games. 
        No account required.
</p> </div> </section>  <section class="py-12"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-2xl font-bold text-gray-100 mb-6">AI Learning Tools</h2> <div class="grid md:grid-cols-2 gap-6"> ${tools.map((tool) => renderTemplate`<div class="bg-slate-900/60 rounded-xl p-6 shadow-sm border border-gray-700"> <div class="flex items-start gap-4"> <span class="text-4xl">${tool.icon}</span> <div class="flex-1"> <div class="flex items-center gap-2 mb-1"> <h3 class="text-xl font-semibold text-gray-100">${tool.title}</h3> <span class="px-2 py-0.5 text-xs font-medium bg-amber-900/40 text-amber-300 rounded-full"> ${tool.status} </span> </div> <p class="text-slate-300 mb-4">${tool.description}</p> <button disabled class="px-4 py-2 bg-gray-300 text-slate-400 rounded-lg cursor-not-allowed">
Coming Soon
</button> </div> </div> </div>`)} </div> </div> </section>  <div class="py-8"> <div class="max-w-6xl mx-auto px-4"> ${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "fluid" })} </div> </div>  <section class="py-12 bg-neutral-800"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-2xl font-bold text-gray-100 mb-6">Interactive Games</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${games.map((game) => renderTemplate`<a${addAttribute(game.href, "href")} class="bg-slate-900/60 rounded-xl p-6 shadow-sm border border-gray-700 hover:shadow-md hover:border-emerald-300 transition-all text-center group"> <span class="text-5xl mb-4 block">${game.icon}</span> <h3 class="text-lg font-semibold text-gray-100 mb-1 group-hover:text-emerald-600"> ${game.title} </h3> <p class="text-sm text-slate-400">${game.description}</p> </a>`)} </div> </div> </section>  <section class="py-12 bg-emerald-700"> <div class="max-w-4xl mx-auto px-4 text-center"> <h2 class="text-2xl font-bold text-white mb-4">
Want Personalized Recommendations?
</h2> <p class="text-emerald-100 mb-6">
Tell us your level and goals, and we'll suggest the perfect platform for you.
</p> <a href="/reviews/" class="inline-block px-6 py-3 bg-slate-900/60 text-emerald-600 font-semibold rounded-lg hover:bg-gray-900/40">
Browse Platform Reviews
</a> </div> </section>  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/var/www/learnenglish.life/src/pages/tools/index.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/tools/index.astro";
const $$url = "/tools";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
