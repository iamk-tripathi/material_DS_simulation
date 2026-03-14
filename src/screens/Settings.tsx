import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
  ArrowBack,
  ChevronRight,
  DarkMode,
  Edit,
  HelpOutline,
  Info,
  Language,
  Lock,
  MailOutline,
  Notifications,
  Person,
  Security,
} from '../components';
import { theme } from '../theme/theme';

const settingsSections = [
  {
    title: 'Account',
    items: [
      { label: 'Edit Profile', icon: Edit },
      { label: 'Change Password', icon: Lock },
      { label: 'Privacy', icon: Security },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { label: 'Notifications', icon: Notifications },
      { label: 'Dark Mode', icon: DarkMode, toggle: true },
      { label: 'Language', icon: Language },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Help Center', icon: HelpOutline },
      { label: 'Contact Us', icon: MailOutline },
      { label: 'About', icon: Info },
    ],
  },
];

function Settings() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={(theme) => ({
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
        })}
      >
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
              minHeight: theme.spacing(16),
              paddingLeft: theme.spacing(4),
              paddingRight: theme.spacing(4),
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing(2),
            })}
          >
            <IconButton aria-label="Back">
              <ArrowBack />
            </IconButton>
            <Typography variant="h6">Settings</Typography>
          </Toolbar>
        </AppBar>

        <Box
          sx={(theme) => ({
            flexGrow: 1,
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(6),
          })}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: theme.spacing(2),
            })}
          >
            <Avatar
              sx={(theme) => ({
                width: theme.spacing(16),
                height: theme.spacing(16),
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              })}
            >
              <Person />
            </Avatar>
            <Typography variant="h6">Alex Johnson</Typography>
            <Typography
              variant="body2"
              sx={(theme) => ({ color: theme.palette.text.secondary })}
            >
              alex.johnson@email.com
            </Typography>
          </Box>

          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(4),
            })}
          >
            {settingsSections.map((section, sectionIndex) => (
              <Box key={section.title}>
                <Typography
                  variant="h6"
                  sx={(theme) => ({
                    color: theme.palette.text.primary,
                    marginBottom: theme.spacing(2),
                  })}
                >
                  {section.title}
                </Typography>
                <List
                  sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing(2),
                  })}
                >
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const secondaryAction = item.toggle ? (
                      <Box
                        sx={(theme) => ({
                          display: 'flex',
                          alignItems: 'center',
                          gap: theme.spacing(2),
                          color: theme.palette.text.secondary,
                        })}
                      >
                        <Switch inputProps={{ 'aria-label': 'Dark mode' }} />
                        <ChevronRight />
                      </Box>
                    ) : (
                      <Box
                        sx={(theme) => ({
                          display: 'flex',
                          alignItems: 'center',
                          color: theme.palette.text.secondary,
                        })}
                      >
                        <ChevronRight />
                      </Box>
                    );

                    return (
                      <ListItem
                        key={item.label}
                        disableGutters
                        secondaryAction={secondaryAction}
                        sx={(theme) => ({
                          paddingLeft: theme.spacing(2),
                          paddingRight: theme.spacing(2),
                          paddingTop: theme.spacing(2),
                          paddingBottom: theme.spacing(2),
                          borderRadius: theme.shape.borderRadius,
                          backgroundColor: theme.palette.background.paper,
                        })}
                      >
                        <ListItemIcon
                          sx={(theme) => ({
                            minWidth: theme.spacing(10),
                            color: theme.palette.text.secondary,
                          })}
                        >
                          <Icon />
                        </ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            sx: (theme) => ({
                              color: theme.palette.text.primary,
                            }),
                          }}
                        />
                      </ListItem>
                    );
                  })}
                </List>
                {sectionIndex < settingsSections.length - 1 ? (
                  <Divider
                    sx={(theme) => ({
                      marginTop: theme.spacing(4),
                      marginBottom: theme.spacing(4),
                    })}
                  />
                ) : null}
              </Box>
            ))}
          </Box>

          <Box
            sx={(theme) => ({
              marginTop: theme.spacing(4),
            })}
          >
            <Button
              fullWidth
              variant="outlined"
              color="error"
              sx={(theme) => ({
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
              })}
            >
              Sign Out
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Settings;
