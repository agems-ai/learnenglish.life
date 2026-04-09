import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DZoc_vH5.mjs';
import { a as $$Footer, $ as $$Header } from '../../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$AdUnit } from '../../chunks/AdUnit_CfA3FelO.mjs';
import { $ as $$ArticleSchema } from '../../chunks/ArticleSchema_Cy6QqPfR.mjs';
import 'clsx';
import { $ as $$StickyCTA } from '../../chunks/StickyCTA_CJElHHTS.mjs';
import { $ as $$BenefitCards } from '../../chunks/BenefitCards_DF0LaMEG.mjs';
import { $ as $$ComparisonHighlight, a as $$SocialProof } from '../../chunks/ComparisonHighlight_CnQ51mBr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://learnenglish.life");
const $$HeroCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroCTA;
  const {
    platform = "italki",
    rating = 4.7,
    reviewCount = 12500,
    price = "From $10/hr",
    ctaText = "Find Your Tutor (Free)",
    ctaLink = "/go/italki",
    title = "Find Your Perfect English Tutor",
    subtitle = "Join millions of learners improving their English with personalized 1-on-1 lessons"
  } = Astro2.props;
  const platforms = {
    italki: {
      name: "iTalki",
      color: "emerald",
      badge: "10M+ learners"
    },
    preply: {
      name: "Preply",
      color: "indigo",
      badge: "50K+ tutors"
    },
    cambly: {
      name: "Cambly",
      color: "teal",
      badge: "Native speakers"
    }
  };
  const p = platforms[platform] || platforms.italki;
  const colorClass = `text-${p.color}-600`;
  const bgClass = `bg-${p.color}-50`;
  const borderClass = `border-${p.color}-200`;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
  ${bgClass} border ${borderClass} rounded-2xl 
  p-6 md:p-8 mb-8
