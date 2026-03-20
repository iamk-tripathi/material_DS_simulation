## 1. Component Name

Carousel

### Overview
- Carousel presents browsable content collections across mobile and tablet contexts.
- It solves the need to surface multiple related items in a horizontally scrollable format with different layout densities.

### Usage
- Used for media and content browsing across mobile and tablet layouts.
- Typical scenarios include hero carousels, center-aligned hero layouts, multi-browse collections, and full-screen browsing.
- Context of use: horizontally scrollable content collections.

### Structure
- Variants: `standard`, `full-screen`
- Context: `mobile`, `tablet`
- Layout: `hero`, `center-aligned-hero`, `multi-browse`, `uncontained`, `multi-aspect-ratio`, `full-screen`
- Aspect ratios: `16:9`, `4:3`, `1:1`, `9:16`, `3:4`
- Standard context renders `3` cards for mobile and `4` cards for tablet in the current implementation.

### Properties
- Tokens used:
- `palette.background.paper` (`#FFFBFE`) for carousel card surface
- `spacing(72)` (`288px`) for standard carousel width
- `spacing(96)` (`384px`) for full-screen carousel width
- `spacing(40)` (`160px`) for default card minimum width
- `spacing(28)` (`112px`) for multi-browse card minimum width
- `spacing(32)` (`128px`) for standard card minimum height
- `spacing(64)` (`256px`) for full-screen card minimum height
- `spacing(3)` (`12px`) for card content padding and carousel gap
- Configurable properties:
- `variant`
- `context`
- `layout`
- `aspectRatio`

### Accessibility Considerations
- Contrast: carousel cards use the paper surface token. This information is not visible in the provided material. Please confirm.
- Interaction states: This information is not visible in the provided material. Please confirm.
- Screen reader label/aria attributes: This information is not visible in the provided material. Please confirm.

### Guidelines
- Choose the carousel layout based on browsing density and context.
- Use full-screen layout only when stronger immersion is needed.
