import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  ThemeProvider,
} from '../components';
import { theme } from '../theme/theme';

const FieldWrapper = ({ children }: { children: ReactNode }) => (
  <Box
    sx={(theme) => ({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    })}
  >
    {children}
  </Box>
);

const meta = {
  title: 'DS / Text Field',
  component: TextField,
  args: {
    variant: 'outlined',
    label: 'Email',
    helperText: 'We will never share it',
    fullWidth: true,
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
    fullWidth: {
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
          <FieldWrapper>
            <Story />
          </FieldWrapper>
        </Box>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Full Name',
    helperText: 'Use your legal name',
  },
  decorators: [
    (Story) => (
      <Card elevation={1}>
        <CardContent
          sx={(theme) => ({
            padding: theme.spacing(4),
            '&:last-child': {
              paddingBottom: theme.spacing(4),
            },
          })}
        >
          <Story />
        </CardContent>
      </Card>
    ),
  ],
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Email',
    helperText: 'We will never share it',
  },
};

export const WithErrorState: Story = {
  args: {
    variant: 'outlined',
    label: 'Password',
    helperText: 'Password must be at least 8 characters',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outlined',
    label: 'Phone',
    helperText: 'Disabled field',
    disabled: true,
  },
};
