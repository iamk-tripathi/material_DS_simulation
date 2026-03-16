import figma from '@figma/code-connect';
import DSButton from './components/DSButton';

figma.connect(DSButton, 'https://www.figma.com/design/BngXVKM7fJCug81GikRGiT/Material-3-Design-Kit--Community-?node-id=57994-2227&m=dev', {
props: {
variant: figma.enum('Type', {
'Filled': 'filled',
'Outlined': 'outlined',
'Text': 'text',
}),
children: figma.string('Label'),
disabled: figma.boolean('State', {
'Disabled': true,
'Enabled': false,
'Hovered': false,
'Focused': false,
'Pressed': false,
}),
},
example: ({ variant, children, disabled }) => (
<DSButton variant={variant} disabled={disabled}>
{children}
</DSButton>
),
});