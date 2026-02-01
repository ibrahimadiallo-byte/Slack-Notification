# Slack Notification Onboarding – Browser Extension

This extension adds the notification preference onboarding from the PRD to **slack.com**. When a new user visits Slack, they see "How do you want to stay updated?" with four options before using the app.

**What it does:**
- Injects an overlay modal on slack.com/app.slack.com
- Shows the four PRD options: DMs only, Mentions only, Everything, Off
- Saves the user's preference per workspace
- Shows only once per workspace (first visit)
- Does **not** modify any existing Slack UI

**What it does not do:**
- Cannot change Slack's actual notification settings (Slack's API doesn't expose this)
- The saved preference is stored locally; users can apply it manually via Slack → Settings → Notifications

## Installation

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `extension` folder in this project
5. Visit https://app.slack.com — the onboarding modal will appear on first visit

## Reset

To see the onboarding again (e.g. for testing): go to `chrome://extensions` → click "Details" on this extension → "Clear storage" under the extension, or remove and re-add it.

## Files

- `manifest.json` — Extension config
- `content.js` — Injects the onboarding modal
- `content.css` — Styles for the modal (isolated, doesn't affect Slack)
