# Material Design 3 — Design System Reference
> AI tools must follow these rules in every response.
> Never deviate from token usage, component selection, or layout patterns.

---

## Token Rules

### Color — semantic roles only
| Token | Usage |
|---|---|
| `primary` | Key actions, FABs, active states |
| `on-primary` | Text/icons on primary color |
| `secondary` | Filters, chips, supporting UI |
| `surface` | Screen and card backgrounds |
| `on-surface` | Body text, standard icons |
| `error` | Destructive actions, validation |

- ✅ `sx={{ color: 'primary.main' }}`
- ❌ `sx={{ color: '#6750A4' }}`

### Spacing — 4pt base only
Valid values: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64`
- ✅ `theme.spacing(4)` = 16px
- ❌ `margin: '10px'`

### Shape
- Default: `12px` (medium components)
- Small (chips, badges): `8px`
- Large (dialogs, bottom sheets): `16px`
- Full round (FAB, icon buttons): `50%`

---

## Component Selection Rules

### Buttons — max one filled per screen
| Scenario | Component |
|---|---|
| Primary CTA | `Button variant="contained"` |
| Secondary action | `Button variant="outlined"` |
| Low emphasis | `Button variant="text"` |
| Destructive | `Button variant="contained" color="error"` |
| Icon only | `IconButton` |

### Cards
| Scenario | Variant |
|---|---|
| Default container | `Card` elevation level 1 |
| Selectable/active | Filled surface variant |
| Outlined context | `Card variant="outlined"` |

- Never nest cards
- Cards are not nav links unless fully interactive

### Navigation
| Context | Component |
|---|---|
| Mobile 2–5 destinations | `BottomNavigation` |
| Desktop side nav | `Drawer` permanent |
| In-page tabs | `Tabs` |

### App Bars
| Context | Height |
|---|---|
| Standard screen | `AppBar` 64px |
| Content-heavy | Medium 112px |
| Hero/landing | Large 152px, collapses on scroll |

### Text Fields
- Filled → inside a surface or card
- Outlined → on plain backgrounds
- Always include a visible label

### Mobile Layout Padding Rules
1. Standard mobile screen gutter:
   - Use `theme.spacing(3)` for left and right screen padding by default.
   - Only use `theme.spacing(4)` when the layout is intentionally spacious and text wrapping is not affected.

2. Avoid stacked horizontal insets:
   - Do not combine screen padding, card padding, list item padding, and reserved icon gutters unless each layer is necessary.
   - A content row should usually have at most 2 horizontal inset layers:
     - outer container gutter
     - inner surface padding

3. Cards inside screens:
   - If a card already has internal horizontal padding, child rows inside that card should not add extra left/right padding unless required by the component anatomy.

4. Lists inside cards:
   - Prefer `disableGutters` on `ListItem`.
   - Keep row horizontal padding at `theme.spacing(0)` when the parent card already provides padding.
   - Use row `gap` for icon/text separation instead of adding another horizontal padding layer.

5. Icon spacing in rows:
   - Do not reserve oversized icon columns by default.
   - Avoid fixed `minWidth` on icon containers unless the DS component explicitly requires it.

6. Mobile text wrapping check:
   - After composing a mobile screen, verify that titles, amounts, and subtitles do not wrap early because of compounded padding.
   - If text wraps too soon, reduce nested horizontal spacing before reducing typography size.

7. Use tokens only:
   - Never hardcode pixel paddings or margins.
   - All layout spacing must use `theme.spacing()`.

---

## Screen Layout Patterns

### Dashboard / Home
```
AppBar (small) + avatar
2-column grid of summary Cards
Section header (h5)
Recent activity List
BottomNavigation pinned
FAB optional
```

### List / Browse
```
AppBar (small) + search icon
Filter chips (horizontal scroll)
Card list or ListItem list
BottomNavigation pinned
```

### Detail Screen
```
AppBar (large, collapses, back arrow)
Hero image or summary block
Content in Cards
Sticky bottom: contained Button + text Button
```

### Form / Settings
```
AppBar (small, back arrow)
Scrollable TextFields (filled variant)
Section dividers with labels
Sticky bottom: contained Button + outlined Button
```

---

## Hard Rules
1. Only use MUI components — no raw HTML div layouts
2. Never hardcode any color, spacing, or typography value
3. Every screen must have an AppBar
4. Max one `variant="contained"` Button per screen
5. Use `sx` prop with `theme` references for all styling
6. Import components from `src/components/` only
