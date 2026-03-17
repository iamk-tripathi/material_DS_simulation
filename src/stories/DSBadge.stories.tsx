import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSBadge, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Badge',
  component: DSBadge,
  tags: ['autodocs'],
  args: {
    size: 'large',
    label: '3',
    max: 99,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'small'],
    },
    label: {
      control: 'text',
    },
    max: {
      control: 'number',
    },
  },
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
} satisfies Meta<typeof DSBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    label: '3',
  },
};

export const LargeOverflow: Story = {
  args: {
    size: 'large',
    label: '100',
    max: 99,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: undefined,
  },
};

export const LargeNoLabel: Story = {
  args: {
    size: 'large',
    label: undefined,
  },
};
