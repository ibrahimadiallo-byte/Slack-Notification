# Slack Notification Onboarding

Give users control over notifications from day one. This MVP adds a focused onboarding flow before workspace entry: **Authentication → OS Permissions → Preference Selection → Landing → Workspace**.

See [prd.md](./prd.md) for full product requirements.

## Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:5173** (or the port Vite prints). Walk through the full flow. Return later to see flow skip in action (you go straight to the workspace).

**Demo tip:** Clear `localStorage` in DevTools to replay the full onboarding.

## What's Included

| Feature | Status |
|---------|--------|
| Authentication (email + code) | ✓ |
| OS notification permission prompt | ✓ |
| Preference selection (1–2 of: DMs, Mentions, Channels, Everything, Off) | ✓ |
| Landing + Get Started | ✓ |
| Flow skip for returning users | ✓ |
| "Already granted" permission skip | ✓ |
| Preference persisted (localStorage) | ✓ |

## Project Structure

| Folder | Purpose |
|--------|---------|
| **interface/** | UI: screens, components, App. User-facing layer. |
| **core/** | Logic: types, state, services. No UI. |

- `interface/screens/` – AuthenticationScreen, OSPermissionsScreen, OnboardingNotificationScreen, LandingScreen
- `interface/components/` – SlackLayout, NotificationOptionCard
- `core/services/` – onboardingService (persistence), notificationService (Web Notifications API)
- `core/types/` – OnboardingStep, NotificationPreference, NOTIFICATION_OPTIONS

**Rule:** `interface` imports from `core`; `core` does not import from `interface`.

## Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run typecheck  # TypeScript check
```

## Extension (Optional)

To inject the onboarding into **slack.com** for testing:

1. Go to `chrome://extensions`
2. Enable **Developer mode** → **Load unpacked**
3. Select the `extension` folder

See `extension/README.md` for details.
