/**
 * Handles onboarding flow: completion status, preference save, and flow entry.
 */

import type { NotificationPreference, NotificationPreferenceSelection } from '../types';

const STORAGE_KEY = 'slack-notification-onboarding';

/**
 * Check whether the user has completed the notification onboarding step.
 */
export function hasCompletedNotificationOnboarding(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    const { completed } = JSON.parse(stored);
    return !!completed;
  } catch {
    return false;
  }
}

/**
 * Mark the notification onboarding step as complete and save the user's preference (1 or 2 choices).
 */
export async function completeNotificationOnboarding(
  preferences: NotificationPreferenceSelection
): Promise<void> {
  try {
    const list = Array.isArray(preferences) ? preferences : [preferences];
    if (list.length < 1 || list.length > 2) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ completed: true, preference: list })
    );
  } catch {
    // Ignore storage errors
  }
}
