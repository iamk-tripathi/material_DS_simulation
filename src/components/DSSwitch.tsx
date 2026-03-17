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
      '& .MuiSwitch-switchBase': {
        backgroundColor:
          state === 'hovered'
            ? theme.palette.action.hover
            : state === 'pressed'
              ? theme.palette.action.selected
              : undefined,
      },
      outline:
        state === 'focused'
          ? `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`
          : undefined,
    })}
  />
);

export default DSSwitch;
