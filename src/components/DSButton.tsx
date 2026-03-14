import type { ReactNode } from 'react';
import { Button } from './mui';

export interface DSButtonProps {
  variant: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'error';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const variantMap = {
  filled: 'contained',
  outlined: 'outlined',
  text: 'text',
} as const;

// M3 rule: maximum one filled button per screen
const DSButton = ({
  variant,
  color = 'primary',
  disabled,
  fullWidth,
  onClick,
  children,
}: DSButtonProps) => (
  <Button
    variant={variantMap[variant]}
    color={color}
    disabled={disabled}
    fullWidth={fullWidth}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default DSButton;
