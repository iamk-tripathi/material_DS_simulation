import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSAvatar, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Avatar',
  component: DSAvatar,
  tags: ['autodocs'],
  args: { variant: 'generic', style: 'avatar', index: 1, label: 'Alex' },
  argTypes: { variant: { control: 'select', options: ['generic', 'three-dimensional'] }, style: { control: 'select', options: ['avatar', 'monogram', 'check'] }, index: { control: 'number' }, label: { control: 'text' } },
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
} satisfies Meta<typeof DSAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Generic: Story = {};
export const Monogram: Story = { args: { style: 'monogram' } };
export const CheckAvatar: Story = { args: { style: 'check' } };
export const ThreeDimensional: Story = { args: { variant: 'three-dimensional', index: 12 } };
