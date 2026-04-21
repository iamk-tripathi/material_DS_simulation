# Material DS Simulation

Material DS Simulation is a React + TypeScript playground for testing how a well-documented Material Design 3 design system can guide AI-assisted UI generation.

The project combines a tokenized MUI theme, a reusable `DS*` component layer, Storybook documentation, Code Connect setup, and example mobile screens. Its main goal is to make generated UI predictable: screens should use the same component APIs, semantic tokens, spacing rules, and layout patterns every time.

## What This Project Demonstrates

- A Material Design 3-inspired component library built on MUI.
- A strict design-system rule file for AI agents and contributors.
- Token documentation for color, typography, and shape.
- Component documentation and Storybook MDX pages.
- Mobile screen examples that consume only the local design-system exports.
- Figma Code Connect scaffolding for mapping design components to code.
- A small app flow where the Tasker screen opens the Profile screen from the top avatar.

## Tech Stack

- React 19
- TypeScript
- Vite
- MUI
- Storybook
- Figma Code Connect
- ESLint

## Project Structure

```text
.
├── design-system.md              # Non-negotiable DS rules for generated UI
├── docs/
│   ├── components/               # Markdown docs for DS components
│   └── tokens/                   # Token docs for color, typography, shape
├── dashboard-preview/            # Standalone dashboard preview entry
├── src/
│   ├── App.tsx                   # App shell and screen switching
│   ├── DSButton.figma.tsx        # Code Connect mapping example
│   ├── assets/                   # App and generated visual assets
│   ├── components/               # DS component wrappers and exports
│   ├── screens/                  # Example app screens
│   ├── stories/                  # Storybook stories and MDX docs
│   └── theme/theme.ts            # MUI theme tokens
└── .github/copilot-instructions.md
```

## Design-System Rules

The core rules live in `design-system.md` and `.github/copilot-instructions.md`.

Important constraints:

- Import UI components from `src/components/` only.
- Do not import directly from `@mui/material` inside screens.
- Use `theme.palette.*` for every color.
- Use `theme.spacing()` for every layout spacing value.
- Use MUI typography variants instead of custom font-size overrides.
- Wrap screens with `ThemeProvider` and the local theme.
- Keep mobile layouts aligned with the documented screen patterns.
- Use at most one filled button per screen.

These rules are intentionally strict because the repository is used to evaluate whether structured design-system context improves AI-generated code quality.

## Component Library

The design-system layer lives in `src/components/`.

It includes wrappers such as:

- `DSAppBar`
- `DSAvatar`
- `DSBadge`
- `DSButton`
- `DSCard`
- `DSCheckbox`
- `DSChip`
- `DSDateTimePicker`
- `DSDialog`
- `DSDivider`
- `DSList`
- `DSMenu`
- `DSNavigation`
- `DSNavigationBar`
- `DSProgressIndicator`
- `DSRadioButton`
- `DSSearch`
- `DSSheet`
- `DSSlider`
- `DSSwitch`
- `DSTab`
- `DSTextField`
- `DSToolbar`
- `DSTooltip`

The public component surface is centralized in `src/components/index.ts`, which also re-exports the icon set used by screens.

## Screens

Example screens live in `src/screens/`.

- `Tasker.tsx`: a mobile task/message-style screen with bottom navigation.
- `Profile.tsx`: a mobile profile/settings screen opened from the Tasker top avatar.
- `Dashboard.tsx`: a simple dashboard example.
- `Settings.tsx`: a settings example using list rows and switches.
- `AppDashboardMuiTestV10.tsx`: dashboard experiment retained for reference.

The current app shell starts on Tasker. Tapping the top-right avatar opens the Profile screen, and the Profile app bar back arrow returns to Tasker.

## Documentation

There are two documentation layers:

- `docs/`: plain Markdown references for tokens and components.
- `src/stories/`: Storybook stories and MDX docs for interactive review.

Storybook also includes shared doc helpers in `src/stories/doc-components/`.

## Figma Integration

The repo includes a Figma Code Connect example:

- `src/DSButton.figma.tsx`
- `figma.config.json`

This is intended to demonstrate how Figma components can be mapped to local DS components. Publishing Code Connect mappings may require an owned or accessible Figma file with the right permissions.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

Build the app:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

Build Storybook:

```bash
npm run build-storybook
```

## Development Notes

When adding a new screen:

1. Create it in `src/screens/`.
2. Import all UI primitives from `src/components/`.
3. Wrap the screen in `ThemeProvider` with `theme` from `src/theme/theme.ts`.
4. Use only semantic palette tokens and `theme.spacing()`.
5. Prefer DS wrappers over raw MUI exports when a wrapper exists.
6. Add Storybook or docs updates when creating new reusable components.

When adding a new DS component:

1. Create `src/components/DSComponentName.tsx`.
2. Export it from `src/components/index.ts`.
3. Add a Storybook story in `src/stories/`.
4. Add or update component documentation in `docs/components/`.

## Why This Exists

This repository is a controlled environment for comparing generic AI-generated UI against DS-aware AI-generated UI. The thesis is simple: when AI tools receive concrete component contracts, token rules, and layout constraints, they produce interfaces that are more consistent, maintainable, and aligned with the product system.
