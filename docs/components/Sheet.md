## 1. Component Name

Sheet

### Overview
- Sheet presents supplementary content anchored to the bottom or side of the viewport.
- It solves the need to reveal contextual content without fully navigating away from the current screen.

### Usage
- Used for bottom sheets, side sheets, modal sheets, and supplementary panels.
- Typical scenarios include bottom content slots, modal bottom sheets, side panels, and side sheets with back navigation.
- Context of use: anchored supplementary surfaces.

### Structure
- Variants: `bottom`, `side`
- Additional modes: `modal`, `sideType`, `showBack`, `layout`, `open`
- Side sheet types: `standard`, `modal`
- Layout values: `empty`, `slot`
- Bottom sheets anchor to the bottom edge; side sheets anchor to the right edge.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for sheet surface
- `spacing(72)` (`288px`) for side sheet width
- `spacing(40)` (`160px`) for bottom sheet minimum height
- `spacing(4)` (`16px`) for surface padding
- `spacing(3)` (`12px`) for title-row bottom spacing
- `typography.h6` for sheet title
- `typography.body2` for slot content text
- Configurable properties:
- `variant?: 'bottom' | 'side'`
- `modal?: boolean`
- `sideType?: 'standard' | 'modal'`
- `showBack?: boolean`
- `layout?: 'empty' | 'slot'`
- `open?: boolean`

### Accessibility Considerations
- Visible hierarchy includes title, optional back affordance, and content slot.
- Focus trap, dismissal behavior, and scrim semantics: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use bottom sheets for short, contextual tasks tied to the current screen.
- Use side sheets for complementary content that benefits from a wider panel.
