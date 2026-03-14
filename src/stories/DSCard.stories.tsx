import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSButton, DSCard, ThemeProvider, Typography } from '../components';
import { theme } from '../theme/theme';

const cardChildren = (
  <Box
    sx={(theme) => ({
      padding: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    })}
  >
    <Typography variant="h6">Quarterly Sales</Typography>
    <Typography
      variant="body2"
      sx={(theme) => ({ color: theme.palette.text.secondary })}
    >
      Track revenue growth across channels and regions with the latest updates.
    </Typography>
    <DSButton variant="text">View Details</DSButton>
  </Box>
);

const meta = {
  title: 'DS / Card',
  component: DSCard,
  tags: ['autodocs'],
  args: {
    variant: 'elevated',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
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
} satisfies Meta<typeof DSCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: cardChildren,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: cardChildren,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: cardChildren,
  },
};
