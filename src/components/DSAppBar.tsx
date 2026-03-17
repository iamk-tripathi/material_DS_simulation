import type { ReactNode } from 'react';
import { AppBar, Box, IconButton, Paper, Toolbar, Typography } from './mui';
import { ArrowBack, MoreVert } from './icons';

export interface DSAppBarProps {
  size: 'small' | 'medium' | 'large';
  barType?: 'top' | 'bottom';
  title: string;
  showBackArrow?: boolean;
  onBackClick?: () => void;
  rightElement?: ReactNode;
  iconsCount?: '1' | '2' | '3' | '4';
}

const sizeToHeight = {
  small: 16,
  medium: 28,
  large: 38,
} as const;

const DSAppBar = ({
  size,
  barType = 'top',
  title,
  showBackArrow,
  onBackClick,
  rightElement,
  iconsCount = '3',
}: DSAppBarProps) => {
  const commonStyles = {
    backgroundColor: (theme: { palette: { background: { paper: string } } }) =>
      theme.palette.background.paper,
    color: (theme: { palette: { text: { primary: string } } }) =>
      theme.palette.text.primary,
  };

  if (barType === 'bottom') {
    return (
      <Paper
        elevation={1}
        sx={(theme) => ({
          backgroundColor: commonStyles.backgroundColor(theme),
          color: commonStyles.color(theme),
        })}
      >
        <Toolbar
          sx={(theme) => ({
            minHeight: theme.spacing(sizeToHeight.small),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          })}
        >
          <Typography variant="body1">{title}</Typography>
          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing(2),
            })}
          >
            {Array.from({ length: Number(iconsCount) }).map((_, index) => (
              <IconButton key={`bottom-app-bar-icon-${index}`} aria-label={`Action ${index + 1}`}>
                <MoreVert />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Paper>
    );
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={(theme) => ({
        backgroundColor: commonStyles.backgroundColor(theme),
        color: commonStyles.color(theme),
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
          sx={{
            flexGrow: 1,
          }}
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
};

export default DSAppBar;
