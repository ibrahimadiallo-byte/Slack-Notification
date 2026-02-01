/**
 * App entry – orchestrates the onboarding flow.
 * Flow: Authentication → OS Permissions → Preference Selection → Landing → Workspace
 */

import { useState } from 'react';
import type { OnboardingStep } from '../core/types';
import { SlackLayout } from './components/SlackLayout';
import {
  AuthenticationScreen,
  OSPermissionsScreen,
  OnboardingNotificationScreen,
  LandingScreen,
} from './screens';

const STEPS: OnboardingStep[] = [
  'authentication',
  'os_permissions',
  'preference_selection',
  'landing',
];

export function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [inWorkspace, setInWorkspace] = useState(false);

  const step = STEPS[stepIndex];
  const goNext = () => {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      setInWorkspace(true);
    }
  };

  if (inWorkspace) {
    return (
      <SlackLayout>
        <div className="workspace-welcome">
          <h1>Welcome to your workspace</h1>
          <p>You’re all set. Start exploring channels and connecting with your team.</p>
        </div>
      </SlackLayout>
    );
  }

  return (
    <SlackLayout>
      <div className="flow-overlay">
        <div className="flow-step-indicator">
          {STEPS.map((s, i) => (
            <span
              key={s}
              className={`flow-dot ${i <= stepIndex ? 'active' : ''}`}
              aria-hidden
            />
          ))}
        </div>
        {step === 'authentication' && (
          <AuthenticationScreen onComplete={goNext} />
        )}
        {step === 'os_permissions' && (
          <OSPermissionsScreen onComplete={goNext} />
        )}
        {step === 'preference_selection' && (
          <OnboardingNotificationScreen onComplete={goNext} />
        )}
        {step === 'landing' && (
          <LandingScreen onGetStarted={goNext} />
        )}
      </div>
    </SlackLayout>
  );
}
