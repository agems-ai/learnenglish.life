/**
 * useAnalytics - React hook for tracking analytics events
 * 
 * Usage:
 * import { useAnalytics } from './analytics';
 * 
 * const MyComponent = () => {
 *   const { trackQuizStart, trackQuizComplete, trackGameStart } = useAnalytics();
 *   
 *   const handleStart = () => {
 *     trackQuizStart('grammar-basics', 'Grammar Basics Quiz');
 *   };
 *   
 *   const handleComplete = (score: number, total: number) => {
 *     trackQuizComplete('grammar-basics', 'Grammar Basics Quiz', score, total);
 *   };
 * };
 */

declare global {
  interface Window {
    analytics?: {
      trackAffiliateClick: (platform: string, url: string) => void;
      trackAdImpression: (slot: string, format: string, adClient: string) => void;
      trackAdClick: (slot: string, format: string) => void;
      trackQuizStart: (quizId: string, quizTitle: string) => void;
      trackQuizComplete: (quizId: string, quizTitle: string, score: number, totalQuestions: number) => void;
      trackQuizQuestionAnswer: (quizId: string, questionNumber: number, correct: boolean, timeSpent: number) => void;
      trackGameStart: (gameId: string, gameName: string) => void;
      trackGameComplete: (gameId: string, gameName: string, score: number, timeSpent: number) => void;
      trackGameAction: (gameId: string, action: string, value?: number) => void;
      trackSearch: (searchTerm: string, resultCount: number) => void;
      trackOutboundClick: (url: string, linkText?: string) => void;
      trackFormSubmit: (formName: string, success: boolean) => void;
      trackNewsletterSignup: (source?: string) => void;
      trackScrollDepth: (percent: number) => void;
      trackVideoEvent: (event: string, videoId: string, percentWatched: number) => void;
    };
  }
}

export interface AnalyticsMethods {
  trackAffiliateClick: (platform: string, url: string) => void;
  trackAdImpression: (slot: string, format: string, adClient?: string) => void;
  trackAdClick: (slot: string, format: string) => void;
  trackQuizStart: (quizId: string, quizTitle: string) => void;
  trackQuizComplete: (quizId: string, quizTitle: string, score: number, totalQuestions: number) => void;
  trackQuizQuestionAnswer: (quizId: string, questionNumber: number, correct: boolean, timeSpent?: number) => void;
  trackGameStart: (gameId: string, gameName: string) => void;
  trackGameComplete: (gameId: string, gameName: string, score: number, timeSpent?: number) => void;
  trackGameAction: (gameId: string, action: string, value?: number) => void;
  trackSearch: (searchTerm: string, resultCount: number) => void;
  trackOutboundClick: (url: string, linkText?: string) => void;
  trackFormSubmit: (formName: string, success: boolean) => void;
  trackNewsletterSignup: (source?: string) => void;
  trackScrollDepth: (percent: number) => void;
  trackVideoEvent: (event: string, videoId: string, percentWatched?: number) => void;
}

export function useAnalytics(): AnalyticsMethods {
  const analytics = typeof window !== 'undefined' ? window.analytics : null;

  return {
    trackAffiliateClick: (platform: string, url: string) => {
      analytics?.trackAffiliateClick(platform, url);
    },

    trackAdImpression: (slot: string, format: string, adClient: string = 'ca-pub-XXXXXXXXXX') => {
      analytics?.trackAdImpression(slot, format, adClient);
    },

    trackAdClick: (slot: string, format: string) => {
      analytics?.trackAdClick(slot, format);
    },

    trackQuizStart: (quizId: string, quizTitle: string) => {
      analytics?.trackQuizStart(quizId, quizTitle);
    },

    trackQuizComplete: (quizId: string, quizTitle: string, score: number, totalQuestions: number) => {
      analytics?.trackQuizComplete(quizId, quizTitle, score, totalQuestions);
    },

    trackQuizQuestionAnswer: (quizId: string, questionNumber: number, correct: boolean, timeSpent: number = 0) => {
      analytics?.trackQuizQuestionAnswer(quizId, questionNumber, correct, timeSpent);
    },

    trackGameStart: (gameId: string, gameName: string) => {
      analytics?.trackGameStart(gameId, gameName);
    },

    trackGameComplete: (gameId: string, gameName: string, score: number, timeSpent: number = 0) => {
      analytics?.trackGameComplete(gameId, gameName, score, timeSpent);
    },

    trackGameAction: (gameId: string, action: string, value?: number) => {
      analytics?.trackGameAction(gameId, action, value);
    },

    trackSearch: (searchTerm: string, resultCount: number) => {
      analytics?.trackSearch(searchTerm, resultCount);
    },

    trackOutboundClick: (url: string, linkText?: string) => {
      analytics?.trackOutboundClick(url, linkText);
    },

    trackFormSubmit: (formName: string, success: boolean) => {
      analytics?.trackFormSubmit(formName, success);
    },

    trackNewsletterSignup: (source?: string) => {
      analytics?.trackNewsletterSignup(source);
    },

    trackScrollDepth: (percent: number) => {
      analytics?.trackScrollDepth(percent);
    },

    trackVideoEvent: (event: string, videoId: string, percentWatched: number = 0) => {
      analytics?.trackVideoEvent(event, videoId, percentWatched);
    },
  };
}

export default useAnalytics;
