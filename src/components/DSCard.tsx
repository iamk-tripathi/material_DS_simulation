import type { ReactNode } from 'react';
import { Box, Card } from './mui';

export interface DSCardProps {
  variant: 'elevated' | 'outlined' | 'filled';
  orientation?: 'stacked' | 'horizontal';
  layout?: 'media-text' | 'slot';
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged';
  media?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

const getFilledBackground = (theme: { palette: { secondary: { light: string } } }) => {
  const palette = theme.palette as { surfaceVariant?: string };
  return palette.surfaceVariant ?? theme.palette.secondary.light;
};

// M3 rule: never nest DSCard inside DSCard
const DSCard = ({
  variant,
  orientation = 'stacked',
  layout = 'slot',
  state = 'enabled',
  media,
  children,
  onClick,
}: DSCardProps) => (
  <Card
    elevation={variant === 'elevated' ? 1 : 0}
    variant={variant === 'outlined' ? 'outlined' : 'elevation'}
    onClick={onClick}
    sx={(theme) => ({
      backgroundColor:
        variant === 'filled'
          ? getFilledBackground(theme)
          : theme.palette.background.paper,
      cursor: onClick ? 'pointer' : 'default',
      outline:
        state === 'focused'
          ? `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`
          : undefined,
      opacity: state === 'dragged' ? 0.9 : 1,
      transform: state === 'pressed' ? 'scale(0.99)' : undefined,
    })}
  >
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        gap: theme.spacing(3),
        padding: theme.spacing(4),
        alignItems: orientation === 'horizontal' ? 'center' : 'stretch',
      })}
    >
      {layout === 'media-text' ? (
        <Box
          sx={(theme) => ({
            minWidth:
              orientation === 'horizontal'
                ? theme.spacing(20)
                : '100%',
            minHeight: theme.spacing(20),
            backgroundColor: theme.palette.secondary.light,
            borderRadius: theme.shape.borderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          {media}
        </Box>
      ) : null}
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  </Card>
);

export default DSCard;
