import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSSlider, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Slider',
  component: DSSlider,
  tags: ['autodocs'],
  args: { variant: 'standard', orientation: 'horizontal', size: 'medium', state: 'enabled' },
  argTypes: { variant: { control: 'select', options: ['standard', 'centered', 'range'] }, orientation: { control: 'select', options: ['horizontal', 'vertical'] }, size: { control: 'select', options: ['xsmall', 'small', 'medium', 'large', 'xlarge'] }, state: { control: 'select', options: ['enabled', 'hovered', 'pressed', 'disabled'] } },
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
} satisfies Meta<typeof DSSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
export const Centered: Story = { args: { variant: 'centered' } };
export const Range: Story = { args: { variant: 'range' } };
export const Vertical: Story = { args: { orientation: 'vertical' } };
export const Hovered: Story = { args: { state: 'hovered' } };
export const Pressed: Story = { args: { state: 'pressed' } };
export const Disabled: Story = { args: { state: 'disabled' } };
