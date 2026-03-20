## 1. Component Name

Menu

### Overview
- Menu presents a transient list of contextual actions in a compact surface.
- It solves the need to reveal related commands without permanently occupying layout space.

### Usage
- Used for overflow actions, contextual actions, and grouped option lists.
- Typical scenarios include baseline menus, standard menus, vibrant menus, active menu rows, and disabled menu items.
- Context of use: transient action selection.

### Structure
- Variants: `baseline`, `standard`, `vibrant`
- Density values: `0`, `-2`, `-4`
- Theme variants: `standard`, `vibrant`
- Group counts: `1`, `2`, `3`
- States: `enabled`, `hovered`, `focused`, `pressed`, `disabled`, `active`, `selected`
- Menus render one row per group entry inside a paper surface.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for standard menu surfaces
- `palette.secondary.main` (`#625B71`) for vibrant menu surfaces
- `palette.secondary.contrastText` (`#FFFFFF`) for vibrant menu content
- `palette.text.primary` (`#1C1B1F`) for standard menu content
- `spacing(56)` (`224px`) for menu width
- `spacing(1)` (`4px`), `spacing(1.5)` (`6px`), and `spacing(2)` (`8px`) for density-dependent row padding
- `typography.caption` for secondary group labels
- Configurable properties:
- `variant?: 'baseline' | 'standard' | 'vibrant'`
- `density?: '0' | '-2' | '-4'`
- `themeVariant?: 'standard' | 'vibrant'`
- `groups?: '1' | '2' | '3'`
- `state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled' | 'active' | 'selected'`
- `selected?: boolean`

### Accessibility Considerations
- Disabled items are visually reduced through opacity.
- Focus movement, roving tabindex, and menu-item semantics: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Keep menu items contextual to the trigger that opened the menu.
- Use vibrant menus only when the surrounding surface hierarchy supports stronger visual emphasis.
