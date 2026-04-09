import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                              */

const $$Astro = createAstro("https://learnenglish.life");
const $$StickyCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StickyCTA;
  const {
    ctaText = "Find Your Tutor (Free)",
    ctaLink = "/go/italki",
    platform = "italki"
  } = Astro2.props;
  const colors = {
    italki: { bg: "bg-emerald-700", hover: "hover:bg-emerald-700" },
    preply: { bg: "bg-indigo-600", hover: "hover:bg-indigo-700" },
    cambly: { bg: "bg-teal-600", hover: "hover:bg-teal-700" }
  };
  const color = colors[platform] || colors.italki;
  return renderTemplate`${maybeRenderHead()}<div id="sticky-cta" class="fixed bottom-0 left-0 right-0 z-50 transform translate-y-full transition-transform duration-300 md:hidden" data-astro-cid-qff7fdmd> <div${addAttribute(`
    ${color.bg} ${color.hover}
    text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)]
    px-4 py-3
  `, "class")} data-astro-cid-qff7fdmd> <div class="max-w-lg mx-auto flex items-center justify-between gap-3" data-astro-cid-qff7fdmd> <div class="flex-1 min-w-0" data-astro-cid-qff7fdmd> <p class="text-sm font-medium truncate" data-astro-cid-qff7fdmd>${ctaText}</p> <p class="text-xs text-white/80" data-astro-cid-qff7fdmd>Join millions of learners</p> </div> <a${addAttribute(ctaLink, "href")} class="
          flex-shrink-0 
          bg-slate-900/60 text-gray-100 
          px-5 py-2.5 rounded-lg 
          font-bold text-sm
          shadow-md
          active:scale-95
          transition-transform
        " data-astro-cid-qff7fdmd>
Try Now →
</a> </div> </div> </div>  `;
}, "/var/www/learnenglish.life/src/components/StickyCTA.astro", void 0);

export { $$StickyCTA as $ };
