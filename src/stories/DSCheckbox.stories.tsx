import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSCheckbox, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Checkbox',
  component: DSCheckbox,
  tags: ['autodocs'],
  args: { type: 'selected', state: 'enabled' },
  argTypes: { type: { control: 'select', options: ['selected', 'indeterminate', 'unselected', 'error-selected', 'error-indeterminate', 'error-unselected'] }, state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'disabled'] } },
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
} satisfies Meta<typeof DSCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Selected: Story = {};
export const Indeterminate: Story = { args: { type: 'indeterminate' } };
export const Unselected: Story = { args: { type: 'unselected' } };
export const ErrorSelected: Story = { args: { type: 'error-selected' } };
export const Hovered: Story = { args: { state: 'hovered' } };
export const Focused: Story = { args: { state: 'focused' } };
export const Pressed: Story = { args: { state: 'pressed' } };
export const Disabled: Story = { args: { state: 'disabled' } };
