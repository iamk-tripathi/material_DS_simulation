## 1. Component Name

Search

### Overview
- Search combines query entry with contextual surface treatments and optional identity cues.
- It solves the need to enter search terms in bar, docked, and full-screen search presentations.

### Usage
- Used in top-level search entry, docked search modules, and immersive search screens.
- Typical scenarios include a compact search bar, docked search with supporting text, full-screen search, and avatar-led search entry.
- Context of use: query entry and discovery.

### Structure
- Variants: `bar`, `docked`, `full-screen`
- States: `enabled`, `hovered`, `pressed`
- Configurations: `input-text`, `supporting-text`
- Optional leading avatar support
- Search icon or avatar leads the input field.
- Supporting text appears below the field when enabled.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for docked search surfaces
- `palette.action.hover` for hovered input background
- `palette.action.selected` for pressed input background
- `spacing(60)` (`240px`) for bar and docked width
- `spacing(80)` (`320px`) for full-screen width
- `spacing(4)` (`16px`) for container padding
- `spacing(2)` (`8px`) for gaps between leading element and text field
- Outlined text-field styling for query entry
- Configurable properties:
- `variant?: 'bar' | 'docked' | 'full-screen'`
- `state?: 'enabled' | 'hovered' | 'pressed'`
- `showAvatar?: boolean`
- `configuration?: 'input-text' | 'supporting-text'`
- `value?: string`

### Accessibility Considerations
- Placeholder text alone should not be the only accessible label.
- Field labeling, search landmark usage, and screen reader behavior: This information is not visible in the provided material. Please confirm.
- Keyboard shortcuts and submit behavior: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use docked search when the control belongs to a persistent surface section.
- Use full-screen search when discovery is the primary task and more context is needed.
