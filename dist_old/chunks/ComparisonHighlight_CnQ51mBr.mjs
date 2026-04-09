import { e as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, b as addAttribute } from './astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://learnenglish.life");
const $$SocialProof = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialProof;
  const {
    title = "What Learners Are Saying",
    testimonials = [
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
    ]
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mb-8 bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-2xl p-6 md:p-8"> ${title && renderTemplate`<h2 class="text-xl font-bold text-gray-100 mb-6">${title}</h2>`} <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${testimonials.map((testimonial, index) => renderTemplate`<div class="bg-slate-900/60 rounded-xl p-5 shadow-sm"> <!-- Quote --> <p class="text-gray-300 mb-4 italic">"${testimonial.quote}"</p> <!-- Author --> <div class="flex items-center justify-between"> <div> <p class="font-semibold text-gray-100">${testimonial.author}</p> <p class="text-sm text-slate-400">${testimonial.location}</p> </div> ${testimonial.result && renderTemplate`<span class="text-xs bg-emerald-900/40 text-emerald-300 px-2 py-1 rounded-full font-medium"> ${testimonial.result} </span>`} </div> </div>`)} </div> <!-- Trust badges --> <div class="mt-6 flex flex-wrap justify-center gap-6 text-center text-sm text-slate-300"> <div class="flex items-center gap-2"> <span class="text-emerald-600">✓</span> <span>Verified Reviews</span> </div> <div class="flex items-center gap-2"> <span class="text-emerald-600">✓</span> <span>12,500+ Reviews</span> </div> <div class="flex items-center gap-2"> <span class="text-emerald-600">✓</span> <span>Free Trial Available</span> </div> </div> </section>`;
}, "/var/www/learnenglish.life/src/components/SocialProof.astro", void 0);

const $$Astro = createAstro("https://learnenglish.life");
const $$ComparisonHighlight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ComparisonHighlight;
  const {
    title = "How They Compare",
    platformA,
    platformB,
    platformC,
    winner = "a",
    rows = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mb-8"> ${title && renderTemplate`<h2 class="text-2xl font-bold text-gray-100 mb-4">${title}</h2>`} <div class="overflow-x-auto"> <table class="w-full border-collapse bg-slate-900/60 rounded-xl overflow-hidden shadow-sm"> <thead> <tr class="bg-neutral-800"> <th class="text-left p-4 font-semibold text-gray-300">Feature</th> <th${addAttribute(`text-center p-4 font-semibold ${winner === "a" ? "bg-emerald-900/30 text-emerald-300" : "text-gray-300"}`, "class")}> ${platformA.name} ${winner === "a" && renderTemplate`<span class="ml-1 text-xs bg-emerald-600 text-white px-2 py-0.5 rounded">Best</span>`} </th> <th${addAttribute(`text-center p-4 font-semibold ${winner === "b" ? "bg-emerald-900/30 text-emerald-300" : "text-gray-300"}`, "class")}> ${platformB.name} ${winner === "b" && renderTemplate`<span class="ml-1 text-xs bg-emerald-600 text-white px-2 py-0.5 rounded">Best</span>`} </th> ${platformC && renderTemplate`<th class="text-center p-4 font-semibold text-gray-300"> ${platformC.name} </th>`} </tr> </thead> <tbody class="divide-y"> ${rows.map((row, index) => renderTemplate`<tr class="hover:bg-neutral-800 transition-colors"> <td class="p-4 font-medium text-gray-300">${row.feature}</td> <td${addAttribute(`p-4 text-center ${winner === "a" && row.winner === "a" ? "bg-emerald-900/30 font-semibold" : ""}`, "class")}> ${row.winner === "a" ? renderTemplate`<span class="flex items-center justify-center gap-1"> <span class="text-emerald-600">✓</span> <span>${row.a}</span> </span>` : renderTemplate`<span>${row.a}</span>`} </td> <td${addAttribute(`p-4 text-center ${winner === "b" && row.winner === "b" ? "bg-emerald-900/30 font-semibold" : ""}`, "class")}> ${row.winner === "b" ? renderTemplate`<span class="flex items-center justify-center gap-1"> <span class="text-emerald-600">✓</span> <span>${row.b}</span> </span>` : renderTemplate`<span>${row.b}</span>`} </td> ${platformC && row.c && renderTemplate`<td class="p-4 text-center text-slate-300">${row.c}</td>`} </tr>`)} </tbody> </table> </div> <!-- CTA for winner --> <div class="mt-4 bg-emerald-900/30 border border-emerald-700 rounded-xl p-4 text-center"> <p class="text-emerald-200 mb-2"> <strong>${winner === "a" ? platformA.name : platformB.name}</strong> is our top pick for most learners
</p> <a${addAttribute(winner === "a" ? platformA.link : platformB.link, "href")} class="inline-block bg-emerald-700 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-lg transition-colors">
Try ${winner === "a" ? platformA.name : platformB.name} Free →
</a> </div> </section>`;
}, "/var/www/learnenglish.life/src/components/ComparisonHighlight.astro", void 0);

export { $$ComparisonHighlight as $, $$SocialProof as a };
