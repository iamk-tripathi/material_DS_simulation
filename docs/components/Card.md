## 1. Component Name

Card

### Overview
- Card groups related content and actions inside a bounded surface.
- It solves the need to organize related information into a readable, self-contained container.

### Usage
- Used for grouped content blocks across dashboards, feeds, settings, and surfaces with actions.
- Typical scenarios include content summaries, media and text combinations, and interactive grouped content.
- Context of use: content grouping and surface composition.

### Structure
- Variants: `elevated`, `outlined`, `filled`
- Orientation options: `stacked`, `horizontal`
- Layout options: `media-text`, `slot`
- States visible in implementation: `enabled`, `hovered`, `focused`, `pressed`, `dragged`
- Optional media slot is visible when layout is `media-text`.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for elevated and outlined card surfaces
- `palette.primary.main` (`#6750A4`) for focused outline treatment
- `spacing(4)` (`16px`) for card content padding
- `spacing(3)` (`12px`) for internal content gap
- `shape.borderRadius` (`12px`) for media block corner radius
- Filled card background uses `surfaceVariant` or `secondary.light` fallback. This information is not visible in the provided material. Please confirm.
- Configurable properties:
- `variant: 'elevated' | 'outlined' | 'filled'`
- `orientation?: 'stacked' | 'horizontal'`
- `layout?: 'media-text' | 'slot'`
- `state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged'`
- `media?`
- `children`
- `onClick?: () => void`

### Accessibility Considerations
- Contrast: card text should remain readable against the card surface.
- Interaction states: focused and pressed treatments are visible in the implementation.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use cards to group related information and actions.
- Do not nest DSCard inside DSCard.
