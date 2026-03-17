---
description: Generate documentation for one provided design-system item using Figma MCP and strict evidence-only rules.
type: command
---

# Generate Documentation

Use this command to document exactly one provided design-system item (component, token style, pattern, or module) from Figma.

Follow all constraints in:
`ai-rules/design-system-documentation-project-rules.md`

Do not redesign, improve, expand, or invent missing behavior.

---

## Inputs Required

- Figma URL (must include `fileKey` and `node-id`)
- Item name (if different from node name)
- Optional output path

If any required input is missing, stop and ask for it.

---

## Execution Steps

1. Parse the Figma URL and extract `fileKey` and `node-id`.
2. Read the node through Figma MCP.
3. Document only information visible in the provided node/material.
4. If any required detail is unclear or missing, use this exact line:

> "This information is not visible in the provided material. Please confirm."

5. Produce Markdown output using the exact structure below.

---

## Output Structure (Use Exactly)

## 1. Component Name

### Overview
- What the component is
- What problem it solves

### Usage
- Where it is used
- Typical scenarios
- Context of use (product area, flow, interaction type)

### Structure
- Key parts / anatomy
- Variants (only if provided)
- States (only if provided)

### Properties
- Tokens used (color, spacing, typography, etc.)
- Configurable properties (if visible)

### Accessibility Considerations
- Contrast (if inferable from tokens)
- Interaction states (hover, focus, disabled if provided)
- Screen reader considerations (if documented or visible)

### Guidelines
- When to use
- When not to use (only if explicitly documented or clearly implied)

---

## Writing Rules

- Use plain, direct language.
- Avoid design theory explanations.
- Avoid marketing tone and decorative language.
- Avoid assumptions.
- Keep sentences concise.

- Output must be valid Markdown.
- No commentary outside the documentation body.
- No recommendations, improvements, or new system rules.

---

## Example Input

- Figma URL: `https://www.figma.com/design/XJwHiYH1ueZGshS8Fr4c6v/E1-Design-System--App-?node-id=870-3967&m=dev`
- Item name: `Typography`
