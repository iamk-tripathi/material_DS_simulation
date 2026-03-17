import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSNavigation, ThemeProvider, Home, Search, Person } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Navigation',
  component: DSNavigation,
  tags: ['autodocs'],
  args: { variant: 'bar', activeIndex: 0, alignment: 'top', items: [{ label: 'Home', icon: 'home' }, { label: 'Search', icon: 'search' }, { label: 'Profile', icon: 'person' }], onChange: () => undefined },
  argTypes: { variant: { control: 'select', options: ['drawer', 'rail', 'rail-expanded', 'bar', 'xr-rail', 'xr-bar'] }, activeIndex: { control: 'number' }, alignment: { control: 'select', options: ['top', 'middle'] } },
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
} satisfies Meta<typeof DSNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

const iconMap = {
  home: <Home />,
  search: <Search />,
  person: <Person />,
};

export const Bar: Story = {
  render: (args) => <DSNavigation {...args} items={args.items.map((item) => ({ ...item, icon: iconMap[item.icon as keyof typeof iconMap] }))} />,
};
export const Rail: Story = { ...Bar, args: { variant: 'rail' } };
export const RailExpanded: Story = { ...Bar, args: { variant: 'rail-expanded', alignment: 'middle' } };
export const Drawer: Story = { ...Bar, args: { variant: 'drawer' } };
export const XRBar: Story = { ...Bar, args: { variant: 'xr-bar' } };
