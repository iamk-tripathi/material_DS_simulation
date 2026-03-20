## 1. Component Name

Avatar

### Overview
- Avatar represents a person, account, or identity placeholder in compact surfaces.
- It solves the need to show recognizable identity status when imagery is unavailable or simplified.

### Usage
- Used in app bars, profile rows, lists, menus, and account entry points.
- Typical scenarios include generic profile placeholder, monogram fallback, confirmation state, and three-dimensional numbered avatar.
- Context of use: identity and account surfaces.

### Structure
- Variants: `generic`, `three-dimensional`
- Styles: `avatar`, `monogram`, `check`
- Fixed avatar container size: `40px x 40px`
- Generic avatar uses a single-character label or check icon.
- Three-dimensional avatar shows an index value inside the container.

### Properties
- Tokens used:
- `palette.primary.main` (`#6750A4`) for generic avatar background
- `palette.primary.contrastText` (`#FFFFFF`) for generic avatar content
- `palette.secondary.main` (`#625B71`) for three-dimensional avatar background
- `palette.secondary.contrastText` (`#FFFFFF`) for three-dimensional avatar content
- `spacing(10)` (`40px`) for avatar width and height
- `typography.caption` for monogram and index text
- Configurable properties:
- `variant?: 'generic' | 'three-dimensional'`
- `style?: 'avatar' | 'monogram' | 'check'`
- `index?: number`
- `label?: string`

### Accessibility Considerations
- Contrast: generic and three-dimensional variants use contrast text tokens on colored backgrounds.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.
- Image alternative text and person-name mapping: This information is not visible in the provided material. Please confirm.

### Guidelines
- Use monogram when a real profile image is not available.
- Use the check style only when identity state also needs a confirmation cue.
