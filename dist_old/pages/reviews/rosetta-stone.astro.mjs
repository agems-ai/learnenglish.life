import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DZoc_vH5.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$AdUnit } from '../../chunks/AdUnit_CfA3FelO.mjs';
import { $ as $$ArticleSchema } from '../../chunks/ArticleSchema_Cy6QqPfR.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RosettaStone = createComponent(($$result, $$props, $$slots) => {
  const review = {
    title: "Rosetta Stone Review",
    rating: 4.1,
    reviewCount: 8900,
    price: "From $11.99/mo",
    description: "Rosetta Stone uses immersive language learning inspired by how children learn their first language. With TruAccent speech recognition, it's great for pronunciation practice.",
    publishedTime: "2026-01-18",
    pros: ["Immersive learning method", "Excellent pronunciation feedback", "Offline access available", "Structured curriculum progression", "Business English courses available"],
    cons: ["Expensive subscription model", "Limited conversation practice", "Less engaging than gamified apps", "Immersion method not for everyone"]
  };
  const comparison = [
    { feature: "Price Range", rosetta: "$11.99/mo", duolingo: "Free/$12.99/mo", babbel: "$13.95/mo" },
    { feature: "Live Tutors", rosetta: "No", duolingo: "No", babbel: "No" },
    { feature: "Immersion Method", rosetta: "Yes", duolingo: "No", babbel: "No" },
    { feature: "Offline Mode", rosetta: "Yes", duolingo: "Plus only", babbel: "No" },
    { feature: "Speech Recognition", rosetta: "TruAccent", duolingo: "Basic", babbel: "Yes" }
  ];
  const fullStars = Math.floor(review.rating);
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": { "@type": "SoftwareApplication", "name": "Rosetta Stone", "applicationCategory": "EducationApplication" },
    "reviewRating": { "@type": "Rating", "ratingValue": "4.1", "bestRating": "10", "worstRating": "1" },
    "author": { "@type": "Organization", "name": "LearnEnglish.Life" },
    "datePublished": review.publishedTime
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://learnenglish.life" },
      { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://learnenglish.life/reviews" },
      { "@type": "ListItem", "position": 3, "name": "Rosetta Stone" }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Rosetta Stone Review 2026: Pricing, Features & Honest Verdict", "description": review.description, "type": "article", "publishedTime": review.publishedTime }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<nav class="bg-neutral-800 py-3"> <div class="max-w-4xl mx-auto px-4 text-sm"> <ol class="flex items-center gap-2 text-neutral-300"> <li><a href="/" class="hover:text-cyan-600">Home</a></li> <li>/</li> <li><a href="/reviews/" class="hover:text-cyan-600">Reviews</a></li> <li>/</li> <li class="text-gray-100">Rosetta Stone</li> </ol> </div> </nav> <div class="bg-cyan-600 py-8"> <div class="max-w-4xl mx-auto px-4"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div> <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Rosetta Stone Review</h1> <div class="flex items-center gap-2"> <div class="flex"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(`w-6 h-6 ${i < fullStars ? "text-yellow-400" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <span class="text-xl text-white font-semibold">${review.rating}/5</span> </div> <p class="text-cyan-100 mt-2">Based on ${review.reviewCount.toLocaleString()} reviews</p> </div> <div class="text-center md:text-right"> <p class="text-sm text-cyan-200">Starting from</p> <p class="text-3xl font-bold text-white">${review.price}</p> </div> </div> </div> </div> <div class="bg-amber-900/30 border-b border-amber-700 py-3"> <div class="max-w-4xl mx-auto px-4 text-sm text-amber-200"> <strong>Affiliate Disclosure:</strong> We may earn a commission when you sign up through our links, at no extra cost to you.
</div> </div> <article class="py-8"> <div class="max-w-4xl mx-auto px-4"> <section class="mb-8"> <p class="text-lg text-gray-300 leading-relaxed">${review.description}</p> </section> <div class="bg-cyan-950/60 border border-cyan-700 rounded-xl p-6 mb-8 text-center"> <a href="https://www.rosettastone.com" target="_blank" rel="sponsored noopener" class="inline-block px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700">Visit Rosetta Stone →</a> </div> <div class="mb-8">${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "horizontal" })}</div> <section class="mb-8 grid md:grid-cols-2 gap-6"> <div class="bg-emerald-900/30 rounded-xl p-6"> <h2 class="text-lg font-semibold text-white mb-4">✅ Pros</h2> <ul class="space-y-3"> ${review.pros.map((pro) => renderTemplate`<li class="flex items-start gap-3 text-neutral-300"> <span class="text-emerald-500 font-bold">✓</span> <span>${pro}</span> </li>`)} </ul> </div> <div class="bg-red-900/30 rounded-xl p-6"> <h2 class="text-lg font-semibold text-white mb-4">⚠️ Cons</h2> <ul class="space-y-3"> ${review.cons.map((con) => renderTemplate`<li class="flex items-start gap-3 text-neutral-300"> <span class="text-red-500 font-bold">−</span> <span>${con}</span> </li>`)} </ul> </div> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-100 mb-4">How Rosetta Stone Compares</h2> <div class="overflow-x-auto"> <table class="w-full border-collapse bg-slate-900/60 rounded-xl overflow-hidden shadow-sm"> <thead> <tr class="bg-neutral-800"> <th class="text-left p-4 font-semibold">Feature</th> <th class="text-center p-4 font-semibold text-cyan-600">Rosetta Stone</th> <th class="text-center p-4 font-semibold">Duolingo</th> <th class="text-center p-4 font-semibold">Babbel</th> </tr> </thead> <tbody class="divide-y"> ${comparison.map((row) => renderTemplate`<tr class="hover:bg-neutral-800"> <td class="p-4 font-medium">${row.feature}</td> <td class="p-4 text-center">${row.rosetta}</td> <td class="p-4 text-center">${row.duolingo}</td> <td class="p-4 text-center">${row.babbel}</td> </tr>`)} </tbody> </table> </div> </section> <div class="mb-8">${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "fluid" })}</div> <section class="bg-neutral-800 rounded-xl p-6 mb-8"> <h2 class="text-xl font-bold text-white mb-3">Our Verdict</h2> <p class="text-gray-300">Rosetta Stone is best for learners who prefer the immersive method and want to focus on building a strong foundation in pronunciation. It's more expensive than alternatives but offers offline access and a structured progression.</p> </section> <section class="bg-cyan-600 rounded-xl p-8 text-center"> <h3 class="text-2xl font-bold text-white mb-2">Ready to try Rosetta Stone?</h3> <p class="text-cyan-100 mb-6">Learn English the immersive way.</p> <a href="https://www.rosettastone.com" target="_blank" rel="sponsored noopener" class="inline-block px-8 py-4 bg-slate-900/60 text-cyan-600 font-bold rounded-lg hover:bg-neutral-800">Get Started →</a> </section> <p class="text-sm text-slate-400 text-center mt-6"> <a href="/affiliate-disclosure/" class="text-cyan-600 hover:underline">Affiliate disclosure</a> </p> </div> </article> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "structured-data": ($$result2) => renderTemplate(_a || (_a = __template(['<span> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> ", " </span>"])), unescapeHTML(JSON.stringify(reviewSchema)), unescapeHTML(JSON.stringify(breadcrumbSchema)), renderComponent($$result2, "ArticleSchema", $$ArticleSchema, { "title": review.title, "description": review.description, "publishedTime": review.publishedTime })) })}`;
}, "/var/www/learnenglish.life/src/pages/reviews/rosetta-stone.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/reviews/rosetta-stone.astro";
const $$url = "/reviews/rosetta-stone";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RosettaStone,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
