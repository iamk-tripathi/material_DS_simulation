import { Box, List, ListItem, ListItemText, Paper, Typography } from './mui';

export interface DSMenuProps {
  variant?: 'baseline' | 'standard' | 'vibrant';
  density?: '0' | '-2' | '-4';
  themeVariant?: 'standard' | 'vibrant';
  groups?: '1' | '2' | '3';
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled' | 'active' | 'selected';
  selected?: boolean;
}

// M3 rule: Menu presents a transient list of contextual actions
const DSMenu = ({
  variant = 'standard',
  density = '0',
  themeVariant = 'standard',
  groups = '1',
  state = 'enabled',
  selected = false,
}: DSMenuProps) => (
  <Paper
    sx={(theme) => ({
      width: theme.spacing(56),
      backgroundColor:
        themeVariant === 'vibrant'
          ? theme.palette.secondary.main
          : theme.palette.background.paper,
      color:
        themeVariant === 'vibrant'
          ? theme.palette.secondary.contrastText
          : theme.palette.text.primary,
    })}
  >
    <List>
      {Array.from({ length: Number(groups) }).map((_, groupIndex) => (
        <Box key={`menu-group-${groupIndex}`}>
          <ListItem
            selected={selected || state === 'active' || state === 'selected'}
            sx={(theme) => ({
              paddingTop: density === '-4' ? theme.spacing(1) : density === '-2' ? theme.spacing(1.5) : theme.spacing(2),
              paddingBottom: density === '-4' ? theme.spacing(1) : density === '-2' ? theme.spacing(1.5) : theme.spacing(2),
              opacity: state === 'disabled' ? 0.5 : 1,
            })}
          >
            <ListItemText
              primary={`${variant} menu item ${groupIndex + 1}`}
              secondary={groupIndex === 0 ? <Typography variant="caption">Group {groupIndex + 1}</Typography> : undefined}
            />
          </ListItem>
        </Box>
      ))}
    </List>
  </Paper>
);

export default DSMenu;
