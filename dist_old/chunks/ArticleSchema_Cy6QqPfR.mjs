import { e as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://learnenglish.life");
const $$ArticleSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleSchema;
  const {
    title,
    description,
    publishedTime = (/* @__PURE__ */ new Date()).toISOString(),
    modifiedTime,
    author = "LearnEnglish.Life",
    image = "/og-default.png"
  } = Astro2.props;
  const siteUrl = "https://learnenglish.life";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${siteUrl}${image}`,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "LearnEnglish.Life",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/favicon.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}${Astro2.url.pathname}`
    }
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(articleSchema)));
}, "/var/www/learnenglish.life/src/components/ArticleSchema.astro", void 0);

export { $$ArticleSchema as $ };
