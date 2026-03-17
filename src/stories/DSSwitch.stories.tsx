import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSSwitch, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Switch',
  component: DSSwitch,
  tags: ['autodocs'],
  args: { selected: true, state: 'enabled', showIcon: false },
  argTypes: { selected: { control: 'boolean' }, state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'disabled'] }, showIcon: { control: 'boolean' } },
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
} satisfies Meta<typeof DSSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Selected: Story = {};
export const Unselected: Story = { args: { selected: false } };
export const WithIcon: Story = { args: { showIcon: true } };
export const Hovered: Story = { args: { state: 'hovered' } };
export const Focused: Story = { args: { state: 'focused' } };
export const Pressed: Story = { args: { state: 'pressed' } };
export const Disabled: Story = { args: { state: 'disabled' } };
