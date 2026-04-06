/**
 * GDPR-Compliant Cookie Consent Component
 * - Opt-in only (no pre-checked boxes)
 * - Options: Accept All, Reject All, Cookie Settings
 * - Granular consent for analytics, marketing cookies
 * - No cookies set before consent (except essential)
 * - Easy withdrawal of consent via footer link
 */

import { useState, useEffect } from 'react';

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieConsentProps {
  privacyPolicyUrl?: string;
  cookiePolicyUrl?: string;
}

const defaultPreferences: ConsentPreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
};

export default function CookieConsent({ 
  privacyPolicyUrl = '/privacy',
  cookiePolicyUrl = '/cookies' 
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = localStorage.getItem('cookie_consent');
    if (storedConsent) {
      setHasConsented(true);
      setShowBanner(false);
      const savedPrefs = JSON.parse(storedConsent);
      setPreferences(savedPrefs);
      applyConsent(savedPrefs);
    } else {
      // First visit - show banner
      setShowBanner(true);
    }
  }, []);

  const applyConsent = (prefs: ConsentPreferences) => {
    // Enable/disable scripts based on consent
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

    // Dispatch event for other components to listen
    window.dispatchEvent(new CustomEvent('consentUpdated', { detail: prefs }));
  };

  const enableAnalytics = () => {
    // GA4 will be enabled via consent manager script
    window['ga-enabled'] = true;
  };

  const disableAnalytics = () => {
    window['ga-enabled'] = false;
    // Clear any existing analytics cookies
    document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = '_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = '_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  const enableMarketing = () => {
    window['marketing-enabled'] = true;
  };

  const disableMarketing = () => {
    window['marketing-enabled'] = false;
    // Clear ad-related cookies
    document.cookie = '_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  const saveConsent = (prefs: ConsentPreferences, consentGiven: boolean) => {
    const consentData = {
      ...prefs,
      timestamp: new Date().toISOString(),
      consentGiven,
      version: '1.0',
    };
    
    localStorage.setItem('cookie_consent', JSON.stringify(consentData));
    setPreferences(prefs);
    setHasConsented(true);
    setShowBanner(false);
    applyConsent(prefs);
    
    // If consent given, set a consent cookie (required by some regulations)
    document.cookie = `cookie_consent_given=1; path=/; max-age=${365 * 24 * 60 * 60}; samesite=lax`;
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
    // Keep banner visible until explicitly closed
    setShowBanner(true);
  };

  const handleCloseSettings = () => {
    setIsOpen(false);
  };

  const updatePreference = (key: keyof Omit<ConsentPreferences, 'necessary'>) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Open settings from external trigger (footer link)
  useEffect(() => {
    const handleOpenConsent = () => {
      setIsOpen(true);
      setShowBanner(true);
    };
    
    window.addEventListener('openCookieSettings', handleOpenConsent);
    return () => window.removeEventListener('openCookieSettings', handleOpenConsent);
  }, []);

  if (!showBanner && !isOpen) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && !isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 lg:p-8"
          style={{ background: 'rgba(0,0,0,0.95)' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <h2 id="cookie-title" className="text-lg font-semibold text-white mb-2">
                  🍪 We value your privacy
                </h2>
                <p className="text-neutral-300 text-sm mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                  <a href={cookiePolicyUrl} className="text-brand-400 hover:text-brand-300 underline">
                    Cookie Policy
                  </a>{' '}
                  and{' '}
                  <a href={privacyPolicyUrl} className="text-brand-400 hover:text-brand-300 underline">
                    Privacy Policy
                  </a>.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:shrink-0">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-neutral-300 bg-transparent border border-neutral-600 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleOpenSettings}
                  className="px-4 py-2 text-sm font-medium text-white bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
                >
                  Cookie Settings
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-500 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70"
            onClick={handleCloseSettings}
          />
          
          {/* Modal */}
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="settings-title"
            className="relative bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-neutral-900 border-b border-neutral-700 p-6 flex items-center justify-between">
              <h2 id="settings-title" className="text-xl font-semibold text-white">
                Cookie Settings
              </h2>
              <button
                onClick={handleCloseSettings}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label="Close settings"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Necessary Cookies (Always On) */}
              <div className="flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
                <div className="flex items-center h-6 mt-0.5">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="w-5 h-5 rounded border-neutral-600 bg-neutral-700 text-brand-500 focus:ring-brand-500 cursor-not-allowed"
                    aria-describedby="necessary-desc"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-medium text-white">
                    Necessary Cookies
                    <span className="ml-2 text-xs text-brand-400 font-normal">(Required)</span>
                  </label>
                  <p id="necessary-desc" className="text-sm text-neutral-400 mt-1">
                    These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot disable these cookies in our system.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
                <div className="flex items-center h-6 mt-0.5">
                  <input
                    type="checkbox"
                    id="analytics-cookies"
                    checked={preferences.analytics}
                    onChange={() => updatePreference('analytics')}
                    className="w-5 h-5 rounded border-neutral-600 bg-neutral-700 text-brand-500 focus:ring-brand-500 cursor-pointer"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="analytics-cookies" className="font-medium text-white cursor-pointer">
                    Analytics Cookies
                  </label>
                  <p className="text-sm text-neutral-400 mt-1">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our content and user experience.
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">
                    <strong>Cookies used:</strong> _ga, _gid, _gat (Google Analytics)
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
                <div className="flex items-center h-6 mt-0.5">
                  <input
                    type="checkbox"
                    id="marketing-cookies"
                    checked={preferences.marketing}
                    onChange={() => updatePreference('marketing')}
                    className="w-5 h-5 rounded border-neutral-600 bg-neutral-700 text-brand-500 focus:ring-brand-500 cursor-pointer"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="marketing-cookies" className="font-medium text-white cursor-pointer">
                    Marketing Cookies
                  </label>
                  <p className="text-sm text-neutral-400 mt-1">
                    These cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our marketing campaigns and display ads that are more relevant to you.
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">
                    <strong>Cookies used:</strong> _fbp (Facebook Pixel), Google Ads tracking
                  </p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
                <div className="flex items-center h-6 mt-0.5">
                  <input
                    type="checkbox"
                    id="functional-cookies"
                    checked={preferences.functional}
                    onChange={() => updatePreference('functional')}
                    className="w-5 h-5 rounded border-neutral-600 bg-neutral-700 text-brand-500 focus:ring-brand-500 cursor-pointer"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="functional-cookies" className="font-medium text-white cursor-pointer">
                    Functional Cookies
                  </label>
                  <p className="text-sm text-neutral-400 mt-1">
                    These cookies enable enhanced functionality and personalization, such as remembering your language preferences and settings. They may be set by us or by third-party providers.
                  </p>
                </div>
              </div>

              {/* Consent Notice */}
              <div className="p-4 bg-brand-900/30 border border-brand-800/50 rounded-lg">
                <p className="text-sm text-brand-200">
                  <strong>Your Consent:</strong> You have the right to withdraw your consent at any time. 
                  Simply click "Cookie Settings" in our footer to update your preferences.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-neutral-900 border-t border-neutral-700 p-6 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-neutral-300 bg-transparent border border-neutral-600 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-500 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Declare global type for consent tracking
declare global {
  interface Window {
    'ga-enabled': boolean;
    'marketing-enabled': boolean;
  }
}
