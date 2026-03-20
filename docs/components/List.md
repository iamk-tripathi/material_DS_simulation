## 1. Component Name

List

### Overview
- List presents structured rows for scanning, selection, disclosure, and swipe-driven actions.
- It solves the need to organize repeatable content and row anatomy with flexible leading and trailing elements.

### Usage
- Used in feeds, settings, menus, selection groups, expandable content, and swipe actions.
- Typical scenarios include baseline list rows, segmented filled lists, expandable disclosures, draggable rows, and swipe-reveal actions.
- Context of use: structured row collections.

### Structure
- Variants: `baseline`, `standard`, `segmented-filled`, `expandable`, `draggable`, `swipable-standard`, `swipable-segmented`
- Density values: `0`, `-2`, `-4`
- Conditions: `1-line`, `2-line`, `3-line+`
- Leading elements: `none`, `monogram`, `icon`, `image`, `video`, `check-box`, `radio-button`, `switch`, `avatar`, `indent`, `icon-button`, `slot`, `type11`
- Trailing elements: `none`, `icon`, `check-box`, `radio-button`, `switch`, `trailing-text-only`, `icon-button`, `accordion-button`, `slot`
- Alignment: `middle`, `top`
- States: `enabled`, `hovered`, `focused`, `pressed`, `dragged`, `disabled`
- Additional behaviors: `selected`, `showOverline`, `showSupportingText`, `accordion`, `swipeState`, `multiLine`

### Properties
- Tokens used:
- `palette.secondary.light` (`#E8DEF8`) for segmented-filled and swipable-segmented row surfaces
- `palette.action.selected` for selected row background
- `spacing(1)` (`4px`), `spacing(1.5)` (`6px`), and `spacing(2)` (`8px`) for density-dependent vertical padding
- `typography.caption` for overline text
- `typography.body2` for supporting text and trailing meta text
- Avatar, checkbox, radio, switch, and icon primitives for row anatomy
- Configurable properties:
- `variant`
- `density`
- `condition`
- `leading`
- `trailing`
- `alignment`
- `state`
- `selected?: boolean`
- `showOverline?: boolean`
- `showSupportingText?: boolean`
- `accordion?: 'collapsed' | 'expanded'`
- `swipeState?: 'default' | 'initiate-reveal' | 'revealed' | 'swipe-action'`
- `multiLine?: boolean`

### Accessibility Considerations
- List rows should communicate hierarchy through text, not color alone.
- Swipe actions, drag interactions, and keyboard equivalents: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes and list semantics: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use dense rows only when scan efficiency matters more than spacious reading comfort.
- Choose leading and trailing elements based on the row action pattern, not decoration.
