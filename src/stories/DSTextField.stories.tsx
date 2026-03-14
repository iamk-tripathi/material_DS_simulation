import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSTextField, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Text Field',
  component: DSTextField,
  tags: ['autodocs'],
  args: {
    variant: 'outlined',
    label: 'Label',
    helperText: 'Helper text',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
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
} satisfies Meta<typeof DSTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Outlined: Story = {};

export const WithError: Story = {
  args: {
    error: true,
    helperText: 'Error state',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    helperText: 'Disabled field',
  },
};
