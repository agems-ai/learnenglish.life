import { e as createAstro, c as createComponent } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://learnenglish.life");
const $$ItalkiVsPreply = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItalkiVsPreply;
  return Astro2.redirect("/compare/italki-vs-preply/", 301);
}, "/var/www/learnenglish.life/src/pages/comparisons/italki-vs-preply.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/comparisons/italki-vs-preply.astro";
const $$url = "/comparisons/italki-vs-preply";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ItalkiVsPreply,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
