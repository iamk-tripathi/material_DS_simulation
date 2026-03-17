import { Box, Divider, Typography } from './mui';

export interface DSDividerProps {
  orientation?: 'horizontal' | 'vertical';
  type?: 'full-width' | 'inset' | 'middle-inset' | 'divider-with-subhead';
  label?: string;
}

// M3 rule: Divider uses layout separation only, never as decoration
const DSDivider = ({
  orientation = 'horizontal',
  type = 'full-width',
  label,
}: DSDividerProps) => {
  const divider = (
    <Divider
      orientation={orientation}
      flexItem={orientation === 'vertical'}
      sx={(theme) => ({
        marginLeft:
          type === 'inset'
            ? theme.spacing(4)
            : type === 'middle-inset'
              ? theme.spacing(2)
              : theme.spacing(0),
        marginRight:
          type === 'middle-inset'
            ? theme.spacing(2)
            : theme.spacing(0),
      })}
    />
  );

  if (orientation === 'horizontal' && type === 'divider-with-subhead' && label) {
    return (
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(2),
        })}
      >
        <Typography variant="body2">{label}</Typography>
        {divider}
      </Box>
    );
  }

  return divider;
};

export default DSDivider;
