/**
 * Card component for a single notification option in the onboarding screen.
 */

import type { NotificationOption } from '../../core/types';

interface NotificationOptionCardProps {
  option: NotificationOption;
  isSelected: boolean;
  onSelect: () => void;
}

export function NotificationOptionCard({
  option,
  isSelected,
  onSelect,
}: NotificationOptionCardProps) {
  return (
    <button
      type="button"
      className="option-card"
      onClick={onSelect}
      data-selected={isSelected}
      aria-pressed={isSelected}
    >
      <strong>{option.title}</strong>
      <span>{option.description}</span>
    </button>
  );
}
