import { Switch } from './mui';

export interface DSSwitchProps {
  selected?: boolean;
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled';
  showIcon?: boolean;
}

// M3 rule: Switch is for immediate on and off settings
const DSSwitch = ({
  selected = false,
  state = 'enabled',
  showIcon = false,
}: DSSwitchProps) => (
  <Switch
    checked={selected}
    disabled={state === 'disabled'}
    icon={showIcon ? undefined : undefined}
    checkedIcon={showIcon ? undefined : undefined}
    sx={(theme) => ({
      width: theme.spacing(13),
      height: theme.spacing(8),
      padding: 0,
      flexShrink: 0,
      '& .MuiSwitch-switchBase': {
        padding: theme.spacing(1),
        color: theme.palette.background.paper,
        transitionDuration: '150ms',
        '&.Mui-checked': {
          transform: `translateX(${theme.spacing(5)})`,
          color: theme.palette.primary.contrastText,
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
          },
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.4,
        },
        backgroundColor:
          state === 'hovered'
            ? theme.palette.action.hover
            : state === 'pressed'
              ? theme.palette.action.selected
              : undefined,
      },
      '& .MuiSwitch-thumb': {
        width: theme.spacing(4),
        height: theme.spacing(4),
        boxShadow: 'none',
      },
      '& .MuiSwitch-track': {
        borderRadius: theme.spacing(4),
        backgroundColor: theme.palette.text.secondary,
        opacity: 1,
      },
      outline:
        state === 'focused'
          ? `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`
          : undefined,
    })}
  />
);

export default DSSwitch;
