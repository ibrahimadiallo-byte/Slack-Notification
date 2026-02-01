/**
 * Step 2: OS Permissions – system prompt "Allow notifications?"
 * Simulates the native OS permission request for web.
 */

import { useState } from 'react';
import { requestNotificationPermission } from '../../core';

interface OSPermissionsScreenProps {
  onComplete: () => void;
}

export function OSPermissionsScreen({ onComplete }: OSPermissionsScreenProps) {
  const [status, setStatus] = useState<'idle' | 'requesting' | 'granted' | 'denied'>('idle');

  const handleAllow = async () => {
    setStatus('requesting');
    try {
      const granted = await requestNotificationPermission();
      setStatus(granted ? 'granted' : 'denied');
      if (granted) {
        onComplete();
      }
    } catch {
      setStatus('denied');
    }
  };

  const handleSkip = () => {
    // User can continue without granting; we still show preference selection.
    onComplete();
  };

  return (
    <div className="flow-panel os-permissions-panel">
      <h1>Stay in the loop</h1>
      <p className="subtitle">
        Slack can send you notifications so you never miss important messages.
      </p>
      <div className="os-permission-card">
        <p className="os-prompt">How do you want to stay updated?</p>
        <div className="os-actions">
          <button
            type="button"
            className="os-allow-btn"
            onClick={handleAllow}
            disabled={status === 'requesting'}
          >
            {status === 'requesting' ? 'Requesting…' : 'Allow'}
          </button>
          <button
            type="button"
            className="os-skip-btn"
            onClick={handleSkip}
            disabled={status === 'requesting'}
          >
            Not now
          </button>
        </div>
      </div>
      {status === 'denied' && (
        <p className="flow-hint">
          You can enable notifications later in your browser or device settings.
        </p>
      )}
    </div>
  );
}
