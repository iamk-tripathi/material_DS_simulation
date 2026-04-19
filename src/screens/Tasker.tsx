import { useState } from 'react';
import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  DSBadge,
  IconButton,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
  CalendarMonth,
  CallOutlined,
  Edit,
  EmailOutlined,
  Menu,
  MoreVert,
  OpenInNew,
  StarBorder,
} from '../components';
import { theme } from '../theme/theme';

interface TaskerProps {
  onOpenProfile?: () => void;
}

type TaskerItem = {
  initial: string;
  name: string;
  preview: string;
  revealActions?: boolean;
};

const taskerItems: TaskerItem[] = [
  {
    initial: 'B',
    name: 'Bill Sands',
    preview: 'Hey, Some great work you have be...',
  },
  {
    initial: 'A',
    name: 'Arindam Sanyal',
    preview: 'What drinks would you want to have to...',
  },
  {
    initial: 'S',
    name: 'Sheetal Bhise',
    preview: "Hi, I won't be comi...",
    revealActions: true,
  },
  {
    initial: 'V',
    name: 'Varsha Thakker',
    preview: "I'm still stuck in traffic. Will be late to reac...",
  },
  {
    initial: 'S',
    name: 'Swaroop Naik',
    preview: 'Samosas at my desk. Grab before they rea...',
  },
  {
    initial: 'J',
    name: 'Joan Arbo',
    preview: 'Did you get a chance to look at the dem...',
  },
];

const navigationItems = [
  {
    label: 'Calendar',
    icon: CalendarMonth,
  },
  {
    label: 'Emails',
    icon: EmailOutlined,
    badgeLabel: '3',
  },
  {
    label: 'Calls',
    icon: CallOutlined,
    badgeSize: 'small' as const,
  },
];

function TaskerAvatar({ label, size = 10 }: { label: string; size?: number }) {
  return (
    <Avatar
      sx={(currentTheme) => ({
        width: currentTheme.spacing(size),
        height: currentTheme.spacing(size),
        backgroundColor: currentTheme.palette.primary.main,
        color: currentTheme.palette.primary.contrastText,
      })}
    >
      <Typography
        variant="body1"
        sx={(currentTheme) => ({
          color: currentTheme.palette.primary.contrastText,
          fontWeight: currentTheme.typography.fontWeightMedium,
        })}
      >
        {label}
      </Typography>
    </Avatar>
  );
}

