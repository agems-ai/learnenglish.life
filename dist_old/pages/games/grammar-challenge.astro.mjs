import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DZoc_vH5.mjs';
export { renderers } from '../../renderers.mjs';

const $$GrammarChallenge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "English Grammar Challenge. LearnEnglish.Life", "description": "Test your English grammar with our interactive challenge. Learn common grammar rules through practice." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12"> <div class="text-center mb-8"> <span class="inline-block px-3 py-1 bg-emerald-900/40 text-emerald-300 text-sm font-semibold rounded-full mb-4">Grammar</span> <h1 class="text-4xl font-bold text-slate-100 mb-4">Grammar Challenge</h1> <p class="text-lg text-slate-300">Test your knowledge of English grammar rules and patterns.</p> </div> <div class="bg-amber-950/60 border border-amber-700 rounded-xl p-6 mb-8"> <p class="text-amber-200"> <strong>Coming Soon:</strong> This interactive grammar challenge is being developed. Check back soon for grammar exercises organized by topic and difficulty level.
</p> </div> <div class="bg-slate-900/60 rounded-xl border border-slate-700 p-8 text-center"> <div class="text-6xl mb-4">📝</div> <h2 class="text-2xl font-bold text-slate-100 mb-4">Ready to Practice?</h2> <p class="text-slate-300 mb-6">In the meantime, try our other learning tools:</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/games/word-search/" class="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
Word Search
</a> <a href="/games/" class="px-6 py-3 bg-slate-800 text-slate-200 font-semibold rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
All Games
</a> </div> </div> </section> ` })}`;
}, "/var/www/learnenglish.life/src/pages/games/grammar-challenge.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/games/grammar-challenge.astro";
const $$url = "/games/grammar-challenge";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GrammarChallenge,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
