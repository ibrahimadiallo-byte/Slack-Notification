# Interface

The app's user-facing layer: screens, components, and assets.

- **screens/** – Full-screen views (e.g. onboarding notification screen)
- **components/** – Reusable UI pieces (buttons, cards, option rows)
- **assets/** – Images, icons, and other static files

This folder should depend on `core/` for types, state, and business logic, not the other way around.
