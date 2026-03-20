## 1. Component Name

AppBar

### Overview
- AppBar presents the primary top or bottom application bar surface.
- It solves the need to anchor title, navigation affordances, and top-level actions within a screen.

### Usage
- Used at the top of a screen for title and navigation, or at the bottom for persistent actions.
- Typical scenarios include top app bars with back navigation, titles, trailing actions, avatars, and bottom app bar icon rows.
- Context of use: screen chrome and navigation framing.

### Structure
- Sizes: `small`, `medium`, `large`
- Bar types: `top`, `bottom`
- Optional back arrow is visible on top app bars.
- Optional right element slot is visible on top app bars.
- Bottom app bar supports `iconsCount` from `1` through `4`.
- Top app bars keep the title as the primary anchor while trailing actions remain secondary.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for app bar surface
- `palette.text.primary` (`#1C1B1F`) for title and icon content
- `spacing(16)` (`64px`) for small app bar height
- `spacing(28)` (`112px`) for medium app bar height
- `spacing(38)` (`152px`) for large app bar height
- `spacing(4)` (`16px`) for horizontal padding
- `spacing(2)` (`8px`) for action gap
- Configurable properties:
- `size: 'small' | 'medium' | 'large'`
- `barType?: 'top' | 'bottom'`
- `title`
- `showBackArrow?: boolean`
- `onBackClick?: () => void`
- `rightElement?`
- `iconsCount?: '1' | '2' | '3' | '4'`

### Accessibility Considerations
- Contrast: title and actions use text primary on the paper background.
- Interaction states (hover, focus, disabled): This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use the top app bar to frame the screen title and primary navigation affordances.
- Use the bottom app bar when actions need to remain persistent at the bottom edge of the screen.
