/**
 * Slack-style app shell: purple sidebar + main content area.
 */

import type { ReactNode } from 'react';

interface SlackLayoutProps {
  children: ReactNode;
}

export function SlackLayout({ children }: SlackLayoutProps) {
  return (
    <div className="slack-app">
      <aside className="slack-sidebar">
        <div className="slack-sidebar-header">
          <div className="workspace-switcher">
            <img src="/slack-logo.png" alt="Slack" className="workspace-logo" />
            <span className="workspace-name">Slack</span>
            <span className="chevron">›</span>
          </div>
        </div>
        <nav className="slack-nav">
          <button type="button" className="nav-item">
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </button>
          <button type="button" className="nav-item">
            <span className="nav-icon">✉️</span>
            <span>DMs</span>
          </button>
          <button type="button" className="nav-item">
            <span className="nav-icon">🔔</span>
            <span>Activity</span>
          </button>
          <button type="button" className="nav-item">
            <span className="nav-icon">📌</span>
            <span>Later</span>
          </button>
          <button type="button" className="nav-item">
            <span className="nav-icon">⋯</span>
            <span>More</span>
          </button>
          <button type="button" className="nav-item nav-item-create">
            <span className="nav-icon">+</span>
            <span>Create</span>
          </button>
        </nav>
        <div className="slack-channels">
          <div className="channels-header">
            <span className="channels-toggle">▼</span>
            <span>Channels</span>
          </div>
          <div className="channel-list">
            <div className="channel-item"># general</div>
            <div className="channel-item"># random</div>
            <div className="channel-item"># announcements</div>
          </div>
        </div>
        <div className="slack-sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">U</div>
            <div className="user-info">
              <span className="user-name">You</span>
              <span className="user-status">Active</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="slack-main">
        {children}
      </main>
    </div>
  );
}
