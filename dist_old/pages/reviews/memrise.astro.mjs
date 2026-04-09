import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DZoc_vH5.mjs';
import { $ as $$ArticleSchema } from '../../chunks/ArticleSchema_Cy6QqPfR.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Memrise = createComponent(($$result, $$props, $$slots) => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "Memrise",
      "applicationCategory": "EducationApplication"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.1",
      "bestRating": "10",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "LearnEnglish.Life"
    },
    "datePublished": "2026-01-25"
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://learnenglish.life"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Reviews",
        "item": "https://learnenglish.life/reviews"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Memrise"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Memrise Review 2026", "description": "Honest memrise review with pricing, features, pros and cons." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="max-w-3xl mx-auto px-4 py-12"> <div class="mb-8"> <span class="text-sm text-gray-400">Review</span> <h1 class="text-4xl font-bold mt-1 mb-4">Memrise Review 2026</h1> <p class="text-slate-400">Last updated: April 2026 · 8 min read</p> </div> <div class="bg-blue-900/30 border border-blue-700 rounded-xl p-6 mb-8"> <p class="font-semibold text-primary">This review is coming soon!</p> <p class="text-sm text-neutral-400 mt-1">Our team is currently testing and writing a comprehensive review of Memrise. Check back soon for the full analysis including pricing, features, pros, cons, and our verdict.</p> </div> <div class="flex gap-4"> <a href="/reviews/" class="text-primary font-semibold hover:underline">← All Reviews</a> </div> ${renderComponent($$result2, "ArticleSchema", $$ArticleSchema, { "title": "Memrise Review", "description": "Memrise is a memory-based language learning app that uses spaced repetition and multimedia content to help learners build vocabulary.", "publishedTime": "2026-02-20" })} </article> `, "structured-data": ($$result2) => renderTemplate(_a || (_a = __template(['<span> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> </span>"])), unescapeHTML(JSON.stringify(reviewSchema)), unescapeHTML(JSON.stringify(breadcrumbSchema))) })}`;
}, "/var/www/learnenglish.life/src/pages/reviews/memrise.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/reviews/memrise.astro";
const $$url = "/reviews/memrise";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Memrise,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
