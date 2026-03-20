## 1. Component Name

Tooltip

### Overview
- Tooltip provides concise supplemental guidance near a trigger.
- It solves the need to reveal short supporting context without permanently occupying screen space.

### Usage
- Used for short hints, contextual explanations, and richer guidance attached to a trigger.
- Typical scenarios include plain single-line tooltips, multi-line tooltips, and rich tooltips with arrow treatment.
- Context of use: supplemental guidance.

### Structure
- Variants: `plain`, `rich`
- Types: `single-line`, `multi-line`, `rich`
- Optional trigger content through `children`
- Rich tooltip enables arrow treatment.
- Multi-line tooltip repeats the title string across additional line content in the current implementation.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for the trigger surface used in stories and wrapper preview
- `spacing(2)` (`8px`) for trigger padding on all sides
- `typography.body2` for tooltip content
- Material tooltip positioning and arrow primitives from MUI
- Configurable properties:
- `variant?: 'plain' | 'rich'`
- `type?: 'single-line' | 'multi-line' | 'rich'`
- `title: string`
- `children?: ReactNode`
- `open?: boolean`

### Accessibility Considerations
- Tooltip should only add supplemental information, not essential content.
- Trigger timing, dismissal behavior, and hover/focus semantics: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Keep tooltip copy concise and directly tied to the trigger.
- Use rich tooltip only when plain one-line guidance is not enough.
