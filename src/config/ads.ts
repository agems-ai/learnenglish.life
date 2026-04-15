/**
 * Centralized Ad Configuration for LearnEnglish.Life
 * 
 * All AdSense slot IDs and placement rules live here.
 * When the human admin creates ad units in the AdSense dashboard,
 * add the slot IDs below and they'll propagate site-wide instantly.
 * 
 * Set ENABLED = true once AdSense is approved and ad units exist.
 */

export const AD_CONFIG = {
  // Master toggle: set to true once AdSense is approved and serving
  ENABLED: false,

  // Publisher ID (already confirmed)
  PUBLISHER_ID: "ca-pub-7792548915836467",

  // Ad slot IDs, fill these in from the AdSense dashboard
  // Until filled, the component renders a placeholder
  SLOTS: {
    homepage_leaderboard: "",      // 728x90, below hero
    in_article_responsive: "",     // After first H2 in articles
    sidebar_300x250: "",           // Review page sidebar
    in_feed: "",                   // Between content cards
    anchor: "",                    // Mobile anchor ad
  } as Record<string, string>,

  // Which pages get which ad placements
  PLACEMENTS: {
    homepage: ["homepage_leaderboard", "in_feed"],
    review: ["in_article_responsive", "sidebar_300x250"],
    comparison: ["in_article_responsive", "sidebar_300x250"],
    guide: ["in_article_responsive", "sidebar_300x250"],
    blog: ["in_article_responsive", "in_feed"],
    tools: ["homepage_leaderboard", "in_feed"],
  } as Record<string, string[]>,
} as const;

/**
 * Check if a specific slot has a real ID assigned
 */
export function hasSlotId(slotKey: string): boolean {
  return AD_CONFIG.ENABLED && !!(AD_CONFIG.SLOTS as Record<string, string>)[slotKey];
}

/**
 * Get the slot ID for a given key
 */
export function getSlotId(slotKey: string): string {
  return (AD_CONFIG.SLOTS as Record<string, string>)[slotKey] || "";
}
