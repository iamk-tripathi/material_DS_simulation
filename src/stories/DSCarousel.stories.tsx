import type { Meta, StoryObj } from '@storybook/react';
import { Box, DSCarousel, ThemeProvider } from '../components';
import { theme } from '../theme/theme';

const meta = {
  title: 'DS / Carousel',
  component: DSCarousel,
  tags: ['autodocs'],
  args: { variant: 'standard', context: 'mobile', layout: 'hero', aspectRatio: '16:9' },
  argTypes: { variant: { control: 'select', options: ['standard', 'full-screen'] }, context: { control: 'select', options: ['mobile', 'tablet'] }, layout: { control: 'select', options: ['hero', 'center-aligned-hero', 'multi-browse', 'uncontained', 'multi-aspect-ratio', 'full-screen'] }, aspectRatio: { control: 'select', options: ['16:9', '4:3', '1:1', '9:16', '3:4'] } },
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
} satisfies Meta<typeof DSCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroMobile: Story = {};
export const CenterAlignedHero: Story = { args: { layout: 'center-aligned-hero' } };
export const MultiBrowseTablet: Story = { args: { layout: 'multi-browse', context: 'tablet' } };
export const FullScreen: Story = { args: { variant: 'full-screen', layout: 'full-screen' } };
export const MultiAspectRatio: Story = { args: { layout: 'multi-aspect-ratio', aspectRatio: '3:4' } };
