/**
 * Onboarding and notification state.
 * Manages whether onboarding is complete and the selected preference.
 */

import type { NotificationPreference } from '../types';

export interface OnboardingState {
  hasCompletedNotificationOnboarding: boolean;
  notificationPreference: NotificationPreference | null;
}

export const defaultState: OnboardingState = {
  hasCompletedNotificationOnboarding: false,
  notificationPreference: null,
};

// TODO: Add persistence (e.g. localStorage, user settings API)
// TODO: Add state update functions and/or store context
