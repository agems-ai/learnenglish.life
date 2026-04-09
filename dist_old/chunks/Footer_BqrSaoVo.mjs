import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://learnenglish.life");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { href: "/reviews/", label: "Reviews" },
    { href: "/compare/", label: "Comparisons" },
    { href: "/guides/", label: "Study" },
    { href: "/games/", label: "Games" },
    { href: "/blog/", label: "Blog" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800 shadow-sm"> <div class="container-site"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <a href="/" class="flex items-center gap-2 focus-ring rounded"> <svg class="w-8 h-8 text-primary-600" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="32" height="32" rx="8" fill="currentColor"></rect> <path d="M8 12C8 9.79086 9.79086 8 12 8H14C16.2091 8 18 9.79086 18 12V14C18 16.2091 16.2091 18 14 18H12C9.79086 18 8 16.2091 8 14V12Z" fill="white"></path> <path d="M14 20C14 17.7909 15.7909 16 18 16H20C22.2091 16 24 17.7909 24 20V22C24 24.2091 22.2091 26 20 26H18C15.7909 26 14 24.2091 14 22V20Z" fill="white"></path> <circle cx="22" cy="12" r="2" fill="white"></circle> </svg> <span class="text-xl font-bold text-slate-200">LearnEnglish<span class="text-primary-600">.life</span></span> </a> <!-- Desktop Navigation --> <nav class="hidden md:flex items-center gap-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "px-4 py-2 rounded-lg font-medium transition-colors",
    currentPath.startsWith(item.href) ? "bg-emerald-900/40 text-emerald-300" : "text-slate-300 hover:bg-slate-800 hover:text-white"
  ], "class:list")}> ${item.label} </a>`)} </nav> <!-- Right side: Search + CTA --> <div class="flex items-center gap-3"> <!-- Search button --> <button type="button" class="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus-ring" aria-label="Search" id="search-toggle"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> <!-- CTA Button --> <a href="/reviews/" class="btn-primary hidden sm:inline-flex">
Start Learning
</a> <!-- Mobile menu button --> <button type="button" class="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus-ring" aria-label="Menu" id="mobile-menu-toggle"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile Navigation --> <nav class="md:hidden hidden pb-4" id="mobile-menu"> <div class="flex flex-col gap-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "px-4 py-2 rounded-lg font-medium transition-colors",
    currentPath.startsWith(item.href) ? "bg-emerald-900/40 text-emerald-300" : "text-slate-300 hover:bg-slate-800 hover:text-white"
  ], "class:list")}> ${item.label} </a>`)} <a href="/reviews/" class="btn-primary mt-2 text-center">
Start Learning
</a> </div> </nav> </div> <!-- Search overlay --> <div id="search-overlay" class="hidden absolute left-0 right-0 top-full bg-slate-950 border-b border-slate-800 shadow-lg"> <div class="container-site py-4"> <div class="relative max-w-2xl mx-auto"> <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <input type="search" id="search-input" class="input pl-12" placeholder="Search reviews, comparisons, guides..." autofocus> <kbd class="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-slate-400 bg-slate-900/40 rounded">
ESC
</kbd> </div> <div id="search-results" class="max-w-2xl mx-auto mt-4 hidden"> <!-- Search results will be populated by Pagefind --> </div> </div> </div> </header> `;
}, "/var/www/learnenglish.life/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    resources: [
      { name: "Platform Reviews", href: "/reviews/" },
      { name: "Compare Platforms", href: "/compare/" },
      { name: "Learning Guides", href: "/guides/" },
      { name: "AI Tools", href: "/tools/" },
      { name: "Blog", href: "/blog/" }
    ],
    company: [
      { name: "About Us", href: "/about/" },
      { name: "Contact", href: "/contact/" },
      { name: "Advertise", href: "/advertise/" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy/" },
      { name: "Terms of Service", href: "/terms/" },
      { name: "Cookie Policy", href: "/cookies/" },
      { name: "Affiliate Disclosure", href: "/affiliate-disclosure/" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="bg-neutral-900 border-t border-neutral-800"> <div class="container-site py-12 lg:py-16"> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"> <!-- Brand Column --> <div class="col-span-2 md:col-span-1"> <a href="/" class="flex items-center gap-2 mb-4"> <div class="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <span class="font-heading font-bold text-lg text-white">
Learn<span class="text-brand-400">English</span>.Life
</span> </a> <p class="text-sm text-neutral-400 mb-4">
Your trusted English learning resource hub. Find the best platforms, tools, and resources to master English.
</p> <!-- Social Links --> <div class="flex gap-3"> <a href="https://twitter.com/learnenglishlife" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors" aria-label="Twitter"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> </a> <a href="https://youtube.com/@learnenglishlife" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors" aria-label="YouTube"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> </a> </div> </div> <!-- Resources Column --> <div> <h3 class="font-semibold text-white mb-4">Resources</h3> <ul class="space-y-2"> ${footerLinks.resources.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-neutral-400 hover:text-brand-400 transition-colors"> ${link.name} </a> </li>`)} </ul> </div> <!-- Company Column --> <div> <h3 class="font-semibold text-white mb-4">Company</h3> <ul class="space-y-2"> ${footerLinks.company.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-neutral-400 hover:text-brand-400 transition-colors"> ${link.name} </a> </li>`)} </ul> </div> <!-- Legal Column --> <div> <h3 class="font-semibold text-white mb-4">Legal</h3> <ul class="space-y-2"> ${footerLinks.legal.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-neutral-400 hover:text-brand-400 transition-colors"> ${link.name} </a> </li>`)} <!-- Cookie Settings - Easy consent withdrawal --> <li> <button id="cookie-settings-btn" class="text-sm text-neutral-400 hover:text-brand-400 transition-colors cursor-pointer bg-transparent border-none p-0 text-left" type="button">
Cookie Settings
</button> </li> </ul> </div> </div> <!-- Bottom Bar --> <div class="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4"> <div class="text-center sm:text-left"> <p class="text-sm text-slate-400">
&copy; ${currentYear} LearnEnglish.Life. All rights reserved.
</p> <p class="text-xs text-slate-300 mt-1">
Contact: <a href="mailto:hello@learnenglish.life" class="hover:text-brand-400">hello@learnenglish.life</a> |
<a href="mailto:privacy@learnenglish.life" class="hover:text-brand-400">privacy@learnenglish.life</a> </p> </div> <p class="text-sm text-slate-400">
© 2026 LearnEnglish.Life
</p> </div> </div> </footer> `;
}, "/var/www/learnenglish.life/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
