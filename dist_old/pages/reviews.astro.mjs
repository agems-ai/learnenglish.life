import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DZoc_vH5.mjs';
import { a as $$Footer, $ as $$Header } from '../chunks/Footer_BqrSaoVo.mjs';
import { $ as $$RatingStars } from '../chunks/RatingStars_DhDgRoEU.mjs';
/* empty css                                 */
import { $ as $$AdUnit } from '../chunks/AdUnit_CfA3FelO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://learnenglish.life");
const $$ReviewCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReviewCard;
  const {
    slug,
    name,
    tagline,
    rating,
    reviewCount,
    price,
    priceLabel = "From",
    badge,
    category,
    class: className = ""
  } = Astro2.props;
  const href = `/reviews/${slug}`;
  const displayPrice = price !== void 0 && price !== null && !isNaN(price) ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(price) : null;
  const platformLogos = {
    "italki": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%2310B981'/%3E%3Ccircle cx='24' cy='20' r='8' fill='white'/%3E%3Ccircle cx='24' cy='34' r='3' fill='white'/%3E%3C/svg%3E",
    "preply": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%23635BFF'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3EP%3C/text%3E%3C/svg%3E",
    "cambly": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%23E85D04'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3EC%3C/text%3E%3C/svg%3E",
    "verbling": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%23E11D48'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3EV%3C/text%3E%3C/svg%3E",
    "duolingo": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%2358CC02'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3ED%3C/text%3E%3C/svg%3E",
    "babbel": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%231E3A8A'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3EB%3C/text%3E%3C/svg%3E",
    "busuu": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%231D4ED8'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='20' font-weight='bold' fill='white' text-anchor='middle'%3EBu%3C/text%3E%3C/svg%3E",
    "lingoda": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%23059669'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3EL%3C/text%3E%3C/svg%3E",
    "memrise": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%238B5CF6'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3EM%3C/text%3E%3C/svg%3E",
    "rosetta-stone": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%230EA5E9'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='20' font-weight='bold' fill='white' text-anchor='middle'%3ERS%3C/text%3E%3C/svg%3E",
    "pimsleur": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%23B45309'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3EP%3C/text%3E%3C/svg%3E",
    "elsa-speak": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%2310B981'/%3E%3Ctext x='24' y='35' font-family='system-ui' font-size='26' font-weight='bold' fill='white' text-anchor='middle'%3EE%3C/text%3E%3C/svg%3E",
    "see-guru": "/brand/see-guru-icon-512.png"
  };
  const logoSrc = platformLogos[slug];
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["group bg-slate-900/60 border border-neutral-700 rounded-xl overflow-hidden hover:border-emerald-500 hover:shadow-lg transition-all duration-200", className], "class:list")} data-astro-cid-6aiyybsj> <a${addAttribute(href, "href")} class="block p-5" data-astro-cid-6aiyybsj> ${badge && renderTemplate`<span class="inline-block px-2 py-0.5 text-xs font-medium bg-emerald-900/40 text-emerald-300 rounded-full mb-3" data-astro-cid-6aiyybsj> ${badge} </span>`} <div class="flex items-start gap-4 mb-3" data-astro-cid-6aiyybsj> ${logoSrc ? renderTemplate`<img${addAttribute(logoSrc, "src")}${addAttribute(name, "alt")} width="48" height="48" class="w-12 h-12 rounded-lg object-contain" loading="lazy" data-astro-cid-6aiyybsj>` : renderTemplate`<div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm" data-astro-cid-6aiyybsj> ${name.charAt(0)} </div>`} <div class="flex-1 min-w-0" data-astro-cid-6aiyybsj> <h3 class="font-bold text-white group-hover:text-emerald-300 transition-colors truncate !text-white" data-astro-cid-6aiyybsj> ${name} </h3> ${tagline && renderTemplate`<p class="text-sm text-slate-300 truncate" data-astro-cid-6aiyybsj>${tagline}</p>`} </div> </div> <div class="flex items-center gap-3 mb-4" data-astro-cid-6aiyybsj> ${renderComponent($$result, "RatingStars", $$RatingStars, { "rating": rating, "size": "sm", "data-astro-cid-6aiyybsj": true })} ${reviewCount !== void 0 && renderTemplate`<span class="text-sm text-slate-400" data-astro-cid-6aiyybsj>(${reviewCount.toLocaleString()} reviews)</span>`} </div> <div class="flex items-center justify-between pt-3 border-t border-neutral-700" data-astro-cid-6aiyybsj> ${displayPrice ? renderTemplate`<div class="text-sm" data-astro-cid-6aiyybsj> <span class="text-slate-400" data-astro-cid-6aiyybsj>${priceLabel}</span> <span class="font-semibold text-neutral-100 ml-1" data-astro-cid-6aiyybsj>${displayPrice}</span> </div>` : renderTemplate`<div class="text-sm text-slate-400" data-astro-cid-6aiyybsj>${priceLabel || "See site"}</div>`} <span class="text-sm font-medium text-emerald-400 group-hover:text-emerald-300 group-hover:underline" data-astro-cid-6aiyybsj>
Read Review →
</span> </div> </a> </article> `;
}, "/var/www/learnenglish.life/src/components/ReviewCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const platforms = [
    { name: "See Guru", rating: 4.8, reviews: 6257, price: 5, priceLabel: "From $5/lesson", slug: "see-guru", category: "Tutoring", categories: ["Tutoring", "Conversation", "Courses"], tagline: "1-on-1 lessons with certified diploma-holding tutors", featured: true },
    { name: "iTalki", rating: 4.7, reviews: 12500, price: 10, priceLabel: "From $10/hr", slug: "italki", category: "Tutoring", tagline: "Affordable 1-on-1 tutoring" },
    { name: "Preply", rating: 4.6, reviews: 8900, price: 10, priceLabel: "From $10/hr", slug: "preply", category: "Tutoring", tagline: "Flexible lesson scheduling" },
    { name: "Cambly", rating: 4.4, reviews: 7200, price: 6.5, priceLabel: "From $6.50/wk", slug: "cambly", category: "Conversation", tagline: "Unlimited conversation practice" },
    { name: "Verbling", rating: 4.5, reviews: 5400, price: 15, priceLabel: "From $15/hr", slug: "verbling", category: "Tutoring", tagline: "Native speaker tutors" },
    { name: "Duolingo", rating: 4.3, reviews: 15e3, price: void 0, priceLabel: "Free", slug: "duolingo", category: "Apps", tagline: "Gamified language learning" },
    { name: "Babbel", rating: 4.4, reviews: 8500, price: 6.95, priceLabel: "From $6.95/mo", slug: "babbel", category: "Apps", tagline: "Conversational focus" },
    { name: "Rosetta Stone", rating: 4.1, reviews: 6e3, price: 11.99, priceLabel: "From $11.99/mo", slug: "rosetta-stone", category: "Apps", tagline: "Immersion method" },
    { name: "Busuu", rating: 4.2, reviews: 4800, price: 11.99, priceLabel: "From $11.99/mo", slug: "busuu", category: "Apps", tagline: "Peer correction feature" },
    { name: "Elsa Speak", rating: 4.3, reviews: 3200, price: void 0, priceLabel: "Free tier available", slug: "elsa-speak", category: "Apps", tagline: "AI pronunciation coach" },
    { name: "Lingoda", rating: 4.4, reviews: 4100, price: 12, priceLabel: "From $12/hr", slug: "lingoda", category: "Courses", tagline: "Live group classes" },
    { name: "Memrise", rating: 4.2, reviews: 5800, price: 7.49, priceLabel: "From $7.49/mo", slug: "memrise", category: "Apps", tagline: "Memory science method" },
    { name: "Pimsleur", rating: 4.5, reviews: 4500, price: 14.95, priceLabel: "From $14.95/mo", slug: "pimsleur", category: "Courses", tagline: "Audio-based learning" }
  ];
  const categories = ["All", "Tutoring", "Conversation", "Courses", "Apps", "Games"];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "English Learning Platform Reviews | LearnEnglish.Life", "description": "In-depth, hands-on reviews of the most popular English learning platforms, Preply, iTalki, Cambly, See Guru, Duolingo and more. Pricing, pros, cons and who each one is best for." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", '<section class="bg-gradient-to-br from-emerald-950 via-neutral-950 to-teal-950 py-12 border-b border-slate-800"> <div class="max-w-6xl mx-auto px-4"> <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">\nEnglish Learning Platform Reviews\n</h1> <p class="text-slate-300 text-lg">\nHonest, in-depth reviews of ', '+ platforms based on real user experiences\n</p> </div> </section>  <section class="bg-slate-950 border-b border-slate-800 py-4 sticky top-16 z-10"> <div class="max-w-6xl mx-auto px-4"> <div class="flex flex-wrap gap-2" id="category-filters"> ', ' </div> </div> </section>  <div class="py-4 bg-neutral-800"> <div class="max-w-6xl mx-auto px-4"> ', ' </div> </div>  <section class="py-12"> <div class="max-w-6xl mx-auto px-4"> <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="reviews-grid"> ', ` </div> </div> </section> <script>
    (function () {
      const buttons = document.querySelectorAll('.filter-btn');
      const items = document.querySelectorAll('.review-item');
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const cat = btn.getAttribute('data-category');
          buttons.forEach((b) => {
            b.classList.remove('bg-emerald-700', 'text-white');
            b.classList.add('bg-slate-800', 'text-slate-300');
          });
          btn.classList.remove('bg-slate-800', 'text-slate-300');
          btn.classList.add('bg-emerald-700', 'text-white');
          items.forEach((item) => {
            const cats = (item.getAttribute('data-categories') || '').split(',');
            const match = cat === 'All' || cats.includes(cat);
            item.style.display = match ? '' : 'none';
          });
        });
      });
    })();
  <\/script>  <div class="py-8"> <div class="max-w-6xl mx-auto px-4"> `, ` </div> </div>  <section class="py-12 bg-neutral-800"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-2xl font-bold text-gray-100 mb-6">More Platforms Coming Soon</h2> <p class="text-neutral-400 mb-4">
