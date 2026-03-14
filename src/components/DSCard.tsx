import type { ReactNode } from 'react';
import { Card } from './mui';

export interface DSCardProps {
  variant: 'elevated' | 'outlined' | 'filled';
  children: ReactNode;
  onClick?: () => void;
}

const getFilledBackground = (theme: { palette: { secondary: { light: string } } }) => {
  const palette = theme.palette as { surfaceVariant?: string };
  return palette.surfaceVariant ?? theme.palette.secondary.light;
};

// M3 rule: never nest DSCard inside DSCard
const DSCard = ({ variant, children, onClick }: DSCardProps) => (
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
    })}
  >
    {children}
  </Card>
);

export default DSCard;