`, "class")}> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"> <!-- Left: Info --> <div class="flex-1"> <!-- Platform badge --> <span${addAttribute(`
        inline-block 
        ${bgClass} border ${borderClass}
        ${colorClass}
        text-xs font-semibold px-3 py-1 rounded-full mb-3
      `, "class")}> ${p.badge} </span> <!-- Title --> <h1 class="text-2xl md:text-3xl font-bold text-gray-100 mb-2"> ${title} </h1> <!-- Subtitle --> <p class="text-slate-300 mb-4 max-w-xl"> ${subtitle} </p> <!-- Trust indicators --> <div class="flex flex-wrap items-center gap-4 text-sm"> <!-- Rating --> <div class="flex items-center gap-1.5"> <span class="text-yellow-500">★</span> <span class="font-semibold">${rating}/5</span> <span class="text-slate-400">(${reviewCount.toLocaleString()} reviews)</span> </div> <!-- Price --> <div class="flex items-center gap-1.5"> <span class="text-green-600 font-semibold">${price}</span> </div> </div> </div> <!-- Right: CTA --> <div class="flex-shrink-0"> <a${addAttribute(ctaLink, "href")} class="
          block
          \${p.color === 'emerald' ? 'bg-emerald-700 hover:bg-emerald-700' : ''}
          \${p.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700' : ''}
          \${p.color === 'teal' ? 'bg-teal-600 hover:bg-teal-700' : ''}
          text-white text-center
          px-8 py-4 rounded-xl
          font-bold text-lg
          shadow-lg
          transform hover:scale-105
          active:scale-95
          transition-all
        "> ${ctaText} →
</a> <p class="text-center text-xs text-slate-400 mt-2">
Free community access available
</p> </div> </div> </section>`;
}, "/var/www/learnenglish.life/src/components/HeroCTA.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Italki = createComponent(($$result, $$props, $$slots) => {
  const review = {
    title: "iTalki Review",
    rating: 9.2,
    reviewCount: 12500,
    price: "From $5/hr",
    heroTitle: "iTalki Review 2026: Real Pricing, Tutors & Honest Verdict",
    heroSubtitle: "Join 10M+ learners who improved their English with iTalki. Book a lesson with a native speaker for as low as $5.",
    description: "Updated iTalki review 2026. Real tutor prices ($5-$50/hr), pros, cons, and what makes it the top choice for 1-on-1 lessons.",
    publishedTime: "2026-01-08",
    pros: [
      "Choose from 10,000+ tutors to find your perfect match",
      "Lessons from $5. less than a cup of coffee",
      "Book lessons anytime. early morning to late night",
      "Learn from native speakers from the US, UK, Australia",
      "Test your tutor before committing. risk-free"
    ],
    cons: [
      "Quality varies between tutors",
      "Peak hour availability can be limited",
      "Occasional connection issues"
    ],
    ctaPrimary: "Find Your Tutor (Free)",
    ctaSecondary: "Start Speaking Today",
    ctaLink: "/go/italki"
  };
  const benefits = [
    { icon: "\u{1F3AF}", title: "Personalized 1-on-1 Lessons", description: "Every lesson tailored to YOUR goals. conversation, business, exams" },
    { icon: "\u{1F4B0}", title: "Starting at Just $5/hr", description: "Affordable community tutors cost less than a cup of coffee" },
    { icon: "\u{1F30D}", title: "10,000+ Native Speakers", description: "Learn from certified teachers from US, UK, Australia, Canada" },
    { icon: "\u23F0", title: "Book Anytime, 24/7", description: "Morning, noon, or midnight. fit learning into YOUR schedule" }
  ];
  const testimonials = [
    {
      quote: "Found my perfect tutor in just 2 days. My speaking confidence improved dramatically within weeks.",
      author: "Maria G.",
      location: "Brazil",
      result: "IELTS 7.5 \u2192 8.0"
    },
    {
      quote: "The flexibility to book lessons whenever I have time is amazing. No more missed classes.",
      author: "Kenji T.",
      location: "Japan",
      result: "Business English improved"
    },
    {
      quote: "Affordable native speakers helped me finally lose my accent anxiety. Highly recommend!",
      author: "Ahmed K.",
      location: "UAE",
      result: "Fluent in 6 months"
    }
  ];
  const comparisonRows = [
    { feature: "Price Range", winner: "a", a: "$5-40/hr", b: "$10-45/hr" },
    { feature: "Tutors", winner: "a", a: "10,000+", b: "5,000+" },
    { feature: "Native Speakers", winner: null, a: "Yes", b: "Yes" },
    { feature: "Free Trial", winner: "a", a: "Community", b: "Limited" },
    { feature: "Lesson Replay", winner: "a", a: "Yes", b: "No" }
  ];
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "iTalki",
      "applicationCategory": "EducationApplication"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "9.2",
      "bestRating": "10",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "LearnEnglish.Life"
    },
    "datePublished": review.publishedTime
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://learnenglish.life" },
      { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://learnenglish.life/reviews" },
      { "@type": "ListItem", "position": 3, "name": "iTalki" }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "iTalki Review 2026: Real Pricing, Tutors & Pros Cons", "description": review.description, "type": "article", "publishedTime": review.publishedTime }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", "  ", '<nav class="bg-neutral-800 py-3"> <div class="max-w-4xl mx-auto px-4 text-sm"> <ol class="flex items-center gap-2 text-neutral-300"> <li><a href="/" class="hover:text-emerald-600">Home</a></li> <li>/</li> <li><a href="/reviews/" class="hover:text-emerald-600">Reviews</a></li> <li>/</li> <li class="text-white">iTalki</li> </ol> </div> </nav>  <div class="max-w-4xl mx-auto px-4 pt-6"> ', ' </div>  <div class="bg-amber-900/30 border-b border-amber-700 py-3"> <div class="max-w-4xl mx-auto px-4 text-sm text-amber-200"> <strong>Affiliate Disclosure:</strong> We may earn a commission when you sign up through our links, at no extra cost to you. Our reviews remain unbiased.\n</div> </div>  <article class="pb-24"> <div class="max-w-4xl mx-auto px-4"> <!-- Benefit Cards --> ', " <!-- Social Proof Testimonials --> ", ' <!-- Ad --> <div class="mb-8"> ', ' </div> <!-- Pros & Cons --> <section class="mb-8 grid md:grid-cols-2 gap-6"> <div class="bg-emerald-900/30 rounded-xl p-6"> <h2 class="text-lg font-semibold text-white mb-4">\u2705 Pros</h2> <ul class="space-y-3"> ', ' </ul> </div> <div class="bg-red-900/30 rounded-xl p-6"> <h2 class="text-lg font-semibold text-white mb-4">\u26A0\uFE0F Cons</h2> <ul class="space-y-3"> ', " </ul> </div> </section> <!-- Comparison Table with Winner Highlighting --> ", ' <!-- Ad --> <div class="mb-8"> ', ` </div> <!-- Verdict --> <section class="bg-neutral-800 rounded-xl p-6 mb-8"> <h2 class="text-xl font-bold text-white mb-3">Our Verdict</h2> <p class="text-neutral-300">
