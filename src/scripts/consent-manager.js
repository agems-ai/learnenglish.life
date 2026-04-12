/**
 * Cookie Consent Manager
 * Handles consent-aware loading of scripts and cookies
 * Must run before any analytics/marketing scripts
 */

(function() {
  'use strict';

  // Initialize consent flags
  window['ga-enabled'] = false;
  window['marketing-enabled'] = false;

  // Check for existing consent
  function getConsent() {
    try {
      var stored = localStorage.getItem('cookie_consent');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not read cookie consent:', e);
    }
    return null;
  }

  // Apply consent preferences
  function applyConsent(consent) {
    if (!consent) return;

    // Analytics consent
    if (consent.analytics) {
      window['ga-enabled'] = true;
      initializeGA();
    }

    // Marketing consent
    if (consent.marketing) {
      window['marketing-enabled'] = true;
      initializeMarketing();
    }
  }

  // Initialize Google Analytics (only if consented)
  function initializeGA() {
    if (typeof window.gtag !== 'function') {
      // Load GA4 script dynamically
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      
      gtag('js', new Date());
      
      // Load the gtag script
      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q1D36CSBCC';
      document.head.appendChild(script);
    }
    
    gtag('config', 'G-Q1D36CSBCC', {
      'anonymize_ip': true, // Anonymize IPs for GDPR
      'cookie_flags': 'SameSite=Lax;Secure'
    });
  }

  // Initialize marketing scripts (only if consented)
  function initializeMarketing() {
    // Facebook Pixel (example) - uncomment and add ID when needed
    // if (typeof fbq !== 'function') {
    //   !function(f,b,e,v,n,t,s){...}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    //   fbq('init', 'YOUR_PIXEL_ID');
    // }
    // fbq('track', 'PageView');
  }

  // Clear all tracking cookies
  function clearTrackingCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      // Clear common tracking cookies
      if (name.startsWith('_ga') || name.startsWith('_gid') || 
          name.startsWith('_gat') || name.startsWith('_fbp') ||
          name.startsWith('IDE') || name.startsWith('RUL')) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
      }
    }
  }

  // Listen for consent updates from CookieConsent component
  document.addEventListener('consentUpdated', function(event) {
    var consent = event.detail;
    window['ga-enabled'] = consent.analytics || false;
    window['marketing-enabled'] = consent.marketing || false;

    if (consent.analytics) {
      initializeGA();
    } else {
      clearTrackingCookies();
    }
  });

  // Public API for external access
  window.CookieConsentManager = {
    getConsent: getConsent,
    openSettings: function() {
      window.dispatchEvent(new CustomEvent('openCookieSettings'));
    },
    hasAnalyticsConsent: function() {
      return window['ga-enabled'] === true;
    },
    hasMarketingConsent: function() {
      return window['marketing-enabled'] === true;
    }
  };

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    var consent = getConsent();
    if (consent) {
      applyConsent(consent);
    }
  });

  // Also run immediately in case DOMContentLoaded already fired
  var consent = getConsent();
  if (consent) {
    applyConsent(consent);
  }
})();
