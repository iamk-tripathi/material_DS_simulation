import type { ReactNode } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Paper } from './mui';
import DSNavigationBar from './DSNavigationBar';

export interface DSNavigationItem {
  label: string;
  icon: ReactNode;
}

export interface DSNavigationProps {
  variant?: 'drawer' | 'rail' | 'rail-expanded' | 'bar' | 'xr-rail' | 'xr-bar';
  items: DSNavigationItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  alignment?: 'top' | 'middle';
  navItems?: '3' | '4' | '5' | '6';
  orientation?: 'horizontal' | 'vertical';
  railType?: 'docked' | 'floating';
  configuration?: 'embedded-fab' | 'no-fab' | 'icon-label';
}

// M3 rule: Navigation selects top-level destinations only
const DSNavigation = ({
  variant = 'bar',
  items,
  activeIndex,
  onChange,
  alignment = 'top',
}: DSNavigationProps) => {
  if (variant === 'bar' || variant === 'xr-bar') {
    return <DSNavigationBar items={items} activeIndex={activeIndex} onChange={onChange} variant="bar" />;
  }

  if (variant === 'rail' || variant === 'xr-rail' || variant === 'rail-expanded') {
    return <DSNavigationBar items={items} activeIndex={activeIndex} onChange={onChange} variant="rail" alignment={alignment} />;
  }

  return (
    <Paper>
      <Box
        sx={(theme) => ({
          width: theme.spacing(64),
          paddingTop: theme.spacing(4),
        })}
      >
        <List>
          {items.map((item, index) => (
            <ListItemButton key={`${item.label}-${index}`} selected={index === activeIndex} onClick={() => onChange(index)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default DSNavigation;
