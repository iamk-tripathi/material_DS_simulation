## 1. Component Name

Divider

### Overview
- Divider separates related content into readable sections without becoming a focal element.
- It solves the need to create visual boundaries in lists, forms, and stacked layouts.

### Usage
- Used between grouped rows, sections, and supporting content blocks.
- Typical scenarios include full-width separation, inset list dividers, middle-inset dividers, labeled section breaks, and vertical separation.
- Context of use: layout separation.

### Structure
- Orientations: `horizontal`, `vertical`
- Types: `full-width`, `inset`, `middle-inset`, `divider-with-subhead`
- Optional `label` only appears with `divider-with-subhead`.
- Inset divider offsets from the left edge.
- Middle-inset divider offsets from both left and right edges.

### Properties
- Tokens used:
- `spacing(4)` (`16px`) for inset start offset
- `spacing(2)` (`8px`) for middle-inset horizontal offsets and label gap
- `typography.body2` for the subhead label
- Default Material divider color from the MUI divider primitive
- Configurable properties:
- `orientation?: 'horizontal' | 'vertical'`
- `type?: 'full-width' | 'inset' | 'middle-inset' | 'divider-with-subhead'`
- `label?: string`

### Accessibility Considerations
- Divider is structural and should not carry meaning by color alone.
- Decorative vs semantic separator behavior: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use divider to separate content groups, not as decoration.
- Use divider-with-subhead only when the section label needs to stay attached to the separator.
