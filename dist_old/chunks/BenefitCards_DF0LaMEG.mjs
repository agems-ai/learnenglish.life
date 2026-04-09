import { e as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://learnenglish.life");
const $$BenefitCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BenefitCards;
  const {
    title = "Why Learners Choose Us",
    benefits = [
      { icon: "\u{1F3AF}", title: "Personalized Learning", description: "Lessons tailored to your goals and schedule" },
      { icon: "\u{1F4B0}", title: "Affordable Options", description: "Quality tutors starting from $10/hour" },
      { icon: "\u{1F30D}", title: "Native Speakers", description: "Learn from certified native English teachers" },
      { icon: "\u23F0", title: "Flexible Schedule", description: "Book lessons that fit your calendar" }
    ]
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mb-8"> ${title && renderTemplate`<h2 class="text-xl font-bold text-gray-100 mb-4">${title}</h2>`} <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> ${benefits.map((benefit, index) => renderTemplate`<div class="flex gap-4 p-4 bg-slate-900/60 rounded-xl border border-neutral-700 hover:border-emerald-700 hover:shadow-md transition-all"> <div class="flex-shrink-0 w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-2xl"> ${benefit.icon} </div> <div> <h3 class="font-semibold text-gray-100 mb-1">${benefit.title}</h3> <p class="text-sm text-slate-300">${benefit.description}</p> </div> </div>`)} </div> </section>`;
}, "/var/www/learnenglish.life/src/components/BenefitCards.astro", void 0);

export { $$BenefitCards as $ };
