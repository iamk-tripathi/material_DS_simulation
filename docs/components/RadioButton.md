## 1. Component Name

RadioButton

### Overview
- RadioButton represents one choice inside a mutually exclusive set.
- It solves the need to make a single selection clear without allowing multiple concurrent choices.

### Usage
- Used in forms, configuration groups, and decision lists with one valid answer.
- Typical scenarios include selected and unselected states plus hovered, focused, pressed, and disabled interaction previews.
- Context of use: exclusive selection.

### Structure
- Selection states: `selected`, `unselected`
- Interaction states: `enabled`, `hovered`, `focused`, `pressed`, `disabled`
- Single circular control with one selected center point when checked.

### Properties
- Tokens used:
- `palette.action.hover` for hovered radio surface
- `palette.action.selected` for pressed radio surface
- `palette.primary.main` (`#6750A4`) for focused outline and selected emphasis
- `spacing(0.25)` (`1px`) for focused outline thickness
- Native Material radio sizing from the MUI primitive
- Configurable properties:
- `selected?: boolean`
- `state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled'`

### Accessibility Considerations
- Radio buttons should be grouped and labeled as one decision set.
- Keyboard navigation within a radio group: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use radio buttons only when one option must exclude the others.
- Do not use radio buttons for independent on/off settings.
