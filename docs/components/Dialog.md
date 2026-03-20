## 1. Component Name

Dialog

### Overview
- Dialog interrupts the current flow with focused information or a constrained set of decisions.
- It solves the need to present confirmation, selection, or XR-style messaging without leaving the current context.

### Usage
- Used for confirmation, list selection, scrollable option sets, and high-emphasis XR messaging.
- Typical scenarios include cancel/confirm decisions, menu-like option lists, and elevated information prompts.
- Context of use: interruptive decision surfaces.

### Structure
- Variants: `basic`, `list`, `scrollable-list`, `xr`
- Optional icon support through `showIcon`
- Elevation options for XR: `surface-container-high`, `surface-container-highest`
- Basic dialog shows text content.
- List and scrollable-list variants show list rows inside dialog content.
- Actions always present a text secondary action and filled primary action.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for standard dialog surfaces
- `palette.secondary.main` (`#625B71`) for XR highest-emphasis surface
- `palette.secondary.contrastText` (`#FFFFFF`) for XR highest-emphasis content
- `palette.text.primary` (`#1C1B1F`) for title and body content
- `spacing(2)` (`8px`) for title row gap between icon and text
- `typography.h6` for dialog title
- `typography.body2` for basic dialog content
- `DSButton` text + filled pair for actions
- Configurable properties:
- `variant?: 'basic' | 'list' | 'scrollable-list' | 'xr'`
- `showIcon?: boolean`
- `elevation?: 'surface-container-high' | 'surface-container-highest'`
- `open?: boolean`

### Accessibility Considerations
- Visible hierarchy: title, content, and actions are clearly separated.
- Focus trap, escape key handling, and backdrop dismissal behavior: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Keep dialog actions focused on a small number of decisions.
- Use list variants when the body content is primarily a set of options rather than prose.
