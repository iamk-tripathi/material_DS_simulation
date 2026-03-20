## 1. Component Name

ProgressIndicator

### Overview
- ProgressIndicator communicates ongoing status, completion, or background loading.
- It solves the need to show known and unknown progress across linear and circular presentations.

### Usage
- Used in loading states, uploads, processing steps, and background work.
- Typical scenarios include determinate linear progress, indeterminate linear progress, circular progress, loading spinners, and wave-styled progress bars.
- Context of use: status communication.

### Structure
- Variants: `linear-determinate`, `linear-indeterminate`, `circular-determinate`, `circular-indeterminate`, `loading`
- Progress styles: `flat`, `wave`
- Thickness options: `4-dp`, `8-dp`
- Step values for loading: `0` through `7`
- Optional surface container through `showContainer`
- Linear indicators render at a fixed width; circular indicators change size by thickness or loading step.

### Properties
- Tokens used:
- `palette.primary.main` (`#6750A4`) for active progress color
- `palette.primary.dark` for pressed slider-style darkened progress in wave usage where visible in implementation
- `palette.background.paper` (`#FFFBFE`) for optional loading container surface
- `spacing(40)` (`160px`) for linear indicator width
- `spacing(1)` (`4px`) and `spacing(2)` (`8px`) for indicator thickness
- `spacing(4)` (`16px`) for optional container padding
- Configurable properties:
- `variant`
- `progressStyle?: 'flat' | 'wave'`
- `thickness?: '4-dp' | '8-dp'`
- `progress?: number`
- `step?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'`
- `showContainer?: boolean`

### Accessibility Considerations
- Determinate indicators expose a progress value in the implementation API.
- Progress announcements, reduced-motion behavior, and aria-valuenow usage: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use determinate variants only when the completion value is actually known.
- Use loading or indeterminate variants when duration and completion cannot yet be predicted.
