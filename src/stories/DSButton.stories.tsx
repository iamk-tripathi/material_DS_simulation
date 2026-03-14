import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button, ThemeProvider, Typography } from '../components';
import { theme } from '../theme/theme';

const VariantsRow = () => (
  <Box
    sx={(theme) => ({
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(2),
      alignItems: 'center',
      padding: theme.spacing(4),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
    })}
  >
    <Button variant="contained">Primary</Button>
    <Button variant="outlined">Secondary</Button>
    <Button variant="text">Tertiary</Button>
    <Button variant="contained" color="error">
      Destructive
    </Button>
    <Button variant="outlined" disabled>
      Disabled
    </Button>
  </Box>
);

const meta = {
  title: 'DS / Button',
  component: Button,
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error'],
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    sx: {
      control: false,
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
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider theme={theme}>
          <Box
            sx={(theme) => ({
              padding: theme.spacing(4),
              backgroundColor: theme.palette.background.default,
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(4),
            })}
          >
            <Typography variant="h6">Button Variants</Typography>
            <VariantsRow />
          </Box>
        </ThemeProvider>
      ),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Secondary',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Tertiary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'contained',
    color: 'error',
    children: 'Destructive',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outlined',
    children: 'Disabled',
    disabled: true,
  },
};
