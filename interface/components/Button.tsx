/**
 * Reusable button component.
 */

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} data-variant={variant}>
      {label}
    </button>
  );
}
