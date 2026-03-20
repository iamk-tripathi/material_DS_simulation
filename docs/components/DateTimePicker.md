## 1. Component Name

DateTimePicker

### Overview
- DateTimePicker collects temporal values through structured date and time entry flows.
- It solves the need to gather single dates, ranges, and time formats with a consistent Material Design 3 surface.

### Usage
- Used in booking flows, scheduling, filtering, forms, and deadline selection.
- Typical scenarios include modal date selection, input date fields, docked range entry, dial time entry, and keyboard time entry.
- Context of use: structured temporal input.

### Structure
- Variants: `modal-date`, `input-date`, `docked-input-date`, `dial`, `keyboard`
- Types: `day`, `year`, `full-screen-range`, `single-input`, `range`, `month`
- Formats: `12-hour`, `24-hour`
- Orientations: `vertical`, `horizontal`
- Range input variants render an additional end-date text field.
- Dial and keyboard variants expose time format as part of the visible layout.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for picker surface
- `palette.text.primary` (`#1C1B1F`) for headings and supporting labels
- `spacing(4)` (`16px`) for surface padding
- `spacing(3)` (`12px`) for internal gaps
- `spacing(72)` (`288px`) for picker width
- `typography.h6` for the picker heading
- `typography.body2` for type and format text
- Outlined text-field styling for date entry inputs
- Configurable properties:
- `variant?: 'modal-date' | 'input-date' | 'docked-input-date' | 'dial' | 'keyboard'`
- `type?: 'day' | 'year' | 'full-screen-range' | 'single-input' | 'range' | 'month'`
- `format?: '12-hour' | '24-hour'`
- `orientation?: 'vertical' | 'horizontal'`

### Accessibility Considerations
- Visible structure: heading, type, and format are present in the picker surface.
- Keyboard navigation, date grid semantics, and focus management: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use range type only when users need a start and end value in the same flow.
- Use dial or keyboard variants when time format is a primary part of the task.
