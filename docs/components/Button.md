## 1. Component Name

Button

### Overview
- Button presents actions with different emphasis levels.
- It solves the need to communicate primary, secondary, and tertiary actions clearly within a screen.

### Usage
- Used for tappable actions in screens, cards, dialogs, and flows.
- Typical scenarios include primary call-to-action, secondary action, tertiary action, destructive action, toggle action, and segmented selection.
- Context of use: action surfaces and decision points.

### Structure
- Variants: `filled`, `outlined`, `text`, `tonal`, `elevated`, `toggle`, `segmented`
- Size options: `xsmall`, `small`, `medium`, `large`, `xlarge`
- Shape options: `round`, `square`
- Button type options: `label`, `icon`
- States visible in implementation: `selected`, `disabled`

### Properties
- Tokens used:
- `palette.primary.main` (`#6750A4`) for primary emphasis and selected toggle/segmented background
- `palette.primary.contrastText` (`#FFFFFF`) for selected toggle/segmented content
- `palette.secondary.main` (`#625B71`) for tonal button background
- `palette.secondary.contrastText` (`#FFFFFF`) for tonal button content
- `palette.error.main` (`#B3261E`) for destructive filled button background
- `palette.background.paper` (`#FFFBFE`) for elevated and unselected toggle/segmented surfaces
- `palette.text.primary` (`#1C1B1F`) for elevated and unselected toggle/segmented content
- `spacing(2)` through `spacing(6)` for horizontal and vertical padding by size
- `spacing(5)` (`20px`) for round button corner radius
- `shape.borderRadius` (`12px`) for square button corner radius
- `shadows[1]` for elevated button shadow
- Configurable properties:
- `variant`
- `color?: 'primary' | 'error'`
- `size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'`
- `shape?: 'round' | 'square'`
- `buttonType?: 'label' | 'icon'`
- `selected?: boolean`
- `disabled?: boolean`
- `fullWidth?: boolean`
- `onClick?: () => void`
- `children`

### Accessibility Considerations
- Contrast: primary and error variants use contrast text tokens on colored backgrounds.
- Interaction states (hover, focus): This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use one filled button for the primary action on a screen.
- Pair outlined, tonal, or text buttons with filled buttons only when the action hierarchy is clear.
