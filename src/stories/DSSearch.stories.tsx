import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSSearch, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Search',
  component: DSSearch,
  tags: ['autodocs'],
  args: { variant: 'bar', state: 'enabled', showAvatar: false, configuration: 'input-text', value: '' },
  argTypes: { variant: { control: 'select', options: ['bar', 'docked', 'full-screen'] }, state: { control: 'select', options: ['enabled', 'hovered', 'pressed'] }, showAvatar: { control: 'boolean' }, configuration: { control: 'select', options: ['input-text', 'supporting-text'] }, value: { control: 'text' } },
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
} satisfies Meta<typeof DSSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Bar: Story = {};
export const DockedSupportingText: Story = { args: { variant: 'docked', configuration: 'supporting-text' } };
export const FullScreen: Story = { args: { variant: 'full-screen' } };
export const WithAvatar: Story = { args: { showAvatar: true } };
export const Hovered: Story = { args: { state: 'hovered' } };
export const Pressed: Story = { args: { state: 'pressed' } };