With a 9.2/10 rating and over 12,000 verified reviews, iTalki stands out as the most flexible and affordable option for personalized English tutoring. Whether you're preparing for an exam, improving business communication, or building everyday conversation skills. iTalki's massive tutor pool ensures you'll find the perfect match.
</p> <p class="mt-3 text-gray-300 font-medium">
Don't wait to start speaking. The perfect tutor is waiting for you. and your first lesson could be free.
</p> </section> <!-- Final CTA --> <section class="bg-emerald-700 rounded-xl p-8 text-center"> <h3 class="text-2xl font-bold text-white mb-2">Ready to try iTalki?</h3> <p class="text-emerald-100 mb-6">Join millions of learners improving their English.</p> <a`, ' class="inline-block px-8 py-4 bg-slate-900/60 text-emerald-600 font-bold rounded-lg hover:bg-neutral-800 transition-colors"> ', ' </a> </section> <!-- Final Disclosure --> <p class="text-sm text-slate-400 text-center mt-6"> <strong>Editorial Note:</strong> Our reviews are based on research and user feedback, not compensation. \n        We may earn affiliate commissions from purchases made through links on this page.\n<a href="/affiliate-disclosure/" class="text-emerald-600 hover:underline">Learn more</a> </p> </div> </article>  ', '  <div class="hidden lg:block lg:float-right lg:ml-8 lg:mb-4"> <div class="sticky top-24 w-72 bg-neutral-800/80 backdrop-blur rounded-xl p-4 border border-neutral-700"> <span class="text-xs text-neutral-500 uppercase tracking-wider mb-2 block">Advertisement</span> <ins class="adsbygoogle" style="display:block; width:300px; height:250px;" data-ad-client="ca-pub-7792548915836467" data-ad-slot="REVIEW-SIDEBAR" data-ad-format="auto"></ins> <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7792548915836467" crossorigin="anonymous"><\/script> </div> </div> ', '  <aside class="my-12 max-w-3xl mx-auto px-4"> <div class="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-700 rounded-2xl p-6 md:p-8"> <div class="flex items-start gap-4"> <div class="text-3xl flex-shrink-0">\u{1F4A1}</div> <div class="flex-1"> <h3 class="text-lg md:text-xl font-bold text-white mb-2">Looking for a different style of tutoring?</h3> <p class="text-slate-200 mb-4">See Guru is the only platform that gives you <strong class="text-emerald-300">three free trial lessons</strong> with real human tutors, not bots, not videos. Certified, diploma-holding English teachers, flexible scheduling, and lessons starting at $5 each. No subscription required.</p> <a href="https://see.guru/?aff=SG-SUAG151" target="_blank" rel="sponsored noopener" class="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors">Get 3 Free Lessons \u2192</a> </div> </div> </div> </aside> '])), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), renderComponent($$result2, "HeroCTA", $$HeroCTA, { "platform": "italki", "rating": review.rating, "reviewCount": review.reviewCount, "price": review.price, "ctaText": review.ctaPrimary, "ctaLink": review.ctaLink, "title": review.heroTitle, "subtitle": review.heroSubtitle }), renderComponent($$result2, "BenefitCards", $$BenefitCards, { "title": "Why Learners Choose iTalki", "benefits": benefits }), renderComponent($$result2, "SocialProof", $$SocialProof, { "title": "Real Results from Real Learners", "testimonials": testimonials }), renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "horizontal" }), review.pros.map((pro) => renderTemplate`<li class="flex items-start gap-3 text-neutral-300"> <span class="text-emerald-500 font-bold">✓</span> <span>${pro}</span> </li>`), review.cons.map((con) => renderTemplate`<li class="flex items-start gap-3 text-neutral-300"> <span class="text-red-500 font-bold">−</span> <span>${con}</span> </li>`), renderComponent($$result2, "ComparisonHighlight", $$ComparisonHighlight, { "title": "iTalki vs Preply: Quick Comparison", "platformA": { name: "iTalki", slug: "italki", link: "/go/italki" }, "platformB": { name: "Preply", slug: "preply", link: "/go/preply" }, "winner": "a", "rows": comparisonRows }), renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "fluid" }), addAttribute(review.ctaLink, "href"), review.ctaSecondary, renderComponent($$result2, "StickyCTA", $$StickyCTA, { "ctaText": review.ctaPrimary, "ctaLink": review.ctaLink, "platform": "italki" }), renderComponent($$result2, "Footer", $$Footer, {})), "structured-data": ($$result2) => renderTemplate(_b || (_b = __template(['<span> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> ", " </span>"])), unescapeHTML(JSON.stringify(reviewSchema)), unescapeHTML(JSON.stringify(breadcrumbSchema)), renderComponent($$result2, "ArticleSchema", $$ArticleSchema, { "title": review.title, "description": review.description, "publishedTime": review.publishedTime })) })}`;
}, "/var/www/learnenglish.life/src/pages/reviews/italki.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/reviews/italki.astro";
const $$url = "/reviews/italki";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Italki,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
