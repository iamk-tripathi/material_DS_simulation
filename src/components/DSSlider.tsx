import { Slider } from './mui';

export interface DSSliderProps {
  variant?: 'standard' | 'centered' | 'range';
  orientation?: 'horizontal' | 'vertical';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  state?: 'enabled' | 'hovered' | 'pressed' | 'disabled';
  value?: number | number[];
}

const thumbSizeMap = {
  xsmall: 3,
  small: 4,
  medium: 5,
  large: 6,
  xlarge: 7,
} as const;

// M3 rule: Slider adjusts a value along a constrained range
const DSSlider = ({
  variant = 'standard',
  orientation = 'horizontal',
  size = 'medium',
  state = 'enabled',
  value,
}: DSSliderProps) => {
  const resolvedValue =
    value ??
    (variant === 'range' ? [-50, 50] : variant === 'centered' ? 0 : 50);

  return (
    <Slider
      orientation={orientation}
      disabled={state === 'disabled'}
      value={resolvedValue}
      min={variant === 'centered' || variant === 'range' ? -100 : 0}
      max={100}
      marks={variant !== 'range'}
      sx={(theme) => ({
        width: orientation === 'horizontal' ? theme.spacing(40) : undefined,
        height: orientation === 'vertical' ? theme.spacing(40) : undefined,
        '& .MuiSlider-thumb': {
          width: theme.spacing(thumbSizeMap[size]),
          height: theme.spacing(thumbSizeMap[size]),
        },
        '& .MuiSlider-track': {
          backgroundColor:
            state === 'pressed'
              ? theme.palette.primary.dark
              : theme.palette.primary.main,
        },
      })}
    />
  );
};

export default DSSlider;
