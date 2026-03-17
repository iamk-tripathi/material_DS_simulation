import { Checkbox } from './mui';

export interface DSCheckboxProps {
  type:
    | 'selected'
    | 'indeterminate'
    | 'unselected'
    | 'error-selected'
    | 'error-indeterminate'
    | 'error-unselected';
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled';
}

// M3 rule: Checkbox expresses selection state only
const DSCheckbox = ({ type, state = 'enabled' }: DSCheckboxProps) => {
  const isError = type.startsWith('error');
  const checked = type.includes('selected');
  const indeterminate = type.includes('indeterminate');

  return (
    <Checkbox
      checked={checked}
      indeterminate={indeterminate}
      disabled={state === 'disabled'}
      color={isError ? 'error' : 'primary'}
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
};

export default DSCheckbox;
