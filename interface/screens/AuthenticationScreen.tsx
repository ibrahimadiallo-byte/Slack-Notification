/**
 * Step 1: Authentication – email entry only (verification skipped for MVP testing).
 */

import { useState } from 'react';

interface AuthenticationScreenProps {
  onComplete: () => void;
}

export function AuthenticationScreen({ onComplete }: AuthenticationScreenProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    onComplete();
  };

  return (
    <div className="flow-panel auth-panel">
      <h1>Sign in to your workspace</h1>
      <p className="subtitle">
        Enter your email to continue. No verification needed for this demo.
      </p>
      <form onSubmit={handleEmailSubmit} className="flow-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@company.com"
          className="flow-input"
          autoComplete="email"
          autoFocus
        />
        {error && <p className="flow-error">{error}</p>}
        <button type="submit" className="continue-btn">
          Continue
        </button>
      </form>
    </div>
  );
}
