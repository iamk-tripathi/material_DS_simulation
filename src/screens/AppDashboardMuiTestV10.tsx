import { useState } from 'react';
import {
  Avatar,
  Box,
  CardContent,
  DSAppBar,
  DSButton,
  DSCard,
  DSNavigationBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  ThemeProvider,
  Typography,
  ArrowOutward,
  CreditCard,
  Home,
  Person,
  QrCode2,
  ReceiptLong,
  Savings,
} from '../components';
import { theme } from '../theme/theme';

const quickActions = [
  {
    label: 'Send',
    icon: ArrowOutward,
    variant: 'filled' as const,
  },
  {
    label: 'Top Up',
    icon: Savings,
    variant: 'outlined' as const,
  },
  {
    label: 'Pay Bill',
    icon: ReceiptLong,
    variant: 'outlined' as const,
  },
  {
    label: 'Scan',
    icon: QrCode2,
    variant: 'text' as const,
  },
];

const recentTransactions = [
  {
    title: 'Coffee House',
    subtitle: 'Today · Card payment',
    amount: '-$6.40',
  },
  {
    title: 'Payroll Deposit',
    subtitle: 'Yesterday · Incoming transfer',
    amount: '+$2,450.00',
  },
  {
    title: 'Metro Card Top Up',
    subtitle: 'Yesterday · Transit',
    amount: '-$24.00',
  },
  {
    title: 'Savings Auto-transfer',
    subtitle: 'Mar 20 · Scheduled transfer',
    amount: '-$150.00',
  },
];

