import { Box, CircularProgress, LinearProgress } from './mui';

export interface DSProgressIndicatorProps {
  variant?:
    | 'linear-determinate'
    | 'linear-indeterminate'
    | 'circular-determinate'
    | 'circular-indeterminate'
    | 'loading';
  progressStyle?: 'flat' | 'wave';
  thickness?: '4-dp' | '8-dp';
  progress?: number;
  step?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
  showContainer?: boolean;
}

// M3 rule: Progress indicators communicate ongoing status or completion
const DSProgressIndicator = ({
  variant = 'linear-determinate',
  progressStyle = 'flat',
  thickness = '4-dp',
  progress = 50,
  step = '1',
  showContainer = false,
}: DSProgressIndicatorProps) => {
  const content =
    variant === 'circular-determinate' || variant === 'circular-indeterminate' ? (
      <CircularProgress
        variant={variant === 'circular-determinate' ? 'determinate' : 'indeterminate'}
        value={progress}
        size={thickness === '8-dp' ? 64 : 48}
        thickness={thickness === '8-dp' ? 8 : 4}
      />
    ) : variant === 'loading' ? (
      <CircularProgress variant="indeterminate" size={48 + Number(step) * 2} />
    ) : (
      <LinearProgress
        variant={variant === 'linear-determinate' ? 'determinate' : 'indeterminate'}
        value={progress}
        sx={(theme) => ({
          width: theme.spacing(40),
          height: thickness === '8-dp' ? theme.spacing(2) : theme.spacing(1),
          borderRadius: theme.spacing(progressStyle === 'wave' ? 2 : 1),
        })}
      />
    );

  if (!showContainer) {
    return content;
  }

  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      {content}
    </Box>
  );
};

export default DSProgressIndicator;
