import type { Meta, StoryObj } from '@storybook/react';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  ArrowBack,
  Person,
} from '../components';
import { theme } from '../theme/theme';

const appBarSx = (theme: typeof theme) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
});

const toolbarSx = (theme: typeof theme) => ({
  minHeight: theme.spacing(16),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
});

const meta = {
  title: 'DS / App Bar',
  component: AppBar,
  args: {
    position: 'static',
    elevation: 0,
    sx: appBarSx,
    children: (
      <Toolbar sx={toolbarSx}>
        <Typography variant="h6">Dashboard</Typography>
      </Toolbar>
    ),
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
    },
    elevation: {
      control: { type: 'number', min: 0, max: 4, step: 1 },
    },
    children: {
      control: false,
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
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: (
      <Toolbar sx={toolbarSx}>
        <Typography variant="h6">Dashboard</Typography>
      </Toolbar>
    ),
  },
};

export const WithBackArrow: Story = {
  args: {
    children: (
      <Toolbar sx={toolbarSx}>
        <IconButton aria-label="Back">
          <ArrowBack />
        </IconButton>
        <Typography variant="h6">Settings</Typography>
      </Toolbar>
    ),
  },
};

export const WithAvatar: Story = {
  args: {
    children: (
      <Toolbar sx={toolbarSx}>
        <Typography
          variant="h6"
          sx={(theme) => ({
            flexGrow: 1,
          })}
        >
          Dashboard
        </Typography>
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
      </Toolbar>
    ),
  },
};
