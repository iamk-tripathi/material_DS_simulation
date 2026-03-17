import { Radio } from './mui';

export interface DSRadioButtonProps {
  selected?: boolean;
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled';
}

// M3 rule: Radio button represents one choice in a mutually exclusive set
const DSRadioButton = ({
  selected = false,
  state = 'enabled',
}: DSRadioButtonProps) => (
  <Radio
    checked={selected}
    disabled={state === 'disabled'}
    sx={(theme) => ({
      backgroundColor:
        state === 'hovered'
          ? theme.palette.action.hover
          : state === 'pressed'
            ? theme.palette.action.selected
            : undefined,
      outline:
        state === 'focused'
          ? `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`
          : undefined,
    })}
  />
);

export default DSRadioButton;
