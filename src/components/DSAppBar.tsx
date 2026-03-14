import type { ReactNode } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from './mui';
import { ArrowBack } from './icons';

export interface DSAppBarProps {
  size: 'small' | 'medium' | 'large';
  title: string;
  showBackArrow?: boolean;
  onBackClick?: () => void;
  rightElement?: ReactNode;
}

const sizeToHeight = {
  small: 16,
  medium: 28,
  large: 38,
} as const;

const DSAppBar = ({
  size,
  title,
  showBackArrow,
  onBackClick,
  rightElement,
}: DSAppBarProps) => (
  <AppBar
    position="static"
    elevation={0}
    sx={(theme) => ({
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    })}
  >
    <Toolbar
      sx={(theme) => ({
        minHeight: theme.spacing(sizeToHeight[size]),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
      })}
    >
      {showBackArrow ? (
        <IconButton aria-label="Back" onClick={onBackClick}>
          <ArrowBack />
        </IconButton>
      ) : null}
      <Typography
        variant="h6"
        sx={(theme) => ({
          flexGrow: 1,
        })}
      >
        {title}
      </Typography>
      {rightElement ? (
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2),
          })}
        >
          {rightElement}
        </Box>
      ) : null}
    </Toolbar>
  </AppBar>
);

export default DSAppBar;
