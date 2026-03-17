import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSTooltip, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Tooltip',
  component: DSTooltip,
  tags: ['autodocs'],
  args: { variant: 'plain', type: 'single-line', title: 'Tooltip' },
  argTypes: { variant: { control: 'select', options: ['plain', 'rich'] }, type: { control: 'select', options: ['single-line', 'multi-line', 'rich'] }, title: { control: 'text' } },
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
} satisfies Meta<typeof DSTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Plain: Story = {};
export const MultiLine: Story = { args: { type: 'multi-line' } };
export const Rich: Story = { args: { variant: 'rich', type: 'rich' } };
