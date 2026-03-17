import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSTab, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Tab',
  component: DSTab,
  tags: ['autodocs'],
  args: { type: 'fixed', style: 'primary', configuration: 'label-only', selected: true, state: 'enabled' },
  argTypes: { type: { control: 'select', options: ['fixed', 'scrollable'] }, style: { control: 'select', options: ['primary', 'secondary'] }, configuration: { control: 'select', options: ['label-only', 'icon-only', 'label-icon'] }, selected: { control: 'boolean' }, state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed'] } },
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
} satisfies Meta<typeof DSTab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryFixed: Story = {};
export const SecondaryScrollable: Story = { args: { type: 'scrollable', style: 'secondary' } };
export const IconOnly: Story = { args: { configuration: 'icon-only' } };
export const LabelIcon: Story = { args: { configuration: 'label-icon' } };
export const Hovered: Story = { args: { state: 'hovered' } };
export const Focused: Story = { args: { state: 'focused' } };
export const Pressed: Story = { args: { state: 'pressed' } };
