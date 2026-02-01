/**
 * Step 1: Authentication – email entry and verification via link or code.
 */

import { useState } from 'react';

export type AuthPhase = 'email' | 'verify';

interface AuthenticationScreenProps {
  onComplete: () => void;
}

export function AuthenticationScreen({ onComplete }: AuthenticationScreenProps) {
  const [phase, setPhase] = useState<AuthPhase>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
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
    setPhase('verify');
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // In a real app, we'd validate the code against the backend.
    if (!code.trim()) {
      setError('Please enter the verification code.');
      return;
    }
    onComplete();
  };

  if (phase === 'email') {
    return (
      <div className="flow-panel auth-panel">
        <h1>Sign in to your workspace</h1>
        <p className="subtitle">
          We’ll send you a magic link or code to sign in. No password needed.
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

  return (
    <div className="flow-panel auth-panel">
      <h1>Check your email</h1>
      <p className="subtitle">
        We sent a 6-digit code to <strong>{email}</strong>. Enter it below.
      </p>
      <form onSubmit={handleVerifySubmit} className="flow-form">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          placeholder="000000"
          className="flow-input flow-input--code"
          autoComplete="one-time-code"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          autoFocus
        />
        {error && <p className="flow-error">{error}</p>}
        <button type="submit" className="continue-btn" disabled={code.length < 6}>
          Verify
        </button>
      </form>
      <button
        type="button"
        className="flow-link"
        onClick={() => setPhase('email')}
      >
        Use a different email
      </button>
    </div>
  );
}
