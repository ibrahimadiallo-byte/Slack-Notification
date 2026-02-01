/**
 * Step 5: Landing – "Get Started" before entering the workspace.
 */

interface LandingScreenProps {
  onGetStarted: () => void;
}

export function LandingScreen({ onGetStarted }: LandingScreenProps) {
  return (
    <div className="flow-panel landing-panel">
      <h1>You’re all set</h1>
      <p className="subtitle">
        Your notifications are configured. Jump in and start collaborating.
      </p>
      <button
        type="button"
        className="get-started-btn"
        onClick={onGetStarted}
      >
        Get Started
      </button>
      <p className="flow-hint">You can always change this later in Settings.</p>
    </div>
  );
}
