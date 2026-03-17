import { Box, Drawer, IconButton, Paper, Typography } from './mui';
import { ArrowBack } from './icons';

export interface DSSheetProps {
  variant?: 'bottom' | 'side';
  modal?: boolean;
  sideType?: 'standard' | 'modal';
  showBack?: boolean;
  layout?: 'empty' | 'slot';
  open?: boolean;
}

// M3 rule: Sheet presents supplementary content anchored to an edge
const DSSheet = ({
  variant = 'bottom',
  modal = false,
  sideType = 'standard',
  showBack = false,
  layout = 'slot',
  open = true,
}: DSSheetProps) => (
  <Drawer
    anchor={variant === 'bottom' ? 'bottom' : 'right'}
    open={open}
    variant={modal || sideType === 'modal' ? 'temporary' : 'persistent'}
  >
    <Paper
      sx={(theme) => ({
        width: variant === 'side' ? theme.spacing(72) : undefined,
        minHeight: variant === 'bottom' ? theme.spacing(40) : '100%',
        padding: theme.spacing(4),
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(2),
          marginBottom: theme.spacing(3),
        })}
      >
        {showBack ? (
          <IconButton aria-label="Back">
            <ArrowBack />
          </IconButton>
        ) : null}
        <Typography variant="h6">{variant === 'bottom' ? 'Bottom sheet' : 'Side sheet'}</Typography>
      </Box>
      {layout === 'slot' ? <Typography variant="body2">Sheet content slot</Typography> : null}
    </Paper>
  </Drawer>
);

export default DSSheet;
