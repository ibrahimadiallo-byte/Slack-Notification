# Core

Internal logic: types, state, and services. No UI lives here.

- **types/** – Shared types (e.g. notification preference options)
- **state/** – Application/onboarding state and persistence
- **services/** – API calls, notification permission handling, preference sync

The interface layer imports from `core/`; `core/` does not import from `interface/`.
