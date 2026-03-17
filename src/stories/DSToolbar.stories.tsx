import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSToolbar, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Toolbar',
  component: DSToolbar,
  tags: ['autodocs'],
  args: { themeVariant: 'standard', configuration: 'docked', orientation: 'horizontal', xrElevation: 'surface-container', surfaceTier: 'surface-container', iconButtonState: 'enabled', iconButtonToggleableSelected: false, buttonToggleableSelected: false },
  argTypes: { themeVariant: { control: 'select', options: ['standard', 'vibrant'] }, configuration: { control: 'select', options: ['floating', 'docked'] }, orientation: { control: 'select', options: ['horizontal', 'vertical'] }, xrElevation: { control: 'select', options: ['surface-container', 'surface-container-high', 'surface-container-highest', 'tertiary-container'] }, surfaceTier: { control: 'select', options: ['surface-container', 'surface-container-high', 'tertiary-container'] }, iconButtonState: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'disabled'] }, iconButtonToggleableSelected: { control: 'boolean' }, buttonToggleableSelected: { control: 'boolean' } },
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
} satisfies Meta<typeof DSToolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardDocked: Story = {};
export const VibrantFloating: Story = { args: { themeVariant: 'vibrant', configuration: 'floating' } };
export const Vertical: Story = { args: { orientation: 'vertical' } };
export const XRHigh: Story = { args: { xrElevation: 'surface-container-highest', surfaceTier: 'tertiary-container' } };
export const Toggleable: Story = { args: { iconButtonToggleableSelected: true, buttonToggleableSelected: true } };
export const Disabled: Story = { args: { iconButtonState: 'disabled' } };
