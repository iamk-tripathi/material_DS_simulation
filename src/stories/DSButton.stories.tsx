import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSButton, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Button',
  component: DSButton,
  tags: ['autodocs'],
  args: {
    variant: 'filled',
    children: 'Button',
    color: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
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
} satisfies Meta<typeof DSButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Destructive: Story = {
  args: {
    color: 'error',
    children: 'Destructive',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
