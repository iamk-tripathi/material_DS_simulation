import profileAvatar from '../assets/profile-avatar-52767-23927.svg';
import {
  Box,
  ChevronRight,
  DarkMode,
  DSDivider,
  DSAppBar,
  DSButton,
  DSCard,
  DSList,
  HelpOutline,
  InfoOutlined,
  Language,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  LockOutlined,
  ManageAccounts,
  NotificationsNone,
  PersonOutline,
  PrivacyTip,
  Security,
  Switch,
  SupportAgent,
  ThemeProvider,
  Typography,
} from '../components';
import { theme } from '../theme/theme';

interface ProfileProps {
  onBackClick?: () => void;
}

type SettingsItem = {
  label: string;
  icon: typeof PersonOutline;
  secondaryText?: string;
  trailing: 'chevron' | 'switch';
  switchSelected?: boolean;
};

type SettingsSection = {
  title: string;
  items: SettingsItem[];
};

const profileStats = [
  { label: 'Projects', value: '24' },
  { label: 'Reviews', value: '118' },
  { label: 'Teams', value: '6' },
] as const;

const settingsSections: SettingsSection[] = [
  {
    title: 'Account',
    items: [
      { label: 'Edit Personal Info', icon: PersonOutline, trailing: 'chevron' },
      { label: 'Change Password', icon: LockOutlined, trailing: 'chevron' },
      { label: 'Linked Accounts', icon: Link, trailing: 'chevron' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { label: 'Notifications', icon: NotificationsNone, trailing: 'switch', switchSelected: false },
      { label: 'Dark Mode', icon: DarkMode, trailing: 'switch', switchSelected: false },
      { label: 'Language', icon: Language, trailing: 'chevron', secondaryText: 'English' },
    ],
  },
  {
    title: 'Privacy & Security',
    items: [
      { label: 'Two-Factor Authentication', icon: Security, trailing: 'switch', switchSelected: true },
      { label: 'Privacy Settings', icon: PrivacyTip, trailing: 'chevron' },
      { label: 'Data & Permissions', icon: ManageAccounts, trailing: 'chevron' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Help Center', icon: HelpOutline, trailing: 'chevron' },
      { label: 'Contact Support', icon: SupportAgent, trailing: 'chevron' },
      { label: 'About the App', icon: InfoOutlined, trailing: 'chevron', secondaryText: 'v2.4.1' },
    ],
  },
];

function ProfilePlaceholderAvatar() {
  return (
    <Box
      sx={(currentTheme) => ({
        width: currentTheme.spacing(20),
        height: currentTheme.spacing(20),
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: currentTheme.shadows[1],
        display: 'block',
      })}
      component="img"
      src={profileAvatar}
      alt="Profile avatar"
    />
  );
}

const renderTrailing = (item: SettingsItem) => {
  if (item.trailing === 'switch') {
    return (
      <Box
        sx={(currentTheme) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginLeft: currentTheme.spacing(2),
        })}
      >
        <Switch
          defaultChecked={item.switchSelected}
          inputProps={{ 'aria-label': item.label }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={(currentTheme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginLeft: currentTheme.spacing(2),
        color: currentTheme.palette.text.secondary,
      })}
    >
      <ChevronRight />
    </Box>
  );
};

function Profile({ onBackClick }: ProfileProps) {
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
        <DSAppBar size="small" showBackArrow title="Profile" onBackClick={onBackClick} />

        <Box
          sx={(currentTheme) => ({
            flexGrow: 1,
            paddingLeft: currentTheme.spacing(3),
            paddingRight: currentTheme.spacing(3),
            paddingTop: currentTheme.spacing(4),
            paddingBottom: currentTheme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            gap: currentTheme.spacing(6),
          })}
        >
          <Box
            sx={(currentTheme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: currentTheme.spacing(4),
            })}
          >
            <ProfilePlaceholderAvatar />

            <Box
              sx={(currentTheme) => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: currentTheme.spacing(1),
              })}
            >
              <Typography
                variant="h5"
                sx={(currentTheme) => ({
                  color: currentTheme.palette.text.primary,
                  textAlign: 'center',
                })}
              >
                Avery Johnson
              </Typography>
              <Typography
                variant="body2"
                sx={(currentTheme) => ({
                  color: currentTheme.palette.text.secondary,
                  textAlign: 'center',
                })}
              >
                Senior Product Designer
              </Typography>
              <Typography
                variant="body2"
                sx={(currentTheme) => ({
                  color: currentTheme.palette.text.secondary,
                  textAlign: 'center',
                })}
              >
                avery.johnson@material.io
              </Typography>
            </Box>

            <Box
              sx={(currentTheme) => ({
                width: currentTheme.spacing(40),
                maxWidth: '100%',
              })}
            >
              <DSButton fullWidth variant="outlined">
                Edit Profile
              </DSButton>
            </Box>
          </Box>

          <DSCard variant="elevated">
            <Box
              sx={(currentTheme) => ({
                display: 'flex',
                alignItems: 'stretch',
              })}
            >
              {profileStats.map((stat, index) => (
                <Box
                  key={stat.label}
                  sx={(currentTheme) => ({
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                  })}
                >
                  <Box
                    sx={(currentTheme) => ({
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: currentTheme.spacing(1),
                    })}
                  >
                    <Typography
                      variant="h5"
                      sx={(currentTheme) => ({
                        color: currentTheme.palette.primary.main,
                        textAlign: 'center',
                      })}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={(currentTheme) => ({
                        color: currentTheme.palette.text.secondary,
                        textAlign: 'center',
                      })}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                  {index < profileStats.length - 1 ? <DSDivider orientation="vertical" /> : null}
                </Box>
              ))}
            </Box>
          </DSCard>

          <Box
            sx={(currentTheme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: currentTheme.spacing(4),
            })}
          >
            {settingsSections.map((section) => (
              <Box
                key={section.title}
                sx={(currentTheme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: currentTheme.spacing(3),
                })}
              >
                <Box
                  sx={(currentTheme) => ({
                    '& .MuiTypography-root': {
                      color: currentTheme.palette.text.secondary,
                    },
                  })}
                >
                  <DSDivider label={section.title} type="divider-with-subhead" />
                </Box>

                <Box
                  sx={(currentTheme) => ({
                    backgroundColor: currentTheme.palette.background.paper,
                    borderRadius: currentTheme.shape.borderRadius,
                  })}
                >
                  <DSList>
                    {section.items.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <Box key={item.label}>
                          <ListItem
                            disableGutters
                            sx={(currentTheme) => ({
                              paddingLeft: currentTheme.spacing(4),
                              paddingRight: currentTheme.spacing(4),
                              paddingTop: currentTheme.spacing(3),
                              paddingBottom: currentTheme.spacing(3),
                              display: 'flex',
                              alignItems: 'center',
                              gap: currentTheme.spacing(3),
                            })}
                          >
                            <ListItemIcon
                              sx={(currentTheme) => ({
                                minWidth: currentTheme.spacing(8),
                                width: currentTheme.spacing(8),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                color: currentTheme.palette.text.secondary,
                              })}
                            >
                              <Icon />
                            </ListItemIcon>

                            <ListItemText
                              sx={{
                                margin: 0,
                              }}
                              primary={(
                                <Typography
                                  variant="body1"
                                  sx={(currentTheme) => ({
                                    color: currentTheme.palette.text.primary,
                                  })}
                                >
                                  {item.label}
                                </Typography>
                              )}
                              secondary={item.secondaryText ? (
                                <Typography
                                  variant="body2"
                                  sx={(currentTheme) => ({
                                    color: currentTheme.palette.text.secondary,
                                  })}
                                >
                                  {item.secondaryText}
                                </Typography>
                              ) : undefined}
                            />

                            {renderTrailing(item)}
                          </ListItem>

                          {index < section.items.length - 1 ? <DSDivider /> : null}
                        </Box>
                      );
                    })}
                  </DSList>
                </Box>
              </Box>
            ))}
          </Box>

          <Box>
            <DSDivider />
            <Box
              sx={(currentTheme) => ({
                padding: currentTheme.spacing(4),
                display: 'flex',
                flexDirection: 'column',
                gap: currentTheme.spacing(3),
              })}
            >
              <DSButton color="error" fullWidth variant="outlined">
                Sign Out
              </DSButton>
              <DSButton color="error" fullWidth variant="text">
                Delete Account
              </DSButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Profile;
