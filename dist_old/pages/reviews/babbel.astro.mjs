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
const $$Babbel = createComponent(($$result, $$props, $$slots) => {
  const review = {
    title: "Babbel Review",
    rating: 4.3,
    reviewCount: 15600,
    price: "From $13.95/mo",
    description: "Babbel is a structured language learning app focused on practical conversation skills. With grammar explanations and cultural insights, it's great for learners who want real-world English.",
    publishedTime: "2026-01-12",
    pros: ["Practical conversation focus", "Grammar explanations built-in", "Cultural insights included", "Short 10-15 min lessons", "Voice recognition for speaking practice"],
    cons: ["No live tutor option", "Limited free version", "Speech recognition accuracy varies"]
  };
  const comparison = [
    { feature: "Price Range", italki: "$10-50/hr", preply: "$10-45/hr", babbel: "$13.95/mo" },
    { feature: "Tutors", italki: "10,000+", preply: "5,000+", babbel: "AI only" },
    { feature: "Native Speakers", italki: "Yes", preply: "Yes", babbel: "Audio only" },
    { feature: "Free Trial", italki: "Community", preply: "Limited", babbel: "Free first lesson" },
    { feature: "Mobile App", italki: "iOS/Android", preply: "iOS/Android", babbel: "iOS/Android" }
  ];
  const fullStars = Math.floor(review.rating);
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": { "@type": "SoftwareApplication", "name": "Babbel", "applicationCategory": "EducationApplication" },
    "reviewRating": { "@type": "Rating", "ratingValue": "4.3", "bestRating": "10", "worstRating": "1" },
    "author": { "@type": "Organization", "name": "LearnEnglish.Life" },
    "datePublished": review.publishedTime
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://learnenglish.life" },
      { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://learnenglish.life/reviews" },
      { "@type": "ListItem", "position": 3, "name": "Babbel" }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Babbel Review 2026: Pricing, Features & Honest Verdict", "description": review.description, "type": "article", "publishedTime": review.publishedTime }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<nav class="bg-neutral-800 py-3"> <div class="max-w-4xl mx-auto px-4 text-sm"> <ol class="flex items-center gap-2 text-neutral-300"> <li><a href="/" class="hover:text-purple-600">Home</a></li> <li>/</li> <li><a href="/reviews/" class="hover:text-purple-600">Reviews</a></li> <li>/</li> <li class="text-gray-100">Babbel</li> </ol> </div> </nav> <div class="bg-purple-600 py-8"> <div class="max-w-4xl mx-auto px-4"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div> <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Babbel Review</h1> <div class="flex items-center gap-2"> <div class="flex"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(`w-6 h-6 ${i < fullStars ? "text-yellow-400" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <span class="text-xl text-white font-semibold">${review.rating}/5</span> </div> <p class="text-purple-100 mt-2">Based on ${review.reviewCount.toLocaleString()} reviews</p> </div> <div class="text-center md:text-right"> <p class="text-sm text-purple-200">Starting from</p> <p class="text-3xl font-bold text-white">${review.price}</p> </div> </div> </div> </div> <div class="bg-amber-900/30 border-b border-amber-700 py-3"> <div class="max-w-4xl mx-auto px-4 text-sm text-amber-200"> <strong>Affiliate Disclosure:</strong> We may earn a commission when you sign up through our links, at no extra cost to you.
</div> </div> <article class="py-8"> <div class="max-w-4xl mx-auto px-4"> <section class="mb-8"> <p class="text-lg text-gray-300 leading-relaxed">${review.description}</p> </section> <div class="bg-purple-900/30 border border-purple-700 rounded-xl p-6 mb-8 text-center"> <a href="https://www.babbel.com" target="_blank" rel="sponsored noopener" class="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">Visit Babbel →</a> </div> <div class="mb-8">${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "horizontal" })}</div> <section class="mb-8 grid md:grid-cols-2 gap-6"> <div class="bg-emerald-900/30 rounded-xl p-6"> <h2 class="text-lg font-semibold text-white mb-4">✅ Pros</h2> <ul class="space-y-3"> ${review.pros.map((pro) => renderTemplate`<li class="flex items-start gap-3 text-neutral-300"> <span class="text-emerald-500 font-bold">✓</span> <span>${pro}</span> </li>`)} </ul> </div> <div class="bg-red-900/30 rounded-xl p-6"> <h2 class="text-lg font-semibold text-white mb-4">⚠️ Cons</h2> <ul class="space-y-3"> ${review.cons.map((con) => renderTemplate`<li class="flex items-start gap-3 text-neutral-300"> <span class="text-red-500 font-bold">−</span> <span>${con}</span> </li>`)} </ul> </div> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-100 mb-4">How Babbel Compares</h2> <div class="overflow-x-auto"> <table class="w-full border-collapse bg-slate-900/60 rounded-xl overflow-hidden shadow-sm"> <thead> <tr class="bg-neutral-800"> <th class="text-left p-4 font-semibold">Feature</th> <th class="text-center p-4 font-semibold">iTalki</th> <th class="text-center p-4 font-semibold">Preply</th> <th class="text-center p-4 font-semibold text-purple-600">Babbel</th> </tr> </thead> <tbody class="divide-y"> ${comparison.map((row) => renderTemplate`<tr class="hover:bg-neutral-800"> <td class="p-4 font-medium">${row.feature}</td> <td class="p-4 text-center">${row.italki}</td> <td class="p-4 text-center">${row.preply}</td> <td class="p-4 text-center">${row.babbel}</td> </tr>`)} </tbody> </table> </div> </section> <div class="mb-8">${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "fluid" })}</div> <section class="bg-neutral-800 rounded-xl p-6 mb-8"> <h2 class="text-xl font-bold text-white mb-3">Our Verdict</h2> <p class="text-gray-300">Babbel is excellent for learners who want structured grammar lessons and practical conversation skills. It's particularly strong for those planning to travel or work in English-speaking environments.</p> </section> <section class="bg-purple-600 rounded-xl p-8 text-center"> <h3 class="text-2xl font-bold text-white mb-2">Ready to try Babbel?</h3> <p class="text-purple-100 mb-6">Learn English the practical way.</p> <a href="https://www.babbel.com" target="_blank" rel="sponsored noopener" class="inline-block px-8 py-4 bg-slate-900/60 text-purple-600 font-bold rounded-lg hover:bg-neutral-800">Get Started →</a> </section> <p class="text-sm text-slate-400 text-center mt-6"> <a href="/affiliate-disclosure/" class="text-purple-600 hover:underline">Affiliate disclosure</a> </p> </div> </article> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "structured-data": ($$result2) => renderTemplate(_a || (_a = __template(['<span> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> ", " </span>"])), unescapeHTML(JSON.stringify(reviewSchema)), unescapeHTML(JSON.stringify(breadcrumbSchema)), renderComponent($$result2, "ArticleSchema", $$ArticleSchema, { "title": review.title, "description": review.description, "publishedTime": review.publishedTime })) })}`;
}, "/var/www/learnenglish.life/src/pages/reviews/babbel.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/reviews/babbel.astro";
const $$url = "/reviews/babbel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Babbel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
