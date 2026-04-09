import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML } from './astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import { $ as $$RatingStars } from './RatingStars_DhDgRoEU.mjs';

const $$Astro = createAstro("https://learnenglish.life");
const $$PlatformRatings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlatformRatings;
  const {
    platform,
    rating,
    reviewCount = 0,
    scale = 5,
    showReviewCount = true,
    variant = "inline",
    color = "emerald",
    class: className = ""
  } = Astro2.props;
  const normalizedRating = scale === 10 ? rating / 2 : rating;
  const reviewCountDisplay = reviewCount > 1e3 ? `${(reviewCount / 1e3).toFixed(1)}K+` : reviewCount > 0 ? reviewCount.toLocaleString() : null;
  const getBadge = () => {
    if (normalizedRating >= 4.5) return { text: "Top Rated", icon: "\u{1F3C6}", class: "bg-amber-500/20 text-amber-300 border-amber-500/30" };
    if (normalizedRating >= 4) return { text: "Highly Rated", icon: "\u2B50", class: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" };
    if (normalizedRating >= 3.5) return { text: "Popular", icon: "\u{1F44D}", class: "bg-green-500/20 text-green-300 border-green-500/30" };
    return null;
  };
  const badge = getBadge();
  const colorClasses = {
    emerald: "text-emerald-400",
    purple: "text-purple-400",
    blue: "text-blue-400",
    orange: "text-orange-400",
    slate: "text-slate-400"
  };
  const verifiedIcon = `<svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
  const usersIcon = `<svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>`;
  return renderTemplate`${variant === "card" && renderTemplate`${maybeRenderHead()}<div${addAttribute(["bg-slate-800/50 rounded-lg p-4 border border-slate-700/50", className], "class:list")}><div class="flex items-center justify-between mb-2">${renderComponent($$result, "RatingStars", $$RatingStars, { "rating": normalizedRating, "size": "md", "showValue": false })}${badge && renderTemplate`<span${addAttribute(["text-xs px-2 py-1 rounded-full border", badge.class], "class:list")}>${badge.icon}${badge.text}</span>`}</div><div${addAttribute(["text-2xl font-bold", colorClasses[color]], "class:list")}>${normalizedRating.toFixed(1)}<span class="text-slate-500 text-base font-normal">/5</span></div>${showReviewCount && reviewCountDisplay && renderTemplate`<div class="flex items-center gap-2 mt-2 text-sm text-slate-400">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(usersIcon)}` })}<span>${reviewCountDisplay} verified reviews</span></div>`}</div>`}${variant === "inline" && renderTemplate`<div${addAttribute(["flex items-center gap-4 flex-wrap", className], "class:list")}><div class="flex items-center gap-2">${renderComponent($$result, "RatingStars", $$RatingStars, { "rating": normalizedRating, "size": "sm", "showValue": false })}<span${addAttribute(["font-semibold", colorClasses[color]], "class:list")}>${normalizedRating.toFixed(1)}</span><span class="text-slate-500 text-sm">/5</span></div>${showReviewCount && reviewCountDisplay && renderTemplate`<div class="flex items-center gap-1 text-sm text-slate-400">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(usersIcon)}` })}<span>${reviewCountDisplay} reviews</span></div>`}${badge && renderTemplate`<span${addAttribute(["text-xs px-2 py-0.5 rounded-full border", badge.class], "class:list")}>${badge.icon}${badge.text}</span>`}<div class="flex items-center gap-1 text-xs text-slate-500">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(verifiedIcon)}` })}<span>Verified</span></div></div>`}${variant === "badge" && renderTemplate`<div${addAttribute(["inline-flex items-center gap-2", className], "class:list")}><div${addAttribute(["flex items-center gap-1 text-sm font-semibold", colorClasses[color]], "class:list")}><span class="text-yellow-400">★</span><span>${normalizedRating.toFixed(1)}</span></div>${showReviewCount && reviewCountDisplay && renderTemplate`<span class="text-xs text-slate-400">(${reviewCountDisplay})</span>`}${badge && renderTemplate`<span${addAttribute(["text-xs px-2 py-0.5 rounded-full border", badge.class], "class:list")}>${badge.icon}</span>`}</div>`}`;
}, "/var/www/learnenglish.life/src/components/PlatformRatings.astro", void 0);

export { $$PlatformRatings as $ };
