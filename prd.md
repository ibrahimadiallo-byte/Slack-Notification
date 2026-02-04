# Slack Notification Onboarding – Product Requirements

## The Problem

When you download Slack for the first time, you don't get a choice about notifications. Most apps ask "Allow notifications?" during install—it's standard. Slack throws you into the app and starts pinging you (or doesn't, depending on device settings), and you're left figuring it out on your own.

**Why this hurts:**
- **No control from the start.** Join a busy workspace and you could get 50+ notifications on day one before you find settings. Or miss important DMs because notifications are off by default.
- **Industry mismatch.** Instagram, Twitter, banking apps—they all ask upfront. Slack skipping this feels off and leaves users googling "how to turn off Slack notifications" on day two.
- **Who it affects:** New users, people joining a new workspace, anyone who hasn't dug through settings yet.

## The Goal

Give users control over their notifications from day one. No more being thrown into the deep end. One clear choice during onboarding, and they're set.

## The Solution – How It Works

We insert a focused onboarding flow **before** the user enters the workspace:

| Step | What Happens |
|------|--------------|
| **1. Authentication** | User enters email and verifies via link or 6-digit code. |
| **2. OS Permissions** | User sees "How do you want to stay updated?" with Allow / Not now. Uses the system/browser notification permission. If already granted, we skip this step. |
| **3. Preference Selection** | User picks 1–2 options: DMs only, Mentions only, Channels, Everything, or Off. |
| **4. Landing** | "You're all set" screen with a Get Started button. |
| **5. Workspace** | User enters the app with notifications configured their way. |

**Returning users:** If onboarding is complete, we skip straight to the workspace. No replay.

**UX principles applied:**
- **Hick's Law** – Simple buttons instead of a complex settings screen.
- **Jakob's Law** – Choice during onboarding matches expectations from top apps.
- **Aesthetic-Usability Effect** – Branded overlay before workspace entry for a polished feel.

## In Scope (MVP)

- [x] Full onboarding flow: Auth → OS Permissions → Preference Selection → Landing
- [x] Four core notification options (DMs, Mentions, Everything, Off) plus Channels
- [x] User can select 1 or 2 options
- [x] Flow skip for returning users
- [x] "Already granted" permission handling (skip OS prompt when not needed)
- [x] Persist preference in localStorage
- [x] "You can always change this later in Settings" hint

## Out of Scope (for now)

- Redesigning the full notification settings menu
- Mobile vs. desktop parity (we focus on web)
- Per-channel notification settings (still in Settings)
- Real Slack API integration (stubbed for demo)

## Future Considerations

- Preview what each option means (e.g., "~X notifications per day")
- Smart defaults based on workspace size
- Different defaults for small team vs. enterprise

## Success Metrics

- Fewer users turning off ALL notifications due to overwhelm
- Less searching for "notification settings" right after onboarding
- Higher engagement with notifications users chose
- Users feel Slack respects their time from the start
