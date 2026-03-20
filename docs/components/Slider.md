## 1. Component Name

Slider

### Overview
- Slider adjusts a value across a constrained range through direct manipulation.
- It solves the need to select continuous values, bipolar values, and min-max ranges with one control family.

### Usage
- Used for tuning levels, filters, ranges, and continuous settings.
- Typical scenarios include standard single-value sliders, centered sliders for bipolar values, range sliders, vertical sliders, and disabled value displays.
- Context of use: continuous value selection.

### Structure
- Variants: `standard`, `centered`, `range`
- Orientations: `horizontal`, `vertical`
- Sizes: `xsmall`, `small`, `medium`, `large`, `xlarge`
- States: `enabled`, `hovered`, `pressed`, `disabled`
- Standard slider defaults to a value between `0` and `100`.
- Centered and range sliders operate across `-100` to `100`.

### Properties
- Tokens used:
- `palette.primary.main` (`#6750A4`) for the active track
- `palette.primary.dark` for pressed active track state
- `spacing(40)` (`160px`) for horizontal width or vertical height
- `spacing(3)` (`12px`) through `spacing(7)` (`28px`) for thumb sizes by scale
- Native Material slider marks for non-range variants
- Configurable properties:
- `variant?: 'standard' | 'centered' | 'range'`
- `orientation?: 'horizontal' | 'vertical'`
- `size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'`
- `state?: 'enabled' | 'hovered' | 'pressed' | 'disabled'`
- `value?: number | number[]`

### Accessibility Considerations
- Disabled state is visible through the native disabled control treatment.
- Keyboard increment behavior, value text announcements, and aria-valuetext: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use centered sliders only when the value meaning changes around a midpoint.
- Use range sliders for lower and upper bounds rather than two separate standard sliders.
