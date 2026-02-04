# Slack Notification Onboarding

## The Problem

Right now, when you download Slack for the first time, you don't get a choice about notifications. Most apps give you that "Allow notifications?" prompt right when you install them - it's standard. But Slack? It just throws you into the app and starts pinging you (or doesn't, depending on your phone settings), and you're left figuring it out on your own.

This is annoying for a few reasons:

- **You have no control from the start.** If you join a busy workspace, you could get hit with 50+ notifications on day one before you even know where the settings are. Or on the flip side, you might miss important DMs because notifications are off by default and you didn't realize it.
- **It's not how people expect apps to work anymore.** Every other app asks upfront - Instagram, Twitter, your banking app, whatever. Slack skipping this step just feels off and leaves users scrambling to figure out notification settings after they're already overwhelmed or confused.

**The people it affects:** Anyone using Slack. New users joining their first workspace, people hopping into a new team Slack, basically everyone who hasn't already spent time digging through settings to customize everything.

## What We're Trying to Fix

We want to give users control over their notifications right from the start - during the onboarding process. No more getting thrown into the deep end. No more having to google "how to turn off Slack notifications" on day two. The idea is simple: when you first set up Slack (or join a new workspace), we present you with clear options about what you want to be notified about. You pick what works for you, and then you're good to go.

**The options we're thinking:**

- **DMs only** - you only get notified when someone sends you a direct message
- **Mentions only** - you get notified when someone @mentions you specifically
- **Channels** - notify me for channel activity
- **Everything** - all notifications on (channels, DMs, mentions, the whole thing)
- **Off** - no notifications at all

This way, people can make an informed choice based on how they actually want to use Slack, instead of just dealing with whatever the default is. Users can pick 1 or 2 options that fit their workflow.

## Goals & What Success Looks Like

**Our main goal:** Users feel in control of their notification experience from day one.

**How we'll know it's working:**

- Fewer people immediately turning off ALL notifications because they're overwhelmed
- Less searching for "notification settings" right after onboarding
- People actually engaging with the notifications they DO get, because they chose what they wanted
- Basically, we want people to feel like Slack respects their time and attention from the jump

## The Solution - How It Works

Here's what the experience looks like:

**Step 1: Authentication** – You enter your email and verify via link or 6-digit code.

**Step 2: OS Permissions** – You see "How do you want to stay updated?" with Allow / Not now for system notifications. If you've already granted permission, we skip this step.

**Step 3: Preference Selection** – Right before you enter the workspace, you get a screen that says "How do you want to stay updated?" with the five options laid out clearly:

- **DMs only** - "Only notify me for direct messages"
- **Mentions only** - "Only notify me when someone @mentions me"
- **Channels** - "Notify me for channel activity"
- **Everything** - "Notify me for all activity (channels, DMs, mentions)"
- **Off** - "I'll check Slack on my own time"

Pick 1 or 2 options. Tap Continue.

**Step 4: Landing** – "You're all set" with a Get Started button.

**Step 5: Workspace** – You're in the app and your notifications are set up the way YOU want them.

**Returning users:** If you've already completed onboarding, we skip straight to the workspace. No replay.

We also include "You can always change this later in Settings" so people don't feel locked in.

## What We're Doing (and What We're Not)

**In scope:**

- Designing the full onboarding flow (Auth → OS Permissions → Preference Selection → Landing)
- Creating the notification options (DMs only, Mentions only, Channels, Everything, Off)
- User picks 1 or 2 options
- Flow skip for returning users (go straight to workspace)
- "Already granted" permission handling (skip OS prompt when not needed)
- Figuring out where this fits in the current setup flow
- Making sure it works for both new users and people joining additional workspaces

**Out of scope (at least for now):**

- Redesigning the entire notification settings menu
- Differences between mobile and desktop (we'll focus on one first, probably mobile since that's where notifications matter most)
- Advanced customization like per-channel notification settings - that's still available in settings, we're just covering the basics upfront

**Future stuff we might consider:**

- Letting people preview what each option means (like "with this setting, you'd get about X notifications per day")
- Smart recommendations based on workspace size or type
- Different defaults for different kinds of workspaces (small team vs. huge company)

## Why This Matters

At the end of the day, notifications are one of the first things people interact with in Slack. If that experience sucks, it colors everything else. Giving people a choice upfront shows respect for their time and makes the whole app feel more user-friendly. Plus, it's just the standard now. People expect to have control over notifications from the start. Slack should too.
