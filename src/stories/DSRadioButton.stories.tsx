import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSRadioButton, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Radio Button',
  component: DSRadioButton,
  tags: ['autodocs'],
  args: { selected: true, state: 'enabled' },
  argTypes: { selected: { control: 'boolean' }, state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'disabled'] } },
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
} satisfies Meta<typeof DSRadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Selected: Story = {};
export const Unselected: Story = { args: { selected: false } };
export const Hovered: Story = { args: { state: 'hovered' } };
export const Focused: Story = { args: { state: 'focused' } };
export const Pressed: Story = { args: { state: 'pressed' } };
export const Disabled: Story = { args: { state: 'disabled' } };
