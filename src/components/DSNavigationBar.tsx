import type { ReactNode } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from './mui';

export interface DSNavigationBarItem {
  label: string;
  icon: ReactNode;
}

export interface DSNavigationBarProps {
  items: DSNavigationBarItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  variant?: 'bar' | 'rail' | 'drawer';
  alignment?: 'top' | 'middle';
}

const DSNavigationBar = ({
  items,
  activeIndex,
  onChange,
  variant = 'bar',
  alignment = 'top',
}: DSNavigationBarProps) => {
  if (items.length < 2 || items.length > 5) {
    console.warn('DSNavigationBar: M3 requires 2-5 destinations');
  }

  if (variant === 'drawer') {
    return (
      <Drawer variant="permanent" open>
        <List
          sx={(theme) => ({
            width: theme.spacing(60),
            paddingTop: theme.spacing(4),
          })}
        >
          {items.map((item, index) => (
            <ListItemButton
              key={`${item.label}-${index}`}
              selected={index === activeIndex}
              onClick={() => onChange(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    );
  }

  if (variant === 'rail') {
    return (
      <Paper
        elevation={0}
        sx={(theme) => ({
          backgroundColor: theme.palette.background.paper,
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(4),
          display: 'inline-flex',
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: alignment === 'middle' ? 'center' : 'flex-start',
            gap: theme.spacing(2),
          })}
        >
          {items.map((item, index) => (
            <BottomNavigationAction
              key={`${item.label}-${index}`}
              label={item.label}
              icon={item.icon}
              showLabel
              selected={index === activeIndex}
              onClick={() => onChange(index)}
            />
          ))}
        </Box>
      </Paper>
    );
  }

  return (
    <BottomNavigation
      value={activeIndex}
      onChange={(_, newValue) => onChange(newValue)}
      showLabels
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      })}
    >
      {items.map((item, index) => (
        <BottomNavigationAction
          key={`${item.label}-${index}`}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  );
};

export default DSNavigationBar;
