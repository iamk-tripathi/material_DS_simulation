import { Box, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, Typography } from './mui';
import { Info } from './icons';
import DSButton from './DSButton';

export interface DSDialogProps {
  variant?: 'basic' | 'list' | 'scrollable-list' | 'xr';
  showIcon?: boolean;
  elevation?: 'surface-container-high' | 'surface-container-highest';
  open?: boolean;
}

// M3 rule: Dialog interrupts with focused choices or information
const DSDialog = ({
  variant = 'basic',
  showIcon = false,
  elevation = 'surface-container-high',
  open = true,
}: DSDialogProps) => (
  <Dialog
    open={open}
    PaperProps={{
      sx: (theme) => ({
        backgroundColor:
          variant === 'xr'
            ? elevation === 'surface-container-highest'
              ? theme.palette.secondary.main
              : theme.palette.background.paper
            : theme.palette.background.paper,
        color:
          variant === 'xr' && elevation === 'surface-container-highest'
            ? theme.palette.secondary.contrastText
            : theme.palette.text.primary,
      }),
    }}
  >
    <DialogTitle>
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(2),
        })}
      >
        {showIcon ? <Info /> : null}
        <Typography variant="h6">Dialog title</Typography>
      </Box>
    </DialogTitle>
    <DialogContent dividers={variant === 'scrollable-list'}>
      {variant === 'list' || variant === 'scrollable-list' ? (
        <List>
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      ) : (
        <Typography variant="body2">Dialog content</Typography>
      )}
    </DialogContent>
    <DialogActions>
      <DSButton variant="text">Cancel</DSButton>
      <DSButton variant="filled">Confirm</DSButton>
    </DialogActions>
  </Dialog>
);

export default DSDialog;
