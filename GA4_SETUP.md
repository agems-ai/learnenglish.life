# Google Analytics 4 Setup Guide

This document covers the GA4 implementation for LearnEnglish.Life.

## Quick Setup

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new account or select existing one
3. Go to **Admin** → **Data Streams** → **Web Stream**
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Update Environment Variables

Edit `/var/www/learnenglish.life/.env` on the server:

```bash
PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Restart the Server

```bash
cd /var/www/learnenglish.life
pm2 restart all
# or
sudo systemctl restart nginx
```

## Custom Events Tracked

### Affiliate Link Clicks
- **Event Name**: `affiliate_click`
- **Category**: Affiliate
- **Label**: Platform name (e.g., "italki", "preply")
- **Auto-tracked**: All links with `/go/` prefix

### Ad Impressions
- **Event Name**: `ad_impression`
- **Category**: Advertising
- **Tracked**: When AdSense ads render successfully

### Ad Clicks
- **Event Name**: `ad_click`
- **Category**: Advertising
- **Tracked**: When users click on ads

### Quiz Interactions
- `quiz_start` - When user starts a quiz
- `quiz_complete` - When quiz is finished (includes score)
- `quiz_answer` - Each answer given (includes correctness and time)

### Game Interactions
- `game_start` - When user starts a game
- `game_complete` - When game finishes (includes score, time)
- `game_action` - In-game actions

### General Engagement
- `scroll_depth` - 25%, 50%, 75%, 100% scroll milestones
- `search` - Site searches
- `outbound_click` - External link clicks
- `form_submit` - Form submissions
- `newsletter_signup` - Email subscriptions

## Event Parameters

All events include:
- `transport_type: 'beacon'` for reliable delivery
- Automatic page tracking

## Viewing Events in GA4

1. Go to **Analytics Dashboard**
2. Navigate to **Reports** → **Realtime**
3. Watch events appear as users interact

To see custom events:
1. **Reports** → **Engagement** → **Events**
2. Click on any event to see details

## Conversion Setup (Optional)

To track affiliate clicks as conversions:

1. Go to **Admin** → **Conversions** → **New conversion**
2. Set event name to: `affiliate_click`
3. Mark as "Important"

## Debug Mode

To debug GA4 on your machine:

1. Install [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. Enable the extension
3. Visit your site
4. Open browser console
5. See all GA events logged

## API Access for Dashboard

To pull GA4 data via API for dashboard widgets:

1. Go to Google Cloud Console
2. Create a Service Account
3. Grant "Viewer" access to GA4 property
4. Download JSON key
5. Store securely on server (never in git)

Environment variables needed:
```
GOOGLE_ANALYTICS_SERVICE_ACCOUNT_EMAIL=xxx@project.iam.gserviceaccount.com
GOOGLE_ANALYTICS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
```

## Troubleshooting

### Events not appearing
- Check browser console for errors
- Verify Measurement ID is correct
- Check if ad blocker is blocking GA

### Custom events undefined
- Ensure Analytics.astro loads before other scripts
- Check that `window.analytics` exists

### Build errors
- Run `npm run build` locally to check
- Verify all imports are correct
