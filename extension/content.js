/**
 * Slack Notification Onboarding - Content Script
 * Injects the PRD notification onboarding modal when a user visits Slack.
 * Does not modify any existing Slack UI - only adds the overlay.
 */

const STORAGE_KEY = 'slack-notification-onboarding';
const OPTIONS = [
  { value: 'dms_only', title: 'DMs only', description: 'Only notify me for direct messages' },
  { value: 'mentions_only', title: 'Mentions only', description: 'Only notify me when someone @mentions me' },
  { value: 'everything', title: 'Everything', description: 'Notify me for all activity (channels, DMs, mentions)' },
  { value: 'off', title: 'Off', description: "I'll check Slack on my own time" }
];

function getWorkspaceId() {
  const match = window.location.pathname.match(/\/client\/([A-Z0-9]+)/i) || 
                window.location.hostname.match(/^([a-z0-9-]+)\.slack\.com$/i);
  return match ? match[1] : 'default';
}

async function hasCompletedOnboarding() {
  const workspaceId = getWorkspaceId();
  const result = await chrome.storage.local.get([STORAGE_KEY]);
  const data = result[STORAGE_KEY] || {};
  return !!data[workspaceId]?.completed;
}

async function savePreference(preference) {
  const workspaceId = getWorkspaceId();
  const result = await chrome.storage.local.get([STORAGE_KEY]);
  const data = result[STORAGE_KEY] || {};
  data[workspaceId] = { completed: true, preference, timestamp: Date.now() };
  await chrome.storage.local.set({ [STORAGE_KEY]: data });
}

function createOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'slack-notification-onboarding-root';
  overlay.innerHTML = `
    <div class="slack-onboarding-backdrop">
      <div class="slack-onboarding-modal">
        <h1>How do you want to stay updated?</h1>
        <p class="slack-onboarding-subtitle">Choose how you'd like to be notified when you're away from Slack.</p>
        <div class="slack-onboarding-options">
          ${OPTIONS.map((opt, i) => `
            <button type="button" class="slack-onboarding-option" data-value="${opt.value}">
              <strong>${opt.title}</strong>
              <span>${opt.description}</span>
            </button>
          `).join('')}
        </div>
        <button type="button" class="slack-onboarding-continue" disabled>Continue</button>
        <p class="slack-onboarding-hint">You can always change this later in Settings.</p>
      </div>
    </div>
  `;

  let selected = null;

  overlay.querySelectorAll('.slack-onboarding-option').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.querySelectorAll('.slack-onboarding-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selected = btn.dataset.value;
      overlay.querySelector('.slack-onboarding-continue').disabled = false;
    });
  });

  overlay.querySelector('.slack-onboarding-continue').addEventListener('click', async () => {
    if (!selected) return;
    await savePreference(selected);
    overlay.remove();
  });

  return overlay;
}

async function maybeShowOnboarding() {
  // Only show when user is in a workspace (URL has /client/)
  if (!window.location.pathname.includes('/client/')) return;

  if (await hasCompletedOnboarding()) return;

  // Wait for Slack's UI to load before showing our modal
  await new Promise(r => setTimeout(r, 3000));

  if (await hasCompletedOnboarding()) return;

  const overlay = createOverlay();
  document.body.appendChild(overlay);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', maybeShowOnboarding);
} else {
  maybeShowOnboarding();
}
