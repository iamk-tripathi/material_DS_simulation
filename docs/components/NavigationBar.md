## 1. Component Name

NavigationBar

### Overview
- NavigationBar presents a set of destinations for moving between primary sections.
- It solves the need to show a small, consistent set of navigation options in bar, rail, or drawer form.

### Usage
- Used for primary navigation destinations in bottom bars, rails, and drawers.
- Typical scenarios include mobile bottom navigation, compact rails, expanded rails, and permanent drawers.
- Context of use: app-level navigation.

### Structure
- Variants: `bar`, `rail`, `drawer`
- Supports `2` to `5` navigation items.
- Each item includes a `label` and `icon`.
- Rail alignment options: `top`, `middle`
- Drawer layout uses a permanent list of destinations.
- Selected destination is visible in the implementation.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for navigation surfaces
- `spacing(1)` (`4px`) for bar vertical padding
- `spacing(4)` (`16px`) for rail vertical padding and drawer top padding
- `spacing(2)` (`8px`) for rail item gap
- `spacing(60)` (`240px`) for drawer width
- Configurable properties:
- `items: Array<{ label: string; icon: React.ReactNode }>`
- `activeIndex`
- `onChange`
- `variant?: 'bar' | 'rail' | 'drawer'`
- `alignment?: 'top' | 'middle'`

### Accessibility Considerations
- Contrast: navigation surfaces use the paper background token.
- Interaction states: selected state is visible in the implementation.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use between two and five destinations only.
- Match bar, rail, or drawer presentation to the available space and navigation prominence.
