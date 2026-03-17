import type { ReactNode } from 'react';
import { Button } from './mui';

export interface DSButtonProps {
  variant:
    | 'filled'
    | 'outlined'
    | 'text'
    | 'tonal'
    | 'elevated'
    | 'toggle'
    | 'segmented';
  color?: 'primary' | 'error';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  shape?: 'round' | 'square';
  buttonType?: 'label' | 'icon';
  selected?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const sizePaddingMap = {
  xsmall: { paddingX: 2, paddingY: 1 },
  small: { paddingX: 3, paddingY: 1.5 },
  medium: { paddingX: 4, paddingY: 2 },
  large: { paddingX: 5, paddingY: 2.5 },
  xlarge: { paddingX: 6, paddingY: 3 },
} as const;

const muiVariantMap = {
  filled: 'contained',
  outlined: 'outlined',
  text: 'text',
  tonal: 'contained',
  elevated: 'contained',
  toggle: 'outlined',
  segmented: 'outlined',
} as const;

// M3 rule: maximum one filled button per screen
const DSButton = ({
  variant,
  color = 'primary',
  size = 'medium',
  shape = 'round',
  buttonType = 'label',
  selected = false,
  disabled,
  fullWidth,
  onClick,
  children,
}: DSButtonProps) => {
  const sizePadding = sizePaddingMap[size];

  return (
    <Button
      variant={muiVariantMap[variant]}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={(theme) => ({
        paddingLeft: theme.spacing(sizePadding.paddingX),
        paddingRight: theme.spacing(sizePadding.paddingX),
        paddingTop: theme.spacing(sizePadding.paddingY),
        paddingBottom: theme.spacing(sizePadding.paddingY),
        minWidth: buttonType === 'icon' ? theme.spacing(10) : undefined,
        minHeight: theme.spacing(10),
        borderRadius:
          shape === 'square'
            ? theme.shape.borderRadius
            : theme.spacing(5),
        backgroundColor:
          variant === 'tonal'
            ? theme.palette.secondary.main
            : variant === 'toggle' || variant === 'segmented'
              ? selected
                ? theme.palette.primary.main
                : theme.palette.background.paper
              : variant === 'elevated'
                ? theme.palette.background.paper
                : undefined,
        color:
          variant === 'tonal'
            ? theme.palette.secondary.contrastText
            : variant === 'toggle' || variant === 'segmented'
              ? selected
                ? theme.palette.primary.contrastText
                : theme.palette.text.primary
              : variant === 'elevated'
                ? theme.palette.text.primary
                : undefined,
        boxShadow:
          variant === 'elevated'
            ? theme.shadows[1]
            : undefined,
      })}
    >
      {children}
    </Button>
  );
};

export default DSButton;
