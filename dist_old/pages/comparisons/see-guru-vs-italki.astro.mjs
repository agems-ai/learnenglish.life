import { e as createAstro, c as createComponent } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://learnenglish.life");
const $$SeeGuruVsItalki = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SeeGuruVsItalki;
  return Astro2.redirect("/compare/see-guru-vs-italki/", 301);
}, "/var/www/learnenglish.life/src/pages/comparisons/see-guru-vs-italki.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/comparisons/see-guru-vs-italki.astro";
const $$url = "/comparisons/see-guru-vs-italki";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SeeGuruVsItalki,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
