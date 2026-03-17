import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSChip, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Chip',
  component: DSChip,
  tags: ['autodocs'],
  args: { variant: 'assistive', style: 'outlined', configuration: 'label-only', state: 'enabled', selected: false, label: 'Chip' },
  argTypes: { variant: { control: 'select', options: ['input', 'assistive', 'filter', 'suggestion', 'group'] }, style: { control: 'select', options: ['elevated', 'outlined'] }, configuration: { control: 'select', options: ['label-only', 'label-leading-icon', 'label-avatar', 'label-icon', 'label-favicon', 'label-brand-icon'] }, state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'dragged', 'disabled'] }, selected: { control: 'boolean' }, showClosingIcon: { control: 'boolean' }, showTrailingIcon: { control: 'boolean' }, showIcon: { control: 'boolean' }, layout: { control: 'select', options: ['single-row-scrollable', 'multiple-rows-overflow'] }, label: { control: 'text' } },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box
          sx={(theme) => ({
            padding: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
          })}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof DSChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = { args: { variant: 'input', configuration: 'label-avatar', showClosingIcon: true } };
export const AssistiveElevated: Story = { args: { variant: 'assistive', style: 'elevated', configuration: 'label-icon' } };
export const FilterSelected: Story = { args: { variant: 'filter', selected: true, showTrailingIcon: true } };
export const SuggestionWithIcon: Story = { args: { variant: 'suggestion', showIcon: true } };
export const GroupOverflow: Story = { args: { variant: 'group', layout: 'multiple-rows-overflow' } };
export const Hovered: Story = { args: { state: 'hovered' } };
export const Focused: Story = { args: { state: 'focused' } };
export const Pressed: Story = { args: { state: 'pressed' } };
export const Dragged: Story = { args: { state: 'dragged' } };
export const Disabled: Story = { args: { state: 'disabled' } };
