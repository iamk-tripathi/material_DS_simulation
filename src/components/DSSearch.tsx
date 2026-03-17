import { Avatar, Box, TextField, Typography } from './mui';
import { Search } from './icons';

export interface DSSearchProps {
  variant?: 'bar' | 'docked' | 'full-screen';
  state?: 'enabled' | 'hovered' | 'pressed';
  showAvatar?: boolean;
  configuration?: 'input-text' | 'supporting-text';
  value?: string;
}

// M3 rule: Search combines query entry with progressive context
const DSSearch = ({
  variant = 'bar',
  state = 'enabled',
  showAvatar = false,
  configuration = 'input-text',
  value = '',
}: DSSearchProps) => (
  <Box
    sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      width: variant === 'full-screen' ? theme.spacing(80) : theme.spacing(60),
      padding: theme.spacing(4),
      backgroundColor:
        variant === 'docked'
          ? theme.palette.background.paper
          : undefined,
    })}
  >
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
      })}
    >
      {showAvatar ? <Avatar>S</Avatar> : <Search />}
      <TextField
        fullWidth
        variant="outlined"
        value={value}
        placeholder="Search"
        sx={(theme) => ({
          '& .MuiInputBase-root': {
            backgroundColor:
              state === 'hovered'
                ? theme.palette.action.hover
                : state === 'pressed'
                  ? theme.palette.action.selected
                  : undefined,
          },
        })}
      />
    </Box>
    {configuration === 'supporting-text' ? (
      <Typography variant="body2">Supporting text</Typography>
    ) : null}
  </Box>
);

export default DSSearch;
