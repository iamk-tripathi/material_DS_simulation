## 1. Component Name

Chip

### Overview
- Chip communicates compact input, assistive, filter, suggestion, and grouped choices in a small surface.
- It solves the need to show concise labels, lightweight actions, and filter states without taking up much space.

### Usage
- Used in search, filtering, suggestion flows, grouped choices, and compact action clusters.
- Typical scenarios include removable input values, assistive shortcuts, selected filters, suggestions, and wrapped chip groups.
- Context of use: compact action and selection surfaces.

### Structure
- Variants: `input`, `assistive`, `filter`, `suggestion`, `group`
- Input chip supports `configuration`, `state`, `selected`, and `showClosingIcon`
- Assistive chip supports `style`, `configuration`, and `state`
- Filter chip supports `style`, `configuration`, `state`, `selected`, and `showTrailingIcon`
- Suggestion chip supports `style`, `state`, `selected`, and `showIcon`
- Group chip supports `layout = single-row-scrollable | multiple-rows-overflow`
- States: `enabled`, `hovered`, `focused`, `pressed`, `dragged`, `disabled`

### Properties
- Tokens used:
- `palette.primary.main` (`#6750A4`) for selected chip and focused outline color
- `palette.action.selected` for dragged chip background. This information is not visible in the provided material. Please confirm.
- `shadows[1]` for elevated chip shadow. This information is not visible in the provided material. Please confirm.
- `spacing(2)` (`8px`) for grouped chip gap
- `spacing(0.25)` (`1px`) for focused outline thickness
- Configurable properties:
- `variant`
- `style`
- `configuration`
- `state`
- `selected`
- `showClosingIcon`
- `showTrailingIcon`
- `showIcon`
- `layout`
- `label`

### Accessibility Considerations
- Contrast: selected, focused, and dragged chips use visible surface changes, but meaning should not rely on color alone.
- Interaction states: `enabled`, `hovered`, `focused`, `pressed`, `dragged`, `disabled`
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Keep chip labels short and scannable.
- Use grouped chips when multiple compact choices belong together.
