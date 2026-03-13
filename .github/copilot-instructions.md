# Copilot Instructions

This project implements Material Design 3 using MUI v5 in React + TypeScript.

## Non-negotiable rules
- All components must be imported from `src/components/` — never directly from `@mui/material`
- Never hardcode colors, spacing, or font sizes — always use `theme.*` references
- Always wrap screens in `<ThemeProvider theme={theme}>` from `src/theme/theme.ts`
- Follow all layout patterns and component rules in `design-system.md` at repo root
- Spacing is 4pt base — use `theme.spacing(n)` only
- Maximum one `variant="contained"` Button per screen

## File conventions
- New screens go in `src/screens/ScreenName.tsx`
- New DS components go in `src/components/DSComponentName.tsx`
- Always use `.tsx` extension
