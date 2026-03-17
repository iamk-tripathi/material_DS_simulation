import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSDivider, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Divider',
  component: DSDivider,
  tags: ['autodocs'],
  args: { orientation: 'horizontal', type: 'full-width' },
  argTypes: { orientation: { control: 'select', options: ['horizontal', 'vertical'] }, type: { control: 'select', options: ['full-width', 'inset', 'middle-inset', 'divider-with-subhead'] }, label: { control: 'text' } },
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
} satisfies Meta<typeof DSDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};
export const Inset: Story = { args: { type: 'inset' } };
export const MiddleInset: Story = { args: { type: 'middle-inset' } };
export const WithSubhead: Story = { args: { type: 'divider-with-subhead', label: 'Section' } };
export const Vertical: Story = { args: { orientation: 'vertical', type: 'full-width' } };
