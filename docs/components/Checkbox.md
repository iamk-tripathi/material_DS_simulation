## 1. Component Name

Checkbox

### Overview
- Checkbox expresses selection state through selected, indeterminate, and unselected visual treatments.
- It solves the need to show compact multi-select state with clear interaction feedback.

### Usage
- Used in forms, settings, preference lists, and grouped multi-select flows.
- Typical scenarios include binary selection, partial group selection, and validation states.
- Context of use: multi-select input and option selection.

### Structure
- Variants: `selected`, `indeterminate`, `unselected`, `error-selected`, `error-indeterminate`, `error-unselected`
- States: `enabled`, `hovered`, `focused`, `pressed`, `disabled`
- Error variants switch the checkbox color to the error color token.

### Properties
- Tokens used:
- `palette.primary.main` (`#6750A4`) for selected checkbox color
- `palette.error.main` (`#B3261E`) for error checkbox color
- `palette.action.hover` for hovered background surface. This information is not visible in the provided material. Please confirm.
- `palette.action.selected` for pressed background surface. This information is not visible in the provided material. Please confirm.
- `spacing(0.25)` (`1px`) for focused outline thickness
- Configurable properties:
- `type`
- `state`

### Accessibility Considerations
- Contrast: primary and error states use distinct semantic colors, but selection should not rely on color alone.
- Interaction states: `enabled`, `hovered`, `focused`, `pressed`, `disabled`
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use checkbox only for selection state.
- Use indeterminate when a related group is partially selected.