We're continuously adding new reviews. Have a platform you'd like us to cover?
</p> <a href="/contact/" class="text-emerald-600 font-semibold hover:underline">
Request a Review \u2192
</a> </div> </section>  <section class="py-8 bg-neutral-800"> <div class="max-w-4xl mx-auto px-4 text-center"> <p class="text-sm text-slate-400"> <strong>Editorial Integrity:</strong> Our reviews are based on thorough research and user feedback. 
        We may earn affiliate commissions from some links, but this never influences our ratings.
<a href="/affiliate-disclosure/" class="text-emerald-600 hover:underline">Learn more</a> </p> </div> </section> `, " "])), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), platforms.length, categories.map((cat) => renderTemplate`<button${addAttribute(cat, "data-category")}${addAttribute(`filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === "All" ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"}`, "class")}> ${cat} </button>`), renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "header", "format": "horizontal" }), platforms.map((platform) => renderTemplate`<div class="review-item"${addAttribute((platform.categories || [platform.category]).join(","), "data-categories")}> ${renderComponent($$result2, "ReviewCard", $$ReviewCard, { "name": platform.name, "rating": platform.rating, "reviewCount": platform.reviews, "price": platform.price, "priceLabel": platform.priceLabel, "slug": platform.slug, "category": platform.category, "tagline": platform.tagline })} </div>`), renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-article", "format": "fluid" }), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "/var/www/learnenglish.life/src/pages/reviews/index.astro", void 0);

const $$file = "/var/www/learnenglish.life/src/pages/reviews/index.astro";
const $$url = "/reviews";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
