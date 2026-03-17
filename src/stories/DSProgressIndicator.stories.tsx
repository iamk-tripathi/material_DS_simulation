import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSProgressIndicator, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Progress Indicator',
  component: DSProgressIndicator,
  tags: ['autodocs'],
  args: { variant: 'linear-determinate', progressStyle: 'flat', thickness: '4-dp', progress: 50, step: '1', showContainer: false },
  argTypes: { variant: { control: 'select', options: ['linear-determinate', 'linear-indeterminate', 'circular-determinate', 'circular-indeterminate', 'loading'] }, progressStyle: { control: 'select', options: ['flat', 'wave'] }, thickness: { control: 'select', options: ['4-dp', '8-dp'] }, progress: { control: 'number' }, step: { control: 'select', options: ['0', '1', '2', '3', '4', '5', '6', '7'] }, showContainer: { control: 'boolean' } },
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
} satisfies Meta<typeof DSProgressIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LinearDeterminate: Story = {};
export const LinearIndeterminate: Story = { args: { variant: 'linear-indeterminate' } };
export const CircularDeterminate: Story = { args: { variant: 'circular-determinate' } };
export const CircularIndeterminate: Story = { args: { variant: 'circular-indeterminate' } };
export const Loading: Story = { args: { variant: 'loading', showContainer: true } };
export const Wave: Story = { args: { progressStyle: 'wave', thickness: '8-dp' } };
