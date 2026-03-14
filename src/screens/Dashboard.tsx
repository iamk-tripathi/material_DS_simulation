import { useState } from 'react';
import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
  Home,
  Search,
  Person,
} from '../components';
import { theme } from '../theme/theme';

const summaryStats = [
  { label: 'Revenue', value: '$24.6k', delta: '+12% vs last week' },
  { label: 'Orders', value: '1,284', delta: '+4% vs last week' },
  { label: 'Active Users', value: '8,392', delta: '+9% vs last week' },
  { label: 'Conversion', value: '3.8%', delta: '+0.6% vs last week' },
];

const recentActivity = [
  { title: 'New order #1042', subtitle: '2 minutes ago' },
  { title: 'Refund issued to Maria J.', subtitle: '1 hour ago' },
  { title: 'Weekly report generated', subtitle: 'Today, 9:30 AM' },
];

function Dashboard() {
  const [navValue, setNavValue] = useState(0);

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
              justifyContent: 'space-between',
              gap: theme.spacing(2),
            })}
          >
            <Typography variant="h6">Dashboard</Typography>
            <IconButton aria-label="Profile">
              <Avatar
                sx={(theme) => ({
                  bgcolor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  width: theme.spacing(10),
                  height: theme.spacing(10),
                })}
              >
                <Person />
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box
          sx={(theme) => ({
            flexGrow: 1,
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(16),
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(6),
          })}
        >
          <Box
            sx={(theme) => ({
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: theme.spacing(3),
            })}
          >
            {summaryStats.map((stat) => (
              <Card key={stat.label} elevation={1}>
                <CardContent
                  sx={(theme) => ({
                    padding: theme.spacing(4),
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing(1),
                    '&:last-child': {
                      paddingBottom: theme.spacing(4),
                    },
                  })}
                >
                  <Typography
                    variant="caption"
                    sx={(theme) => ({ color: theme.palette.text.secondary })}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={(theme) => ({ color: theme.palette.text.primary })}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={(theme) => ({ color: theme.palette.text.secondary })}
                  >
                    {stat.delta}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(3),
            })}
          >
            <Typography variant="h5">Recent Activity</Typography>
            <Card elevation={1}>
              <CardContent
                sx={(theme) => ({
                  padding: theme.spacing(3),
                  '&:last-child': {
                    paddingBottom: theme.spacing(3),
                  },
                })}
              >
                <List
                  sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing(2),
                  })}
                >
                  {recentActivity.map((activity) => (
                    <ListItem
                      key={activity.title}
                      disableGutters
                      sx={(theme) => ({
                        paddingLeft: theme.spacing(2),
                        paddingRight: theme.spacing(2),
                        paddingTop: theme.spacing(2),
                        paddingBottom: theme.spacing(2),
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: theme.palette.background.paper,
                      })}
                    >
                      <ListItemText
                        primary={activity.title}
                        secondary={activity.subtitle}
                        primaryTypographyProps={{
                          sx: (theme) => ({
                            color: theme.palette.text.primary,
                          }),
                        }}
                        secondaryTypographyProps={{
                          sx: (theme) => ({
                            color: theme.palette.text.secondary,
                          }),
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Paper
          elevation={3}
          sx={(theme) => ({
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: theme.palette.background.paper,
          })}
        >
          <BottomNavigation
            value={navValue}
            onChange={(_, newValue) => setNavValue(newValue)}
            showLabels
            sx={(theme) => ({
              paddingTop: theme.spacing(1),
              paddingBottom: theme.spacing(1),
            })}
          >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Search" icon={<Search />} />
            <BottomNavigationAction label="Profile" icon={<Person />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
