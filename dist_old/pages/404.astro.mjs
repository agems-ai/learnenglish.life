import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DZoc_vH5.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BqrSaoVo.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found | LearnEnglish.Life" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<section class="py-20 text-center"> <div class="max-w-2xl mx-auto px-4"> <span class="text-8xl mb-6 block">🔍</span> <h1 class="text-4xl font-bold text-gray-100 mb-4">Page Not Found</h1> <p class="text-xl text-slate-300 mb-8">
Sorry, we couldn't find the page you're looking for.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/" class="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700">
Go Home
</a> <a href="/reviews/" class="px-6 py-3 bg-slate-800 text-slate-200 font-semibold rounded-lg hover:bg-slate-700 hover:text-white">
Browse Reviews
</a> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/var/www/learnenglish.life/src/pages/404.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
