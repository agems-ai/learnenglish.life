import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DZoc_vH5.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_BqrSaoVo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Grammar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "English Grammar Guide. LearnEnglish.Life", "description": "Master English grammar with our comprehensive guide. From basic tenses to advanced structures, learn grammar step by step." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-slate-100 mb-4">English Grammar Guide</h1> <p class="text-lg text-slate-300">Master English grammar from beginner to advanced level.</p> </div> <div class="bg-slate-900/60 rounded-xl border border-slate-700 p-8 mb-8"> <h2 class="text-2xl font-bold text-slate-100 mb-4">Coming Soon</h2> <p class="text-slate-300 mb-4">Our comprehensive grammar guide is being developed. In the meantime, try our interactive games to practice grammar:</p> <a href="/games/grammar/" class="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
Try Grammar Challenge →
</a> </div> <div class="grid md:grid-cols-2 gap-6"> <div class="bg-slate-950/60 rounded-xl p-6"> <h3 class="font-semibold text-slate-100 mb-3">Beginner (A1-A2)</h3> <ul class="space-y-2 text-slate-300 text-sm"> <li>Basic sentence structure</li> <li>Present simple tense</li> <li>Articles (a, an, the)</li> <li>Common verbs</li> </ul> </div> <div class="bg-slate-950/60 rounded-xl p-6"> <h3 class="font-semibold text-slate-100 mb-3">Intermediate (B1-B2)</h3> <ul class="space-y-2 text-slate-300 text-sm"> <li>Past and future tenses</li> <li>Conditional sentences</li> <li>Passive voice</li> <li>Relative clauses</li> </ul> </div> <div class="bg-slate-950/60 rounded-xl p-6"> <h3 class="font-semibold text-slate-100 mb-3">Upper Intermediate (B2-C1)</h3> <ul class="space-y-2 text-slate-300 text-sm"> <li>Modal verbs</li> <li>Reported speech</li> <li>Cleft sentences</li> <li>Inversion</li> </ul> </div> <div class="bg-slate-950/60 rounded-xl p-6"> <h3 class="font-semibold text-slate-100 mb-3">Advanced (C1-C2)</h3> <ul class="space-y-2 text-slate-300 text-sm"> <li>Subjunctive mood</li> <li>Advanced connectors</li> <li>Text cohesion</li> <li>Academic writing</li> </ul> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/var/www/learnenglish.life/src/pages/guides/grammar.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/guides/grammar.astro";
const $$url = "/guides/grammar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Grammar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
