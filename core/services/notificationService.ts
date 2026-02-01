/**
 * Handles system notification permission and applying the user's preference.
 */

import type { NotificationPreference } from '../types';

/**
 * Request system notification permission from the OS.
 * Uses the Web Notifications API when available.
 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;

  try {
    const result = await Notification.requestPermission();
    return result === 'granted';
  } catch {
    return false;
  }
}

/**
 * Check current notification permission status.
 */
export function getNotificationPermission(): NotificationPermission | null {
  if (!('Notification' in window)) return null;
  return Notification.permission;
}

/**
 * Apply the selected notification preference to the system/Slack backend.
 */
export async function applyNotificationPreference(
  preference: NotificationPreference
): Promise<void> {
  // TODO: Sync with Slack API or local notification settings
  // For now we persist via onboardingService
}
