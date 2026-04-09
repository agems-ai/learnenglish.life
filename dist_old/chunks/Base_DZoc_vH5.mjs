import { c as createComponent, a as renderTemplate, d as defineScriptVars, e as createAstro, r as renderComponent, f as renderSlot, g as renderHead, b as addAttribute } from './astro/server_DMtB4JkI.mjs';
import 'kleur/colors';
/* empty css                         */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';

const defaultPreferences = {
  necessary: true,
  // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false
};
function CookieConsent({
  privacyPolicyUrl = "/privacy",
  cookiePolicyUrl = "/cookies"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);
  const [showCCPANotice, setShowCCPANotice] = useState(false);
  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie_consent");
    if (storedConsent) {
      setHasConsented(true);
      setShowBanner(false);
      const savedPrefs = JSON.parse(storedConsent);
      setPreferences(savedPrefs);
      applyConsent(savedPrefs);
    } else {
      setShowBanner(true);
    }
    const ccpaPreference = localStorage.getItem("ccpa_do_not_sell");
    if (ccpaPreference === "true") {
      disableMarketing();
      disableAnalytics();
    }
  }, []);
  const applyConsent = (prefs) => {
    if (prefs.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
    if (prefs.marketing) {
      enableMarketing();
    } else {
      disableMarketing();
    }
    window.dispatchEvent(new CustomEvent("consentUpdated", { detail: prefs }));
  };
  const enableAnalytics = () => {
    window["ga-enabled"] = true;
  };
  const disableAnalytics = () => {
    window["ga-enabled"] = false;
    document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  const enableMarketing = () => {
    window["marketing-enabled"] = true;
  };
  const disableMarketing = () => {
    window["marketing-enabled"] = false;
    document.cookie = "_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "_gcl_au=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  const saveConsent = (prefs, consentGiven) => {
    const consentData = {
      ...prefs,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      consentGiven,
      version: "1.0"
    };
    localStorage.setItem("cookie_consent", JSON.stringify(consentData));
    setPreferences(prefs);
    setHasConsented(true);
    setShowBanner(false);
    setShowCCPANotice(false);
    applyConsent(prefs);
    document.cookie = "cookie_consent_given=1; path=/; max-age=" + 365 * 24 * 60 * 60 + "; samesite=lax";
  };
  const handleDoNotSell = () => {
    localStorage.setItem("ccpa_do_not_sell", "true");
    localStorage.setItem("ccpa_do_not_sell_timestamp", (/* @__PURE__ */ new Date()).toISOString());
    disableAnalytics();
    disableMarketing();
    window["doNotSell"] = true;
    window.dispatchEvent(new CustomEvent("ccpaOptOut", { detail: { doNotSell: true } }));
    setShowBanner(false);
    setShowCCPANotice(true);
    document.cookie = "ccpa_opt_out=1; path=/; max-age=" + 365 * 24 * 60 * 60 + "; samesite=lax";
  };
  const handleAcceptAll = () => {
    saveConsent(
      { necessary: true, analytics: true, marketing: true, functional: true },
      true
    );
  };
  const handleRejectAll = () => {
    saveConsent(
      { necessary: true, analytics: false, marketing: false, functional: false },
      false
    );
  };
  const handleSavePreferences = () => {
    saveConsent(preferences, preferences.analytics || preferences.marketing || preferences.functional);
    setIsOpen(false);
  };
  const handleOpenSettings = () => {
    setIsOpen(true);
    setShowBanner(true);
  };
  const handleCloseSettings = () => {
    setIsOpen(false);
  };
  const updatePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  useEffect(() => {
    const handleOpenConsent = () => {
      setIsOpen(true);
      setShowBanner(true);
    };
    window.addEventListener("openCookieSettings", handleOpenConsent);
    return () => window.removeEventListener("openCookieSettings", handleOpenConsent);
  }, []);
  if (showCCPANotice) {
    return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 lg:p-8", style: { background: "rgba(0,0,0,0.95)" }, children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-white mb-2", children: "Your Privacy Preferences Have Been Saved" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-300 text-sm", children: 'We have processed your request to opt out of the sale of your personal information. This preference has been saved on your device. You can change this at any time by clicking "Cookie Settings" in our footer.' }),
        /* @__PURE__ */ jsxs("p", { className: "text-neutral-400 text-xs mt-2", children: [
          "Questions? Contact us at ",
          /* @__PURE__ */ jsx("a", { href: "mailto:privacy@learnenglish.life", className: "text-brand-400 hover:text-brand-300 underline", children: "privacy@learnenglish.life" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-3 lg:shrink-0", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowCCPANotice(false),
          className: "px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-500 transition-colors",
          children: "Close"
        }
      ) })
    ] }) }) });
  }
  if (!showBanner && !isOpen) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showBanner && !isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "cookie-title",
        className: "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 lg:p-8",
        style: { background: "rgba(0,0,0,0.95)" },
        children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { id: "cookie-title", className: "text-lg font-semibold text-white mb-2", children: "We value your privacy" }),
            /* @__PURE__ */ jsxs("p", { className: "text-neutral-300 text-sm mb-4", children: [
              'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our',
              " ",
              /* @__PURE__ */ jsx("a", { href: cookiePolicyUrl, className: "text-brand-400 hover:text-brand-300 underline", children: "Cookie Policy" }),
              " ",
              "and",
              " ",
              /* @__PURE__ */ jsx("a", { href: privacyPolicyUrl, className: "text-brand-400 hover:text-brand-300 underline", children: "Privacy Policy" }),
              "."
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-neutral-800 rounded-lg border border-neutral-700", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-neutral-400", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-white", children: "California Residents:" }),
              " Under the CCPA, you have the right to opt out of the sale of your personal information.",
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleDoNotSell,
                  className: "text-brand-400 hover:text-brand-300 underline ml-1",
                  children: "Do Not Sell My Personal Information"
                }
              ),
              "."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 lg:shrink-0", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleRejectAll,
                className: "px-4 py-2 text-sm font-medium text-neutral-300 bg-transparent border border-neutral-600 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors",
                children: "Reject All"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleOpenSettings,
                className: "px-4 py-2 text-sm font-medium text-white bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors",
                children: "Cookie Settings"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleAcceptAll,
                className: "px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-500 transition-colors",
                children: "Accept All"
              }
            )
          ] })
        ] }) })
      }
    ),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/70",
          onClick: handleCloseSettings
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "settings-title",
          className: "relative bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-neutral-900 border-b border-neutral-700 p-6 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("h2", { id: "settings-title", className: "text-xl font-semibold text-white", children: "Cookie Settings" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleCloseSettings,
                  className: "p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors",
                  "aria-label": "Close settings",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-800/50 rounded-lg", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-2", children: "California Residents - Your Privacy Rights" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-300 mb-3", children: "Under the California Consumer Privacy Act (CCPA), you have the right to opt out of the sale of your personal information." }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      handleDoNotSell();
                      setIsOpen(false);
                    },
                    className: "px-4 py-2 text-sm font-medium text-white bg-red-700 hover:bg-red-600 rounded-lg transition-colors",
                    children: "Do Not Sell My Personal Information"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center h-6 mt-0.5", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: true,
                    disabled: true,
                    className: "w-5 h-5 rounded border-neutral-600 bg-neutral-700 text-brand-500 focus:ring-brand-500 cursor-not-allowed",
                    "aria-describedby": "necessary-desc"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxs("label", { className: "font-medium text-white", children: [
                    "Necessary Cookies",
                    /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs text-brand-400 font-normal", children: "(Required)" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { id: "necessary-desc", className: "text-sm text-neutral-400 mt-1", children: "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot disable these cookies in our system." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center h-6 mt-0.5", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "analytics-cookies",
                    checked: preferences.analytics,
                    onChange: () => updatePreference("analytics"),
                    className: "w-5 h-5 rounded border-neutral-600 bg-neutral-700 text-brand-500 focus:ring-brand-500 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "analytics-cookies", className: "font-medium text-white cursor-pointer", children: "Analytics Cookies" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-400 mt-1", children: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our content and user experience." }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mt-2", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Cookies used:" }),
                    " _ga, _gid, _gat (Google Analytics)"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center h-6 mt-0.5", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "marketing-cookies",
                    checked: preferences.marketing,
                    onChange: () => updatePreference("marketing"),
                    className: "w-5 h-5 rounded border-neutral-600 bg-neutral-700 text-brand-500 focus:ring-brand-500 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "marketing-cookies", className: "font-medium text-white cursor-pointer", children: "Marketing Cookies" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-400 mt-1", children: "These cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our marketing campaigns and display ads that are more relevant to you." }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mt-2", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Cookies used:" }),
                    " _fbp (Facebook Pixel), Google Ads tracking"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center h-6 mt-0.5", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "functional-cookies",
                    checked: preferences.functional,
                    onChange: () => updatePreference("functional"),
                    className: "w-5 h-5 rounded border-neutral-600 bg-neutral-700 text-brand-500 focus:ring-brand-500 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "functional-cookies", className: "font-medium text-white cursor-pointer", children: "Functional Cookies" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-400 mt-1", children: "These cookies enable enhanced functionality and personalization, such as remembering your language preferences and settings. They may be set by us or by third-party providers." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-4 bg-brand-900/30 border border-brand-800/50 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-brand-200", children: [
                /* @__PURE__ */ jsx("strong", { children: "Your Consent:" }),
                ' You have the right to withdraw your consent at any time. Simply click "Cookie Settings" in our footer to update your preferences.'
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sticky bottom-0 bg-neutral-900 border-t border-neutral-700 p-6 flex flex-col sm:flex-row gap-3 justify-end", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleRejectAll,
                  className: "px-4 py-2 text-sm font-medium text-neutral-300 bg-transparent border border-neutral-600 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors",
                  children: "Reject All"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleSavePreferences,
                  className: "px-6 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-500 transition-colors",
                  children: "Save Preferences"
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  const ga4Id = "G-XXXXXXXXXX";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Google Analytics - Only loads when analytics consent is granted --><script>(function(){", "\n  // Wait for consent before loading GA4\n  function loadAnalytics() {\n    // Check if consent was already given\n    if (window['ga-enabled']) {\n      initGA4();\n      return;\n    }\n    \n    // Listen for consent update event\n    window.addEventListener('consentUpdated', (event) => {\n      if (event.detail && event.detail.analytics) {\n        window['ga-enabled'] = true;\n        initGA4();\n      }\n    });\n  }\n\n  function initGA4() {\n    // Only load GA4 script if not already loaded\n    if (window.dataLayer) return;\n    \n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', ga4Id, {\n      send_page_view: true,\n      page_title: document.title,\n      page_location: window.location.href,\n    });\n\n    // Custom event tracking functions\n    window.analytics = {\n      // Track affiliate link clicks\n      trackAffiliateClick: (platform, url) => {\n        gtag('event', 'affiliate_click', {\n          event_category: 'Affiliate',\n          event_label: platform,\n          destination_url: url,\n          transport_type: 'beacon',\n        });\n        console.log(`[Analytics] Affiliate click: ${platform}`);\n      },\n\n      // Track ad impressions (viewability)\n      trackAdImpression: (slot, format, adClient) => {\n        gtag('event', 'ad_impression', {\n          event_category: 'Advertising',\n          event_label: slot,\n          ad_format: format,\n          ad_client: adClient,\n          transport_type: 'beacon',\n        });\n        console.log(`[Analytics] Ad impression: ${slot}`);\n      },\n\n      // Track ad clicks\n      trackAdClick: (slot, format) => {\n        gtag('event', 'ad_click', {\n          event_category: 'Advertising',\n          event_label: slot,\n          ad_format: format,\n          transport_type: 'beacon',\n        });\n        console.log(`[Analytics] Ad click: ${slot}`);\n      },\n\n      // Track quiz interactions\n      trackQuizStart: (quizId, quizTitle) => {\n        gtag('event', 'quiz_start', {\n          event_category: 'Engagement',\n          event_label: quizId,\n          quiz_title: quizTitle,\n          transport_type: 'beacon',\n        });\n        console.log(`[Analytics] Quiz start: ${quizId}`);\n      },\n\n      trackQuizComplete: (quizId, quizTitle, score, totalQuestions) => {\n        gtag('event', 'quiz_complete', {\n          event_category: 'Engagement',\n          event_label: quizId,\n          quiz_title: quizTitle,\n          score: score,\n          total_questions: totalQuestions,\n          completion_rate: (score / totalQuestions) * 100,\n          transport_type: 'beacon',\n        });\n        console.log(`[Analytics] Quiz complete: ${quizId} - Score: ${score}/${totalQuestions}`);\n      },\n\n      trackQuizQuestionAnswer: (quizId, questionNumber, correct, timeSpent) => {\n        gtag('event', 'quiz_answer', {\n          event_category: 'Engagement',\n          event_label: quizId,\n          question_number: questionNumber,\n          correct: correct,\n          time_spent_ms: timeSpent,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track game interactions\n      trackGameStart: (gameId, gameName) => {\n        gtag('event', 'game_start', {\n          event_category: 'Game',\n          event_label: gameId,\n          game_name: gameName,\n          transport_type: 'beacon',\n        });\n        console.log(`[Analytics] Game start: ${gameId}`);\n      },\n\n      trackGameComplete: (gameId, gameName, score, timeSpent) => {\n        gtag('event', 'game_complete', {\n          event_category: 'Game',\n          event_label: gameId,\n          game_name: gameName,\n          score: score,\n          time_spent_ms: timeSpent,\n          transport_type: 'beacon',\n        });\n        console.log(`[Analytics] Game complete: ${gameId} - Score: ${score}`);\n      },\n\n      trackGameAction: (gameId, action, value) => {\n        gtag('event', 'game_action', {\n          event_category: 'Game',\n          event_label: gameId,\n          action: action,\n          value: value,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track search\n      trackSearch: (searchTerm, resultCount) => {\n        gtag('event', 'search', {\n          search_term: searchTerm,\n          result_count: resultCount,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track outbound links\n      trackOutboundClick: (url, linkText) => {\n        gtag('event', 'outbound_click', {\n          event_category: 'Navigation',\n          event_label: linkText || url,\n          destination_url: url,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track form submissions\n      trackFormSubmit: (formName, success) => {\n        gtag('event', 'form_submit', {\n          event_category: 'Conversion',\n          event_label: formName,\n          success: success,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track newsletter signups\n      trackNewsletterSignup: (source) => {\n        gtag('event', 'newsletter_signup', {\n          event_category: 'Conversion',\n          event_label: source || 'unknown',\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track page scroll depth\n      trackScrollDepth: (percent) => {\n        gtag('event', 'scroll_depth', {\n          percent_scrolled: percent,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track video engagement (if applicable)\n      trackVideoEvent: (event, videoId, percentWatched) => {\n        gtag('event', 'video_engagement', {\n          event_category: 'Media',\n          event_label: videoId,\n          video_event: event,\n          percent_watched: percentWatched,\n          transport_type: 'beacon',\n        });\n      },\n    };\n\n    // Auto-track affiliate links with /go/ prefix\n    document.addEventListener('DOMContentLoaded', () => {\n      // Track affiliate link clicks\n      document.querySelectorAll('a[href^=\"/go/\"], a[data-affiliate]').forEach(link => {\n        link.addEventListener('click', (e) => {\n          const href = link.getAttribute('href') || link.getAttribute('data-affiliate') || '';\n          const platform = href.replace('/go/', '').replace(/^\\//, '');\n          if (window.analytics && href.includes('/go/')) {\n            window.analytics.trackAffiliateClick(platform, link.href);\n          }\n        });\n      });\n\n      // Track scroll depth (25%, 50%, 75%, 100%)\n      let scrollDepthTracked = { 25: false, 50: false, 75: false, 100: false };\n      window.addEventListener('scroll', () => {\n        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;\n        const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);\n        \n        [25, 50, 75, 100].forEach(depth => {\n          if (scrollPercent >= depth && !scrollDepthTracked[depth] && window.analytics) {\n            window.analytics.trackScrollDepth(depth);\n            scrollDepthTracked[depth] = true;\n          }\n        });\n      });\n    });\n    \n    console.log('[Analytics] GA4 initialized with user consent');\n  }\n\n  // Start the consent-aware initialization\n  loadAnalytics();\n})();</script>"], ["<!-- Google Analytics - Only loads when analytics consent is granted --><script>(function(){", "\n  // Wait for consent before loading GA4\n  function loadAnalytics() {\n    // Check if consent was already given\n    if (window['ga-enabled']) {\n      initGA4();\n      return;\n    }\n    \n    // Listen for consent update event\n    window.addEventListener('consentUpdated', (event) => {\n      if (event.detail && event.detail.analytics) {\n        window['ga-enabled'] = true;\n        initGA4();\n      }\n    });\n  }\n\n  function initGA4() {\n    // Only load GA4 script if not already loaded\n    if (window.dataLayer) return;\n    \n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', ga4Id, {\n      send_page_view: true,\n      page_title: document.title,\n      page_location: window.location.href,\n    });\n\n    // Custom event tracking functions\n    window.analytics = {\n      // Track affiliate link clicks\n      trackAffiliateClick: (platform, url) => {\n        gtag('event', 'affiliate_click', {\n          event_category: 'Affiliate',\n          event_label: platform,\n          destination_url: url,\n          transport_type: 'beacon',\n        });\n        console.log(\\`[Analytics] Affiliate click: \\${platform}\\`);\n      },\n\n      // Track ad impressions (viewability)\n      trackAdImpression: (slot, format, adClient) => {\n        gtag('event', 'ad_impression', {\n          event_category: 'Advertising',\n          event_label: slot,\n          ad_format: format,\n          ad_client: adClient,\n          transport_type: 'beacon',\n        });\n        console.log(\\`[Analytics] Ad impression: \\${slot}\\`);\n      },\n\n      // Track ad clicks\n      trackAdClick: (slot, format) => {\n        gtag('event', 'ad_click', {\n          event_category: 'Advertising',\n          event_label: slot,\n          ad_format: format,\n          transport_type: 'beacon',\n        });\n        console.log(\\`[Analytics] Ad click: \\${slot}\\`);\n      },\n\n      // Track quiz interactions\n      trackQuizStart: (quizId, quizTitle) => {\n        gtag('event', 'quiz_start', {\n          event_category: 'Engagement',\n          event_label: quizId,\n          quiz_title: quizTitle,\n          transport_type: 'beacon',\n        });\n        console.log(\\`[Analytics] Quiz start: \\${quizId}\\`);\n      },\n\n      trackQuizComplete: (quizId, quizTitle, score, totalQuestions) => {\n        gtag('event', 'quiz_complete', {\n          event_category: 'Engagement',\n          event_label: quizId,\n          quiz_title: quizTitle,\n          score: score,\n          total_questions: totalQuestions,\n          completion_rate: (score / totalQuestions) * 100,\n          transport_type: 'beacon',\n        });\n        console.log(\\`[Analytics] Quiz complete: \\${quizId} - Score: \\${score}/\\${totalQuestions}\\`);\n      },\n\n      trackQuizQuestionAnswer: (quizId, questionNumber, correct, timeSpent) => {\n        gtag('event', 'quiz_answer', {\n          event_category: 'Engagement',\n          event_label: quizId,\n          question_number: questionNumber,\n          correct: correct,\n          time_spent_ms: timeSpent,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track game interactions\n      trackGameStart: (gameId, gameName) => {\n        gtag('event', 'game_start', {\n          event_category: 'Game',\n          event_label: gameId,\n          game_name: gameName,\n          transport_type: 'beacon',\n        });\n        console.log(\\`[Analytics] Game start: \\${gameId}\\`);\n      },\n\n      trackGameComplete: (gameId, gameName, score, timeSpent) => {\n        gtag('event', 'game_complete', {\n          event_category: 'Game',\n          event_label: gameId,\n          game_name: gameName,\n          score: score,\n          time_spent_ms: timeSpent,\n          transport_type: 'beacon',\n        });\n        console.log(\\`[Analytics] Game complete: \\${gameId} - Score: \\${score}\\`);\n      },\n\n      trackGameAction: (gameId, action, value) => {\n        gtag('event', 'game_action', {\n          event_category: 'Game',\n          event_label: gameId,\n          action: action,\n          value: value,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track search\n      trackSearch: (searchTerm, resultCount) => {\n        gtag('event', 'search', {\n          search_term: searchTerm,\n          result_count: resultCount,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track outbound links\n      trackOutboundClick: (url, linkText) => {\n        gtag('event', 'outbound_click', {\n          event_category: 'Navigation',\n          event_label: linkText || url,\n          destination_url: url,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track form submissions\n      trackFormSubmit: (formName, success) => {\n        gtag('event', 'form_submit', {\n          event_category: 'Conversion',\n          event_label: formName,\n          success: success,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track newsletter signups\n      trackNewsletterSignup: (source) => {\n        gtag('event', 'newsletter_signup', {\n          event_category: 'Conversion',\n          event_label: source || 'unknown',\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track page scroll depth\n      trackScrollDepth: (percent) => {\n        gtag('event', 'scroll_depth', {\n          percent_scrolled: percent,\n          transport_type: 'beacon',\n        });\n      },\n\n      // Track video engagement (if applicable)\n      trackVideoEvent: (event, videoId, percentWatched) => {\n        gtag('event', 'video_engagement', {\n          event_category: 'Media',\n          event_label: videoId,\n          video_event: event,\n          percent_watched: percentWatched,\n          transport_type: 'beacon',\n        });\n      },\n    };\n\n    // Auto-track affiliate links with /go/ prefix\n    document.addEventListener('DOMContentLoaded', () => {\n      // Track affiliate link clicks\n      document.querySelectorAll('a[href^=\"/go/\"], a[data-affiliate]').forEach(link => {\n        link.addEventListener('click', (e) => {\n          const href = link.getAttribute('href') || link.getAttribute('data-affiliate') || '';\n          const platform = href.replace('/go/', '').replace(/^\\\\//, '');\n          if (window.analytics && href.includes('/go/')) {\n            window.analytics.trackAffiliateClick(platform, link.href);\n          }\n        });\n      });\n\n      // Track scroll depth (25%, 50%, 75%, 100%)\n      let scrollDepthTracked = { 25: false, 50: false, 75: false, 100: false };\n      window.addEventListener('scroll', () => {\n        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;\n        const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);\n        \n        [25, 50, 75, 100].forEach(depth => {\n          if (scrollPercent >= depth && !scrollDepthTracked[depth] && window.analytics) {\n            window.analytics.trackScrollDepth(depth);\n            scrollDepthTracked[depth] = true;\n          }\n        });\n      });\n    });\n    \n    console.log('[Analytics] GA4 initialized with user consent');\n  }\n\n  // Start the consent-aware initialization\n  loadAnalytics();\n})();</script>"])), defineScriptVars({ ga4Id }));
}, "/var/www/learnenglish.life/src/components/Analytics.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://learnenglish.life");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title,
    description,
    image = "/og-default.png",
    canonicalUrl,
    type = "website",
    publishedTime,
    modifiedTime
  } = Astro2.props;
  const siteUrl = "https://learnenglish.life";
  const fullCanonical = canonicalUrl || new URL(Astro2.url.pathname, siteUrl).href;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', `><meta name="google-adsense-account" content="ca-pub-7792548915836467"><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W42NG9QB');<\/script><!-- End Google Tag Manager --><!-- Google Analytics 4 (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-Q1D36CSBCC"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q1D36CSBCC');
    <\/script><!-- Primary Meta Tags --><title>`, '</title><meta name="title"', '><meta name="description"', '><link rel="canonical"', '><!-- Open Graph --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", "", '<!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><!-- Fonts preload --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Structured Data -->', `<!-- GDPR Cookie Consent Manager - MUST LOAD FIRST --><script>
      // Inline critical consent logic to prevent any cookies before consent
      (function() {
        'use strict';
        window['ga-enabled'] = false;
        window['marketing-enabled'] = false;
        
        // Check for existing consent
        try {
          var stored = localStorage.getItem('cookie_consent');
          if (stored) {
            var consent = JSON.parse(stored);
            window['ga-enabled'] = consent.analytics || false;
            window['marketing-enabled'] = consent.marketing || false;
          }
        } catch (e) {}
      })();
    <\/script><!-- Google AdSense - Replace pub-XXXXXXXXXX with real publisher ID --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7792548915836467" crossorigin="anonymous"><\/script>`, '</head> <body class="min-h-screen flex flex-col"> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W42NG9QB" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <!-- Skip to main content --> <a href="#main-content" class="skip-link">Skip to main content</a> ', ' <main id="main-content" class="flex-1"> ', " </main> ", " <!-- GDPR Cookie Consent Banner (React Island) --> ", " <!-- Google Analytics (loads only with user consent) --> ", ` <!-- Pagefind search script (loaded async after consent) -->  <!-- See Guru Affiliate Click Tracker - GA4 Event: affiliate_click --> <script>
      (function() {
        'use strict';
        
        function initSeeGuruTracker() {
          // Select all See Guru affiliate links (matches our aff=SG-SUAG151 pattern)
          var affiliateLinks = document.querySelectorAll('a[href*="see.guru/?aff=SG-SUAG151"], a[href*="see.guru%3Faff=SG-SUAG151"]');
          var redirectLinks = document.querySelectorAll('a[href*="/go/see-guru"]');
          
          // Determine link type based on context
          function getLinkType(link) {
            var parent = link.closest('section, article, div, aside');
            var id = parent ? (parent.id || '') : '';
            var cls = parent ? (parent.className || '') : '';
            var text = link.textContent || '';
            
            // Hero sections
            if (id.match(/hero/i) || cls.match(/hero/i) || cls.match(/HeroCTA/i)) {
              return 'hero';
            }
            // Sticky CTAs
            if (id.match(/sticky/i) || cls.match(/sticky/i)) {
              return 'sticky';
            }
            // Comparison/table contexts
            if (id.match(/comparison/i) || cls.match(/comparison/i) || 
                cls.match(/table/i) || cls.match(/Table/i) ||
                cls.match(/card/i) || cls.match(/Card/i)) {
              return 'comparison';
            }
            // Inline text links (inside paragraphs)
            if (link.parentElement && link.parentElement.tagName === 'P') {
              return 'inline';
            }
            // Sidebar/widget
            if (id.match(/sidebar/i) || cls.match(/sidebar/i) || cls.match(/widget/i)) {
              return 'sidebar';
            }
            // Default to CTA
            return 'cta';
          }
          
          // Track click
          function trackClick(link) {
            var linkType = getLinkType(link);
            var href = link.getAttribute('href') || '';
            var isRedirect = href.indexOf('/go/see-guru') !== -1;
            
            // Fire GA4 affiliate_click event
            if (typeof gtag === 'function') {
              gtag('event', 'affiliate_click', {
                partner: 'See Guru',
                link_type: linkType,
                destination_url: href,
                affiliate_id: 'SG-SUAG151',
                is_redirect: isRedirect,
                page_path: window.location.pathname
              });
            }
            
            console.log('[See Guru Tracker] affiliate_click fired: partner=See Guru, link_type=' + linkType);
          }
          
          // Attach to direct affiliate links
          affiliateLinks.forEach(function(link) {
            if (!link.hasAttribute('data-see-guru-tracked')) {
              link.setAttribute('data-see-guru-tracked', 'true');
              link.addEventListener('click', function() {
                trackClick(link);
              }, { passive: true });
            }
          });
          
          // Attach to redirect page links
          redirectLinks.forEach(function(link) {
            if (!link.hasAttribute('data-see-guru-tracked')) {
              link.setAttribute('data-see-guru-tracked', 'true');
              link.addEventListener('click', function() {
                trackClick(link);
              }, { passive: true });
            }
          });
        }
        
        // Run on DOM ready
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initSeeGuruTracker);
        } else {
          initSeeGuruTracker();
        }
      })();
    <\/script> </body> </html>`])), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullCanonical, "href"), addAttribute(type, "content"), addAttribute(fullCanonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, siteUrl).href, "content"), addAttribute(fullCanonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, siteUrl).href, "content"), publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`, modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`, renderSlot($$result, $$slots["structured-data"]), renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]), renderComponent($$result, "CookieConsent", CookieConsent, { "client:load": true, "privacyPolicyUrl": "/privacy", "cookiePolicyUrl": "/cookies", "client:component-hydration": "load", "client:component-path": "/var/www/learnenglish.life/src/components/CookieConsent", "client:component-export": "default" }), renderComponent($$result, "Analytics", $$Analytics, {}));
}, "/var/www/learnenglish.life/src/layouts/Base.astro", void 0);

export { $$Base as $ };
