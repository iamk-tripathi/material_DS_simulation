import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSDateTimePicker, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Date Time Picker',
  component: DSDateTimePicker,
  tags: ['autodocs'],
  args: { variant: 'modal-date', type: 'day', format: '12-hour', orientation: 'vertical' },
  argTypes: { variant: { control: 'select', options: ['modal-date', 'input-date', 'docked-input-date', 'dial', 'keyboard'] }, type: { control: 'select', options: ['day', 'year', 'full-screen-range', 'single-input', 'range', 'month'] }, format: { control: 'select', options: ['12-hour', '24-hour'] }, orientation: { control: 'select', options: ['vertical', 'horizontal'] } },
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
} satisfies Meta<typeof DSDateTimePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalDay: Story = {};
export const InputRange: Story = { args: { variant: 'input-date', type: 'range' } };
export const DockedYear: Story = { args: { variant: 'docked-input-date', type: 'year' } };
export const Dial24: Story = { args: { variant: 'dial', format: '24-hour' } };
export const Keyboard12: Story = { args: { variant: 'keyboard', format: '12-hour', orientation: 'horizontal' } };
