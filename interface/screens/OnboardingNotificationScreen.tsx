/**
 * Onboarding notification screen: "How do you want to stay updated?"
 * Displays the five options and handles selection.
 */

import { useState, useCallback } from 'react';
import {
  NOTIFICATION_OPTIONS,
  completeNotificationOnboarding,
  type NotificationPreference,
  type NotificationPreferenceSelection,
} from '../../core';
import { NotificationOptionCard } from '../components/NotificationOptionCard';

interface OnboardingNotificationScreenProps {
  onComplete?: () => void;
}

export function OnboardingNotificationScreen({
  onComplete,
}: OnboardingNotificationScreenProps) {
  const [selected, setSelected] = useState<NotificationPreference[]>([]);

  const toggle = useCallback((value: NotificationPreference) => {
    setSelected((prev) => {
      const idx = prev.indexOf(value);
      if (idx >= 0) return prev.filter((v) => v !== value);
      if (prev.length >= 2) return prev;
      return [...prev, value];
    });
  }, []);

  const handleConfirm = async () => {
    if (selected.length < 1 || selected.length > 2) return;
    const selection: NotificationPreferenceSelection = selected.length === 1
      ? [selected[0]]
      : [selected[0], selected[1]];
    await completeNotificationOnboarding(selection);
    onComplete?.();
  };

  const canContinue = selected.length >= 1 && selected.length <= 2;

  return (
    <div className="onboarding-panel">
      <h1>How do you want to stay updated? 🧐</h1>
      <p className="subtitle">Pick 1 or 2 options. Choose how you’d like to be notified when you’re away from Slack.</p>
      {NOTIFICATION_OPTIONS.map((option) => (
        <NotificationOptionCard
          key={option.value}
          option={option}
          isSelected={selected.includes(option.value)}
          onSelect={() => toggle(option.value)}
        />
      ))}
      <button
        type="button"
        className="continue-btn"
        onClick={handleConfirm}
        disabled={!canContinue}
      >
        Continue
      </button>
      <p className="onboarding-hint">You can always change this later in Settings.</p>
    </div>
  );
}
