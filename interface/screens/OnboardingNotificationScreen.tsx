/**
 * Onboarding notification screen: "How do you want to stay updated?"
 * Displays the four options and handles selection.
 */

import { useState } from 'react';
import {
  NOTIFICATION_OPTIONS,
  completeNotificationOnboarding,
  type NotificationPreference,
} from '../../core';
import { NotificationOptionCard } from '../components/NotificationOptionCard';

interface OnboardingNotificationScreenProps {
  onComplete?: () => void;
}

export function OnboardingNotificationScreen({
  onComplete,
}: OnboardingNotificationScreenProps) {
  const [selected, setSelected] = useState<NotificationPreference | null>(null);

  const handleConfirm = async () => {
    if (!selected) return;
    await completeNotificationOnboarding(selected);
    onComplete?.();
  };

  return (
    <div className="onboarding-panel">
      <h1>How do you want to stay updated?</h1>
      <p className="subtitle">Choose how you’d like to be notified when you’re away from Slack.</p>
      {NOTIFICATION_OPTIONS.map((option) => (
        <NotificationOptionCard
          key={option.value}
          option={option}
          isSelected={selected === option.value}
          onSelect={() => setSelected(option.value)}
        />
      ))}
      <button
        type="button"
        className="continue-btn"
        onClick={handleConfirm}
        disabled={!selected}
      >
        Continue
      </button>
      <p className="onboarding-hint">You can always change this later in Settings.</p>
    </div>
  );
}
