import { Box, Card, Typography } from './mui';

export interface DSCarouselProps {
  variant?: 'standard' | 'full-screen';
  context?: 'mobile' | 'tablet';
  layout?: 'hero' | 'center-aligned-hero' | 'multi-browse' | 'uncontained' | 'multi-aspect-ratio' | 'full-screen';
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16' | '3:4';
}

// M3 rule: Carousel surfaces browsable media or content collections
const DSCarousel = ({
  variant = 'standard',
  context = 'mobile',
  layout = 'hero',
  aspectRatio = '16:9',
}: DSCarouselProps) => (
  <Box
    sx={(theme) => ({
      display: 'flex',
      gap: theme.spacing(3),
      overflowX: 'auto',
      width: variant === 'full-screen' ? theme.spacing(96) : theme.spacing(72),
    })}
  >
    {Array.from({ length: context === 'tablet' ? 4 : 3 }).map((_, index) => (
      <Card
        key={`carousel-card-${index}`}
        sx={(theme) => ({
          minWidth: layout === 'multi-browse' ? theme.spacing(28) : theme.spacing(40),
          minHeight: variant === 'full-screen' ? theme.spacing(64) : theme.spacing(32),
          padding: theme.spacing(3),
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Typography variant="body1">{layout}</Typography>
        <Typography variant="caption">{aspectRatio}</Typography>
      </Card>
    ))}
  </Box>
);

export default DSCarousel;
