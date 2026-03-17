import { Box, Typography } from './mui';

export interface DSBadgeProps {
  size: 'large' | 'small';
  label?: string;
  max?: number;
}

const getDisplayLabel = (label: string | undefined, max: number) => {
  if (!label) {
    return '';
  }

  const numericValue = Number(label);

  if (Number.isNaN(numericValue)) {
    return label;
  }

  return numericValue > max ? `${max}+` : label;
};

// M3 rule: Badge uses error color tokens only
const DSBadge = ({ size, label, max = 99 }: DSBadgeProps) => {
  const isLarge = size === 'large';
  const displayLabel = isLarge ? getDisplayLabel(label, max) : '';

  return (
    <Box
      sx={(theme) => ({
        minWidth: isLarge ? theme.spacing(4) : theme.spacing(1.5),
        width: isLarge ? 'fit-content' : theme.spacing(1.5),
        maxWidth: isLarge ? theme.spacing(8.5) : theme.spacing(1.5),
        height: isLarge ? theme.spacing(4) : theme.spacing(1.5),
        paddingTop: isLarge ? theme.spacing(0.5) : theme.spacing(0),
        paddingBottom: isLarge ? theme.spacing(0.5) : theme.spacing(0),
        paddingLeft: isLarge ? theme.spacing(1) : theme.spacing(0),
        paddingRight: isLarge ? theme.spacing(1) : theme.spacing(0),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.error.main,
        borderRadius: theme.spacing(250),
        boxSizing: 'border-box',
        overflow: 'hidden',
      })}
    >
      {isLarge && displayLabel ? (
        <Typography
          variant="caption"
          sx={(theme) => ({
            color: theme.palette.error.contrastText,
            fontWeight: theme.typography.fontWeightMedium,
            lineHeight: theme.spacing(4),
            letterSpacing: theme.spacing(0.125),
            textAlign: 'center',
          })}
        >
          {displayLabel}
        </Typography>
      ) : null}
    </Box>
  );
};

export default DSBadge;