function TaskerRow({ item }: { item: TaskerItem }) {
  const row = (
    <Box
      sx={(currentTheme) => ({
        flexGrow: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: currentTheme.spacing(3),
        paddingLeft: currentTheme.spacing(4),
        paddingRight: currentTheme.spacing(4),
        paddingTop: currentTheme.spacing(2),
        paddingBottom: currentTheme.spacing(2),
        backgroundColor: currentTheme.palette.background.paper,
      })}
    >
      <TaskerAvatar label={item.initial} />
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="body1"
          sx={(currentTheme) => ({
            color: currentTheme.palette.text.primary,
          })}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          sx={(currentTheme) => ({
            color: currentTheme.palette.text.secondary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          })}
        >
          {item.preview}
        </Typography>
      </Box>
      <IconButton
        aria-label={`More actions for ${item.name}`}
        sx={(currentTheme) => ({
          color: currentTheme.palette.text.secondary,
        })}
      >
        <MoreVert />
      </IconButton>
    </Box>
  );

  if (!item.revealActions) {
    return row;
  }

  return (
    <Box
      sx={(currentTheme) => ({
        display: 'flex',
        alignItems: 'stretch',
        gap: currentTheme.spacing(1),
        backgroundColor: currentTheme.palette.background.paper,
      })}
    >
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        {row}
      </Box>
      <Box
        sx={(currentTheme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: currentTheme.spacing(1),
          paddingRight: currentTheme.spacing(4),
        })}
      >
        {[StarBorder, OpenInNew].map((Icon, index) => (
          <Box
            key={`tasker-secondary-action-${index}`}
            sx={(currentTheme) => ({
              width: currentTheme.spacing(12),
              height: currentTheme.spacing(15),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: currentTheme.spacing(25),
              backgroundColor: currentTheme.palette.secondary.light,
            })}
          >
            <IconButton
              aria-label={index === 0 ? 'Star task' : 'Open task'}
              sx={(currentTheme) => ({
                color: currentTheme.palette.secondary.main,
              })}
            >
              <Icon />
            </IconButton>
          </Box>
        ))}
        <Box
          sx={(currentTheme) => ({
            width: currentTheme.spacing(12),
            height: currentTheme.spacing(15),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: currentTheme.spacing(25),
            backgroundColor: currentTheme.palette.primary.main,
          })}
        >
          <IconButton
            aria-label="Edit task"
            sx={(currentTheme) => ({
              color: currentTheme.palette.primary.contrastText,
            })}
          >
            <Edit />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

function TaskerNavigationIcon({
  Icon,
  active,
  badgeLabel,
  badgeSize,
}: {
  Icon: typeof CalendarMonth;
  active: boolean;
  badgeLabel?: string;
  badgeSize?: 'large' | 'small';
}) {
  return (
    <Box
      sx={(currentTheme) => ({
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: currentTheme.spacing(14),
        height: currentTheme.spacing(8),
        borderRadius: currentTheme.spacing(4),
        backgroundColor: active ? currentTheme.palette.secondary.light : 'transparent',
        color: active ? currentTheme.palette.secondary.main : currentTheme.palette.text.secondary,
      })}
    >
      <Icon />
      {badgeLabel ? (
        <Box
          sx={(currentTheme) => ({
            position: 'absolute',
            top: currentTheme.spacing(1),
            right: currentTheme.spacing(1),
          })}
        >
          <DSBadge size="large" label={badgeLabel} />
        </Box>
      ) : null}
      {!badgeLabel && badgeSize === 'small' ? (
        <Box
          sx={(currentTheme) => ({
            position: 'absolute',
            top: currentTheme.spacing(1),
            right: currentTheme.spacing(1),
          })}
        >
          <DSBadge size="small" />
        </Box>
      ) : null}
    </Box>
  );
}

function Tasker({ onOpenProfile }: TaskerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={(currentTheme) => ({
          minHeight: '100vh',
          backgroundColor: currentTheme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={(currentTheme) => ({
            backgroundColor: currentTheme.palette.background.paper,
            color: currentTheme.palette.text.primary,
          })}
        >
          <Toolbar
            sx={(currentTheme) => ({
              minHeight: currentTheme.spacing(16),
              paddingLeft: currentTheme.spacing(1),
              paddingRight: currentTheme.spacing(1),
              display: 'grid',
              gridTemplateColumns: `${currentTheme.spacing(12)} 1fr ${currentTheme.spacing(12)}`,
              alignItems: 'center',
            })}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <IconButton aria-label="Open menu">
                <Menu />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              sx={(currentTheme) => ({
                color: currentTheme.palette.text.primary,
                textAlign: 'center',
              })}
            >
              Tasker
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <IconButton aria-label="Open profile" onClick={onOpenProfile}>
                <TaskerAvatar label="A" size={8} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          sx={(currentTheme) => ({
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: currentTheme.spacing(6),
            paddingBottom: currentTheme.spacing(16),
          })}
        >
          {taskerItems.map((item, index) => (
            <Box key={item.name}>
              <TaskerRow item={item} />
              {index < taskerItems.length - 1 ? (
                <Box
                  sx={(currentTheme) => ({
                    paddingLeft: currentTheme.spacing(4),
                    paddingRight: currentTheme.spacing(4),
                  })}
                >
                  <Divider />
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>

        <Paper
          elevation={0}
          sx={(currentTheme) => ({
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: currentTheme.palette.background.paper,
          })}
        >
          <BottomNavigation
            value={activeIndex}
            onChange={(_, newValue) => setActiveIndex(newValue)}
            showLabels
            sx={(currentTheme) => ({
              backgroundColor: currentTheme.palette.background.paper,
              minHeight: currentTheme.spacing(16),
            })}
          >
            {navigationItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <BottomNavigationAction
                  key={item.label}
                  label={item.label}
                  icon={
                    <TaskerNavigationIcon
                      Icon={Icon}
                      active={index === activeIndex}
                      badgeLabel={item.badgeLabel}
                      badgeSize={item.badgeSize}
                    />
                  }
                  sx={(currentTheme) => ({
                    color: currentTheme.palette.text.secondary,
                    '&.Mui-selected': {
                      color: currentTheme.palette.secondary.main,
                    },
                    '& .MuiBottomNavigationAction-label': {
                      fontSize: currentTheme.typography.caption.fontSize,
                      fontWeight: currentTheme.typography.fontWeightMedium,
                    },
                  })}
                />
              );
            })}
          </BottomNavigation>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default Tasker;
