import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DZoc_vH5.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$AdUnit } from '../chunks/AdUnit_CfA3FelO.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      title: "How to Practice English Speaking Alone",
      excerpt: "You don't need a textbook or a partner. Here are proven methods to practice English using just your phone and daily life.",
      category: "Tips",
      readTime: "5 min",
      date: "April 5, 2026",
      href: "/study-guide/how-to-practice-english-speaking-alone/",
      image: "/blog/speaking-alone.jpg"
    },
    {
      title: "iTalki vs Preply: Which is Better in 2026?",
      excerpt: "We compared pricing, teacher quality, and user experience. Here's what we found.",
      category: "Comparisons",
      readTime: "8 min",
      date: "April 3, 2026",
      href: "/comparisons/italki-vs-preply/",
      image: "/blog/italki-vs-preply.jpg"
    },
    {
      title: "How to Choose the Right English Tutor",
      excerpt: "Picking the right tutor changes everything. Our guide walks through the questions to ask and the red flags to watch.",
      category: "Tutoring",
      readTime: "6 min",
      date: "April 1, 2026",
      href: "/study-guide/how-to-choose-english-tutor/",
      image: "/blog/choose-tutor.jpg"
    },
    {
      title: "Best English Apps for Beginners",
      excerpt: "Starting from zero. These apps give the smoothest path from your first word to your first conversation.",
      category: "Resources",
      readTime: "4 min",
      date: "March 28, 2026",
      href: "/guides/best-english-apps-for-beginners/",
      image: "/blog/apps-beginners.jpg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "English Learning Blog | LearnEnglish.Life", "description": "Tips, study guides and platform news for learners. Practical articles on grammar, speaking, tutors, apps and getting fluent faster." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="bg-gradient-to-br from-emerald-950 via-neutral-950 to-teal-950 py-12 border-b border-slate-800"> <div class="max-w-6xl mx-auto px-4"> <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
English Learning Blog
</h1> <p class="text-slate-300 text-lg">
Tips, guides, and the latest news in language learning
</p> </div> </section>  <div class="py-4 bg-neutral-800"> <div class="max-w-6xl mx-auto px-4"> ${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "header", "format": "horizontal" })} </div> </div>  <section class="py-12"> <div class="max-w-6xl mx-auto px-4"> <div class="grid md:grid-cols-2 gap-8"> ${posts.map((post) => renderTemplate`<a${addAttribute(post.href, "href")} class="block group bg-slate-900/60 rounded-xl border border-slate-700 overflow-hidden hover:border-emerald-500 transition-colors"> <div class="h-48 overflow-hidden"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> </div> <div class="p-6"> <div class="flex items-center gap-3 text-sm text-slate-400 mb-3"> <span class="px-2 py-1 bg-emerald-900/40 text-emerald-400 rounded-full text-xs font-medium"> ${post.category} </span> <span>${post.readTime} read</span> <span>•</span> <span>${post.date}</span> </div> <h2 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors"> ${post.title} </h2> <p class="text-slate-300 mb-4">${post.excerpt}</p> <span class="text-emerald-400 font-semibold group-hover:text-emerald-300">
Read More →
</span> </div> </a>`)} </div> </div> </section>  <div class="py-8"> <div class="max-w-6xl mx-auto px-4"> ${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "fluid" })} </div> </div>  <section class="py-12 bg-slate-950 border-y border-slate-800"> <div class="max-w-2xl mx-auto px-4 text-center"> <h2 class="text-2xl font-bold text-white mb-4">Looking for the right platform?</h2> <p class="text-slate-200 mb-6">
We've tested every major English learning service so you don't have to. See our full review library.
</p> <a href="/reviews/" class="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors">
Read more reviews →
</a> </div> </section>  <section class="py-8 bg-gray-900/40"> <div class="max-w-4xl mx-auto px-4 text-center"> <p class="text-sm text-slate-400"></p> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/var/www/learnenglish.life/src/pages/blog/index.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
