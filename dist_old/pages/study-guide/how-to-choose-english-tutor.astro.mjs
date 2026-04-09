import { e as createAstro, c as createComponent } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://learnenglish.life");
const $$HowToChooseEnglishTutor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HowToChooseEnglishTutor;
  return Astro2.redirect("/guides/how-to-choose-english-tutor/", 301);
}, "/var/www/learnenglish.life/src/pages/study-guide/how-to-choose-english-tutor.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/study-guide/how-to-choose-english-tutor.astro";
const $$url = "/study-guide/how-to-choose-english-tutor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HowToChooseEnglishTutor,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
