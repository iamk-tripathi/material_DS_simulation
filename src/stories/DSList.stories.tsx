import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSList, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / List',
  component: DSList,
  tags: ['autodocs'],
  args: { variant: 'standard', density: '0', condition: '2-line', leading: 'icon', trailing: 'icon', alignment: 'middle', state: 'enabled', selected: false, showOverline: false, showSupportingText: true, accordion: 'collapsed', swipeState: 'default', multiLine: false },
  argTypes: { variant: { control: 'select', options: ['baseline', 'standard', 'segmented-filled', 'expandable', 'draggable', 'swipable-standard', 'swipable-segmented'] }, density: { control: 'select', options: ['0', '-2', '-4'] }, condition: { control: 'select', options: ['1-line', '2-line', '3-line+'] }, leading: { control: 'select', options: ['none', 'monogram', 'icon', 'image', 'video', 'check-box', 'radio-button', 'switch', 'avatar', 'indent', 'icon-button', 'slot', 'type11'] }, trailing: { control: 'select', options: ['none', 'icon', 'check-box', 'radio-button', 'switch', 'trailing-text-only', 'icon-button', 'accordion-button', 'slot'] }, alignment: { control: 'select', options: ['middle', 'top'] }, state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'dragged', 'disabled'] }, selected: { control: 'boolean' }, showOverline: { control: 'boolean' }, showSupportingText: { control: 'boolean' }, accordion: { control: 'select', options: ['collapsed', 'expanded'] }, swipeState: { control: 'select', options: ['default', 'initiate-reveal', 'revealed', 'swipe-action'] }, multiLine: { control: 'boolean' } },
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
} satisfies Meta<typeof DSList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
export const Baseline: Story = { args: { variant: 'baseline' } };
export const SegmentedFilled: Story = { args: { variant: 'segmented-filled', selected: true } };
export const Expandable: Story = { args: { variant: 'expandable', accordion: 'expanded' } };
export const SwipeRevealed: Story = { args: { variant: 'swipable-standard', swipeState: 'revealed' } };
export const Dense: Story = { args: { density: '-4' } };
export const TopAligned: Story = { args: { alignment: 'top', showOverline: true, condition: '3-line+' } };
export const Disabled: Story = { args: { state: 'disabled' } };
