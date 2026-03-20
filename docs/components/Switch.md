## 1. Component Name

Switch

### Overview
- Switch toggles an immediate on or off setting.
- It solves the need to communicate binary state for preferences that take effect as soon as they change.

### Usage
- Used in settings, preference lists, and immediate feature toggles.
- Typical scenarios include selected and unselected states, icon-enhanced switches, and hovered, focused, pressed, or disabled previews.
- Context of use: instant binary setting changes.

### Structure
- Selection states: `selected`, `unselected`
- Interaction states: `enabled`, `hovered`, `focused`, `pressed`, `disabled`
- Optional icon presentation through `showIcon`
- Single inline toggle with separate thumb and track behavior handled by the switch primitive.

### Properties
- Tokens used:
- `palette.action.hover` for hovered switch surface
- `palette.action.selected` for pressed switch surface
- `palette.primary.main` (`#6750A4`) for focused outline
- `spacing(0.25)` (`1px`) for focus outline thickness
- Native Material switch sizing from the MUI primitive
- Configurable properties:
- `selected?: boolean`
- `state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled'`
- `showIcon?: boolean`

### Accessibility Considerations
- Switch should be paired with a clear label that describes the immediate setting.
- Keyboard interaction and on/off announcement behavior: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use switch only for settings that take effect immediately.
- Do not use switch when the user is making a selection that still needs separate confirmation.
