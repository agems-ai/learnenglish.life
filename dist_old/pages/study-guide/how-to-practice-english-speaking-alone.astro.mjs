import { e as createAstro, c as createComponent } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://learnenglish.life");
const $$HowToPracticeEnglishSpeakingAlone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HowToPracticeEnglishSpeakingAlone;
  return Astro2.redirect("/guides/how-to-practice-speaking-alone/", 301);
}, "/var/www/learnenglish.life/src/pages/study-guide/how-to-practice-english-speaking-alone.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/study-guide/how-to-practice-english-speaking-alone.astro";
const $$url = "/study-guide/how-to-practice-english-speaking-alone";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HowToPracticeEnglishSpeakingAlone,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
