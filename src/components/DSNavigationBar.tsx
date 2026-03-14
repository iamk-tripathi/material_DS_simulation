import type { ReactNode } from 'react';
import { BottomNavigation, BottomNavigationAction } from './mui';

export interface DSNavigationBarItem {
  label: string;
  icon: ReactNode;
}

export interface DSNavigationBarProps {
  items: DSNavigationBarItem[];
  activeIndex: number;
  onChange: (index: number) => void;
}

const DSNavigationBar = ({
  items,
  activeIndex,
  onChange,
}: DSNavigationBarProps) => {
  if (items.length < 2 || items.length > 5) {
    console.warn('DSNavigationBar: M3 requires 2-5 destinations');
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
