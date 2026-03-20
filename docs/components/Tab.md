## 1. Component Name

Tab

### Overview
- Tab organizes peer destinations within the same context.
- It solves the need to switch between related views without leaving the current screen hierarchy.

### Usage
- Used for view switching, segmented content areas, and peer navigation sets.
- Typical scenarios include fixed primary tabs, secondary scrollable tabs, icon-only tabs, and label-plus-icon tabs.
- Context of use: peer destination switching.

### Structure
- Types: `fixed`, `scrollable`
- Styles: `primary`, `secondary`
- Configurations: `label-only`, `icon-only`, `label-icon`
- States: `enabled`, `hovered`, `focused`, `pressed`
- One tab can be selected while peers remain unselected.
- Tabs render an active indicator through the Material tabs primitive.

### Properties
- Tokens used:
- `palette.primary.main` (`#6750A4`) for primary text and indicator
- `palette.secondary.main` (`#625B71`) for secondary text and indicator
- `palette.action.hover` for hovered tab background
- `spacing(12)` (`48px`) for minimum tab height
- `spacing(0.25)` (`1px`) for focus outline thickness
- Configurable properties:
- `type?: 'fixed' | 'scrollable'`
- `style?: 'primary' | 'secondary'`
- `configuration?: 'label-only' | 'icon-only' | 'label-icon'`
- `selected?: boolean`
- `state?: 'enabled' | 'hovered' | 'focused' | 'pressed'`

### Accessibility Considerations
- Selected state is visually reinforced through the active tab indicator.
- Arrow-key navigation, tabpanel relationships, and aria-controls behavior: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use fixed tabs for a small set of peers that all fit in view.
- Use scrollable tabs when the set is wider than the available layout width.
