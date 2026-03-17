import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSMenu, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Menu',
  component: DSMenu,
  tags: ['autodocs'],
  args: { variant: 'standard', density: '0', themeVariant: 'standard', groups: '1', state: 'enabled', selected: false },
  argTypes: { variant: { control: 'select', options: ['baseline', 'standard', 'vibrant'] }, density: { control: 'select', options: ['0', '-2', '-4'] }, themeVariant: { control: 'select', options: ['standard', 'vibrant'] }, groups: { control: 'select', options: ['1', '2', '3'] }, state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'disabled', 'active', 'selected'] }, selected: { control: 'boolean' } },
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
} satisfies Meta<typeof DSMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Baseline: Story = { args: { variant: 'baseline' } };
export const Standard: Story = {};
export const Vibrant: Story = { args: { variant: 'vibrant', themeVariant: 'vibrant', groups: '3' } };
export const Active: Story = { args: { state: 'active' } };
export const Disabled: Story = { args: { state: 'disabled' } };
