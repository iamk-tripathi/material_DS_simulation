## 1. Component Name

Navigation

### Overview
- Navigation presents top-level destination sets across bar, rail, drawer, and XR layouts.
- It solves the need to move between primary application sections while preserving a consistent destination model.

### Usage
- Used for primary app-level destination changes in compact bars, side rails, expanded rails, drawers, and XR layouts.
- Typical scenarios include mobile bottom navigation, desktop side rails, expanded side navigation, and permanent drawers.
- Context of use: top-level destination selection.

### Structure
- Variants: `drawer`, `rail`, `rail-expanded`, `bar`, `xr-rail`, `xr-bar`
- Alignment: `top`, `middle`
- Nav items: `3`, `4`, `5`, `6`
- Item states documented in source material: `enabled`, `hovered`, `focused`, `pressed`
- Item badge documented in source material: `none`, `small`, `large`
- `bar` and `xr-bar` use the shared navigation bar implementation
- `rail`, `xr-rail`, and `rail-expanded` use the shared navigation rail implementation
- `drawer` uses a wider list-based drawer surface

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for navigation surfaces
- `spacing(4)` (`16px`) for drawer top padding
- `spacing(64)` (`256px`) for drawer width in `DSNavigation`
- `spacing(60)` (`240px`) for drawer width in the shared `DSNavigationBar` drawer implementation
- `spacing(2)` (`8px`) for rail item gap
- Configurable properties:
- `variant`
- `items`
- `activeIndex`
- `onChange`
- `alignment`
- `navItems`
- `orientation`
- `railType`
- `configuration`

### Accessibility Considerations
- Contrast: navigation uses the paper background token. This information is not visible in the provided material. Please confirm.
- Interaction states: `enabled`, `hovered`, `focused`, `pressed`
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use navigation only for top-level destinations.
- Keep the destination set concise and stable.
