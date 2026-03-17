import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSSheet, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Sheet',
  component: DSSheet,
  tags: ['autodocs'],
  args: { variant: 'bottom', modal: false, sideType: 'standard', showBack: false, layout: 'slot', open: true },
  argTypes: { variant: { control: 'select', options: ['bottom', 'side'] }, modal: { control: 'boolean' }, sideType: { control: 'select', options: ['standard', 'modal'] }, showBack: { control: 'boolean' }, layout: { control: 'select', options: ['empty', 'slot'] }, open: { control: 'boolean' } },
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
} satisfies Meta<typeof DSSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Bottom: Story = {};
export const BottomModal: Story = { args: { modal: true } };
export const Side: Story = { args: { variant: 'side' } };
export const SideModalBack: Story = { args: { variant: 'side', sideType: 'modal', showBack: true } };
