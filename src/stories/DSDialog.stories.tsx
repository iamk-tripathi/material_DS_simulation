import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSDialog, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Dialog',
  component: DSDialog,
  tags: ['autodocs'],
  args: { variant: 'basic', showIcon: false, elevation: 'surface-container-high', open: true },
  argTypes: { variant: { control: 'select', options: ['basic', 'list', 'scrollable-list', 'xr'] }, showIcon: { control: 'boolean' }, elevation: { control: 'select', options: ['surface-container-high', 'surface-container-highest'] }, open: { control: 'boolean' } },
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
} satisfies Meta<typeof DSDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const ListDialog: Story = { args: { variant: 'list', showIcon: true } };
export const ScrollableList: Story = { args: { variant: 'scrollable-list' } };
export const XR: Story = { args: { variant: 'xr', elevation: 'surface-container-highest', showIcon: true } };