function AppDashboardMuiTestV10() {
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
        <DSAppBar
          size="small"
          title="Dashboard"
          rightElement={
            <Avatar
              sx={(currentTheme) => ({
                width: currentTheme.spacing(10),
                height: currentTheme.spacing(10),
                backgroundColor: currentTheme.palette.secondary.main,
                color: currentTheme.palette.secondary.contrastText,
              })}
            >
              <Person />
            </Avatar>
          }
        />

        <Box
          sx={(currentTheme) => ({
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: currentTheme.spacing(6),
            paddingLeft: currentTheme.spacing(4),
            paddingRight: currentTheme.spacing(4),
            paddingTop: currentTheme.spacing(4),
            paddingBottom: currentTheme.spacing(20),
          })}
        >
          <DSCard variant="elevated">
            <CardContent
              sx={(currentTheme) => ({
                display: 'flex',
                flexDirection: 'column',
                gap: currentTheme.spacing(3),
              })}
            >
              <Box
                sx={(currentTheme) => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: currentTheme.spacing(3),
                })}
              >
                <Box
                  sx={(currentTheme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: currentTheme.spacing(1),
                  })}
                >
                  <Typography
                    variant="body2"
                    sx={(currentTheme) => ({
                      color: currentTheme.palette.text.secondary,
                    })}
                  >
                    Available balance
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={(currentTheme) => ({
                      color: currentTheme.palette.text.primary,
                    })}
                  >
                    $12,480.90
                  </Typography>
                </Box>
                <Avatar
                  sx={(currentTheme) => ({
                    width: currentTheme.spacing(12),
                    height: currentTheme.spacing(12),
                    backgroundColor: currentTheme.palette.primary.main,
                    color: currentTheme.palette.primary.contrastText,
                  })}
                >
                  <CreditCard />
                </Avatar>
              </Box>

              <Box
                sx={(currentTheme) => ({
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: currentTheme.spacing(2),
                })}
              >
                <Box
                  sx={(currentTheme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: currentTheme.spacing(1),
                  })}
                >
                  <Typography
                    variant="caption"
                    sx={(currentTheme) => ({
                      color: currentTheme.palette.text.secondary,
                    })}
                  >
                    Spending this month
                  </Typography>
                  <Typography variant="body1">$1,286.20</Typography>
                </Box>
                <Box
                  sx={(currentTheme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: currentTheme.spacing(1),
                  })}
                >
                  <Typography
                    variant="caption"
                    sx={(currentTheme) => ({
                      color: currentTheme.palette.text.secondary,
                    })}
                  >
                    Savings goal
                  </Typography>
                  <Typography variant="body1">68% funded</Typography>
                </Box>
              </Box>
            </CardContent>
          </DSCard>

          <Box
            sx={(currentTheme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: currentTheme.spacing(3),
            })}
          >
            <Typography
              variant="body1"
              sx={(currentTheme) => ({
                fontWeight: currentTheme.typography.fontWeightMedium,
              })}
            >
              Quick actions
            </Typography>
            <Box
              sx={(currentTheme) => ({
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: currentTheme.spacing(2),
              })}
            >
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <DSButton
                    key={action.label}
                    variant={action.variant}
                    fullWidth
                  >
                    <Box
                      sx={(currentTheme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: currentTheme.spacing(2),
                        width: '100%',
                      })}
                    >
                      <Icon fontSize="small" />
                      <Typography variant="body2">{action.label}</Typography>
                    </Box>
                  </DSButton>
                );
              })}
            </Box>
          </Box>

          <Box
            sx={(currentTheme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: currentTheme.spacing(3),
            })}
          >
            <Box
              sx={(currentTheme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: currentTheme.spacing(3),
              })}
            >
              <Typography
                variant="body1"
                sx={(currentTheme) => ({
                  fontWeight: currentTheme.typography.fontWeightMedium,
                })}
              >
                Recent transactions
              </Typography>
              <DSButton variant="text">View all</DSButton>
            </Box>
            <DSCard variant="elevated">
              <CardContent
                sx={(currentTheme) => ({
                  padding: currentTheme.spacing(0),
                  '&:last-child': {
                    paddingBottom: currentTheme.spacing(0),
                  },
                })}
              >
                <List
                  sx={(currentTheme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: currentTheme.spacing(2),
                  })}
                >
                  {recentTransactions.map((transaction) => (
                    <ListItem
                      key={transaction.title}
                      disableGutters
                      sx={(currentTheme) => ({
                        alignItems: 'center',
                        gap: currentTheme.spacing(2),
                        paddingLeft: currentTheme.spacing(0),
                        paddingRight: currentTheme.spacing(0),
                        paddingTop: currentTheme.spacing(2),
                        paddingBottom: currentTheme.spacing(2),
                        borderRadius: currentTheme.shape.borderRadius,
                        backgroundColor: currentTheme.palette.background.paper,
                      })}
                    >
                      <ListItemIcon
                        sx={(currentTheme) => ({
                          minWidth: 'auto',
                          color: currentTheme.palette.text.secondary,
                        })}
                      >
                        <Avatar
                          sx={(currentTheme) => ({
                            width: currentTheme.spacing(10),
                            height: currentTheme.spacing(10),
                            backgroundColor: currentTheme.palette.secondary.main,
                            color: currentTheme.palette.secondary.contrastText,
                          })}
                        >
                          <CreditCard fontSize="small" />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={transaction.title}
                        secondary={transaction.subtitle}
                        primaryTypographyProps={{
                          sx: (currentTheme) => ({
                            color: currentTheme.palette.text.primary,
                          }),
                        }}
                        secondaryTypographyProps={{
                          sx: (currentTheme) => ({
                            color: currentTheme.palette.text.secondary,
                          }),
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={(currentTheme) => ({
                          color: transaction.amount.startsWith('+')
                            ? currentTheme.palette.primary.main
                            : currentTheme.palette.text.primary,
                        })}
                      >
                        {transaction.amount}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </DSCard>
          </Box>
        </Box>

        <Paper
          elevation={3}
          sx={(currentTheme) => ({
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: currentTheme.palette.background.paper,
          })}
        >
          <DSNavigationBar
            items={[
              { label: 'Home', icon: <Home /> },
              { label: 'Payments', icon: <ArrowOutward /> },
              { label: 'Profile', icon: <Person /> },
            ]}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default AppDashboardMuiTestV10;
