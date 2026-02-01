/**
 * Flow step identifiers for the onboarding sequence.
 */
export type OnboardingStep =
  | 'authentication'
  | 'os_permissions'
  | 'preference_selection'
  | 'landing';

/**
 * Notification preference options for onboarding.
 * Maps to the four choices presented in the onboarding flow.
 */
export type NotificationPreference =
  | 'dms_only'
  | 'mentions_only'
  | 'everything'
  | 'off';

/**
 * Display metadata for each notification option.
 */
export interface NotificationOption {
  value: NotificationPreference;
  title: string;
  description: string;
}

/**
 * Four notification options presented during onboarding.
 */
export const NOTIFICATION_OPTIONS: NotificationOption[] = [
  {
    value: 'dms_only',
    title: 'DMs only',
    description: 'Only notify me for direct messages',
  },
  {
    value: 'mentions_only',
    title: 'Mentions only',
    description: 'Only notify me when someone @mentions me',
  },
  {
    value: 'everything',
    title: 'Everything',
    description: 'Notify me for all activity (channels, DMs, mentions)',
  },
  {
    value: 'off',
    title: 'Off',
    description: "I'll check Slack on my own time",
  },
];
