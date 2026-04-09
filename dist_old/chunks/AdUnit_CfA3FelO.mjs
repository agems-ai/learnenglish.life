import { e as createAstro, c as createComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from './astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://learnenglish.life");
const $$AdUnit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdUnit;
  const {
    slot = "placeholder",
    format = "auto"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<!-- AdSense Ad Unit -->", '<ins class="adsbygoogle" style="display:block; width:100%; min-height:90px;" data-ad-client="ca-pub-7792548915836467"', ' data-ad-format="auto" data-full-width-responsive="true"></ins> <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7792548915836467" crossorigin="anonymous"><\/script> '])), maybeRenderHead(), addAttribute(slot, "data-ad-slot"));
}, "/var/www/learnenglish.life/src/components/AdUnit.astro", void 0);

export { $$AdUnit as $ };
