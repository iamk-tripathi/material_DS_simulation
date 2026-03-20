## 1. Component Name

Toolbar

### Overview
- Toolbar groups related tools and quick actions inside a compact horizontal, vertical, or XR surface.
- It solves the need to keep frequently used actions together in a consistent utility bar.

### Usage
- Used for grouped editing, search, favorite, and quick action controls.
- Typical scenarios include docked toolbars, floating toolbars, vertical tool clusters, XR toolbars, and toggleable tool actions.
- Context of use: grouped utility and action surfaces.

### Structure
- Variants: `standard`, `vibrant`, `XR`
- Toolbar configuration: `floating`, `docked`
- Orientation: `horizontal`, `vertical`
- XR elevation: `surface-container`, `surface-container-high`, `surface-container-highest`, `tertiary-container`
- Surface tier: `surface-container`, `surface-container-high`, `tertiary-container`
- States: `enabled`, `hovered`, `focused`, `pressed`, `disabled`
- Includes icon buttons plus a button action in the current implementation.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for standard toolbar surface
- `palette.secondary.main` (`#625B71`) for vibrant and tertiary toolbar background
- `palette.secondary.contrastText` (`#FFFFFF`) for vibrant and tertiary toolbar content
- `palette.text.primary` (`#1C1B1F`) for standard toolbar content
- `spacing(3)` (`12px`) for toolbar padding
- `spacing(2)` (`8px`) for gap between toolbar actions
- `shadows[1]` for floating toolbar elevation. This information is not visible in the provided material. Please confirm.
- Configurable properties:
- `themeVariant`
- `configuration`
- `orientation`
- `xrElevation`
- `surfaceTier`
- `iconButtonState`
- `iconButtonToggleableSelected`
- `buttonToggleableSelected`

### Accessibility Considerations
- Contrast: standard and vibrant toolbars switch between paper and secondary surfaces. This information is not visible in the provided material. Please confirm.
- Interaction states: `enabled`, `hovered`, `focused`, `pressed`, `disabled`
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Group related tools and quick actions together.
- Use floating configuration only when elevation adds value.
