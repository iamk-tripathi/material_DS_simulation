import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  DSNavigationBar,
  ThemeProvider,
  Home,
  Search,
  Person,
  Favorite,
  Settings,
} from '../components';
import { theme } from '../theme/theme';

const iconMap: Record<string, ReactNode> = {
  home: <Home />,
  search: <Search />,
  person: <Person />,
  favorite: <Favorite />,
  settings: <Settings />,
};

const resolveIcon = (icon: ReactNode) =>
  typeof icon === 'string' ? iconMap[icon] ?? icon : icon;

const meta = {
  title: 'DS / Navigation Bar',
  component: DSNavigationBar,
  tags: ['autodocs'],
  args: {
    activeIndex: 0,
    items: [
      { label: 'Home', icon: 'home' },
      { label: 'Search', icon: 'search' },
      { label: 'Profile', icon: 'person' },
    ],
    onChange: () => undefined,
  },
  render: (args) => (
    <DSNavigationBar
      {...args}
      items={args.items.map((item) => ({
        ...item,
        icon: resolveIcon(item.icon),
      }))}
    />
  ),
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
} satisfies Meta<typeof DSNavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FiveItems: Story = {
  args: {
    items: [
      { label: 'Home', icon: 'home' },
      { label: 'Search', icon: 'search' },
      { label: 'Profile', icon: 'person' },
      { label: 'Favorites', icon: 'favorite' },
      { label: 'Settings', icon: 'settings' },
    ],
  },
};
