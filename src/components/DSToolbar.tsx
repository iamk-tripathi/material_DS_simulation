import { Box, IconButton, Paper } from './mui';
import { Edit, Favorite, Search } from './icons';
import DSButton from './DSButton';

export interface DSToolbarProps {
  themeVariant?: 'standard' | 'vibrant';
  configuration?: 'floating' | 'docked';
  orientation?: 'horizontal' | 'vertical';
  xrElevation?: 'surface-container' | 'surface-container-high' | 'surface-container-highest' | 'tertiary-container';
  surfaceTier?: 'surface-container' | 'surface-container-high' | 'tertiary-container';
  iconButtonState?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled';
  iconButtonToggleableSelected?: boolean;
  buttonToggleableSelected?: boolean;
}

// M3 rule: Toolbar groups related tools and quick actions
const DSToolbar = ({
  themeVariant = 'standard',
  configuration = 'docked',
  orientation = 'horizontal',
  xrElevation = 'surface-container',
  surfaceTier = 'surface-container',
  iconButtonState = 'enabled',
  iconButtonToggleableSelected = false,
  buttonToggleableSelected = false,
}: DSToolbarProps) => (
  <Paper
    elevation={configuration === 'floating' ? 1 : 0}
    sx={(theme) => ({
      display: 'inline-flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: theme.spacing(2),
      padding: theme.spacing(3),
      backgroundColor:
        themeVariant === 'vibrant' || xrElevation === 'tertiary-container' || surfaceTier === 'tertiary-container'
          ? theme.palette.secondary.main
          : theme.palette.background.paper,
      color:
        themeVariant === 'vibrant' || xrElevation === 'tertiary-container' || surfaceTier === 'tertiary-container'
          ? theme.palette.secondary.contrastText
          : theme.palette.text.primary,
      opacity: iconButtonState === 'disabled' ? 0.5 : 1,
    })}
  >
    <IconButton color={iconButtonToggleableSelected ? 'primary' : 'default'}>
      <Search />
    </IconButton>
    <IconButton>
      <Edit />
    </IconButton>
    <IconButton color={iconButtonToggleableSelected ? 'primary' : 'default'}>
      <Favorite />
    </IconButton>
    <Box>
      <DSButton variant={buttonToggleableSelected ? 'toggle' : 'text'} selected={buttonToggleableSelected}>Action</DSButton>
    </Box>
  </Paper>
);

export default DSToolbar;
