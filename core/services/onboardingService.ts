/**
 * Handles onboarding flow: completion status, preference save, and flow entry.
 */

import type { NotificationPreference } from '../types';

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
 * Mark the notification onboarding step as complete and save the user's preference.
 */
export async function completeNotificationOnboarding(
  preference: NotificationPreference
): Promise<void> {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ completed: true, preference })
    );
  } catch {
    // Ignore storage errors
  }
}
