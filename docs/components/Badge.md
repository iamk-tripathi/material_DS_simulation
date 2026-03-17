## 1. Component Name

Badge

### Overview
- Badge is used to indicate a notification, item count, or related status on a navigation destination.
- It solves the need to show a compact status indicator attached to a navigation destination.

### Usage
- Used on a navigation destination.
- Typical scenarios include notification counts, item counts, and related status.
- Context of use: navigation destination status.

### Structure
- Large: circular container `16x16`, error color background, centered label text.
- Small: dot `6x6`, error color background, no text.
- Variants: `Size = Large | Small`

### Properties
- Tokens used:
- Background: `error.main` (`#B3261E`)
- Text: `error.contrastText` (`#FFFFFF`)
- Typography: `label/small` (`Roboto Medium 11px`, `lineHeight 16`, `letterSpacing 0.5`)
- Shape: `Corner/Full` = fully round (`borderRadius 1000`)
- Padding large: `2px` top/bottom, `4px` left/right
- Configurable properties:
- `size: 'large' | 'small'`
- `label?: string` (large only)
- `max?: number` (default `99`, shows `max+` when exceeded)

### Accessibility Considerations
- Contrast: text uses `error.contrastText` on `error.main`.
- Interaction states (hover, focus, disabled): This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use when a navigation destination needs to show a notification, item count, or related status.
- This information is not visible in the provided material. Please confirm.
