import type { Meta, StoryObj } from '@storybook/react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  ThemeProvider,
  Home,
  Search,
  Person,
} from '../components';
import { theme } from '../theme/theme';

const navActions = (
  <>
    <BottomNavigationAction label="Home" icon={<Home />} />
    <BottomNavigationAction label="Search" icon={<Search />} />
    <BottomNavigationAction label="Profile" icon={<Person />} />
  </>
);

const navSx = (theme: typeof theme) => ({
  backgroundColor: theme.palette.background.paper,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
});

const meta = {
  title: 'DS / Navigation Bar',
  component: BottomNavigation,
  args: {
    value: 0,
    showLabels: true,
    children: navActions,
    sx: navSx,
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 2, step: 1 },
    },
    showLabels: {
      control: 'boolean',
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
} satisfies Meta<typeof BottomNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
