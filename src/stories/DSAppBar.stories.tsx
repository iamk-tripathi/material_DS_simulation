import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, Box, DSAppBar, ThemeProvider, Person } from '../components';
import { theme } from '../theme/theme';

const avatarElement = (
  <Avatar
    sx={(theme) => ({
      width: theme.spacing(10),
      height: theme.spacing(10),
      bgcolor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    })}
  >
    <Person />
  </Avatar>
);

const meta = {
  title: 'DS / App Bar',
  component: DSAppBar,
  tags: ['autodocs'],
  args: {
    size: 'small',
    title: 'Screen Title',
    showBackArrow: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    title: {
      control: 'text',
    },
    showBackArrow: {
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
} satisfies Meta<typeof DSAppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    title: 'Dashboard',
    showBackArrow: false,
  },
};

export const WithBackArrow: Story = {
  args: {
    size: 'small',
    title: 'Settings',
    showBackArrow: true,
  },
};

export const WithAvatar: Story = {
  args: {
    size: 'small',
    title: 'Dashboard',
    rightElement: avatarElement,
  },
};
