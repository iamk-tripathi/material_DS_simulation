## 1. Component Name

TextField

### Overview
- TextField captures user-entered text with labeled input variants and state feedback.
- It solves the need to collect form input while keeping labels, helper text, and validation states readable.

### Usage
- Used in forms, search entry points, dialogs, and settings screens.
- Typical scenarios include text entry, validation, placeholder guidance, and icon-assisted input.
- Context of use: data entry and form completion.

### Structure
- Variants: `filled`, `outlined`
- States visible in implementation: `enabled`, `hovered`, `focused`, `error`, `disabled`
- Text configuration options: `input-text`, `label-text`, `placeholder-text`
- Optional leading and trailing icon positions are supported
- Helper text is visible when provided

### Properties
- Tokens used:
- `palette.error.main` (`#B3261E`) for error state via the MUI error variant
- `palette.action.hover` for hovered field background. This information is not visible in the provided material. Please confirm.
- `typography.fontFamily` (`Roboto`) for field text styling
- Configurable properties:
- `variant: 'filled' | 'outlined'`
- `state?: 'enabled' | 'hovered' | 'focused' | 'error' | 'disabled'`
- `textConfiguration?: 'input-text' | 'label-text' | 'placeholder-text'`
- `label`
- `helperText?`
- `leadingIcon?: boolean`
- `trailingIcon?: boolean`
- `error?: boolean`
- `disabled?: boolean`
- `fullWidth?: boolean`
- `value?: string`
- `onChange?: (value: string) => void`

### Accessibility Considerations
- Contrast: error state should remain visually distinct from the default state.
- Interaction states: hovered, focused, error, and disabled states are visible in the implementation.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use the filled variant inside surfaces and the outlined variant on plain backgrounds.
- Do not use TextField without a label.
