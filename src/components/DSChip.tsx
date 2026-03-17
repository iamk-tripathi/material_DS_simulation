import { Avatar, Box, Chip } from './mui';
import { Close, Search } from './icons';

export interface DSChipProps {
  variant?: 'input' | 'assistive' | 'filter' | 'suggestion' | 'group';
  style?: 'elevated' | 'outlined';
  configuration?:
    | 'label-only'
    | 'label-leading-icon'
    | 'label-avatar'
    | 'label-icon'
    | 'label-favicon'
    | 'label-brand-icon';
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged' | 'disabled';
  selected?: boolean;
  showClosingIcon?: boolean;
  showTrailingIcon?: boolean;
  showIcon?: boolean;
  layout?: 'single-row-scrollable' | 'multiple-rows-overflow';
  label?: string;
}

// M3 rule: Chip communicates compact input, suggestion, or filtering choices
const DSChip = ({
  variant = 'assistive',
  style = 'outlined',
  configuration = 'label-only',
  state = 'enabled',
  selected = false,
  showClosingIcon = false,
  showTrailingIcon = false,
  showIcon = false,
  layout = 'single-row-scrollable',
  label = 'Chip',
}: DSChipProps) => {
  const chip = (
    <Chip
      label={label}
      variant={style === 'outlined' ? 'outlined' : 'filled'}
      avatar={
        configuration === 'label-avatar' ? (
          <Avatar>{label.slice(0, 1)}</Avatar>
        ) : undefined
      }
      icon={
        configuration === 'label-leading-icon' ||
        configuration === 'label-icon' ||
        configuration === 'label-favicon' ||
        configuration === 'label-brand-icon' ||
        showIcon ? (
          <Search />
        ) : undefined
      }
      deleteIcon={showClosingIcon || showTrailingIcon ? <Close /> : undefined}
      onDelete={showClosingIcon || showTrailingIcon ? () => undefined : undefined}
      color={selected ? 'primary' : 'default'}
      disabled={state === 'disabled'}
      sx={(theme) => ({
        boxShadow: style === 'elevated' ? theme.shadows[1] : undefined,
        backgroundColor:
          state === 'dragged'
            ? theme.palette.action.selected
            : undefined,
        outline:
          state === 'focused'
            ? `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`
            : undefined,
      })}
    />
  );

  if (variant === 'group') {
    return (
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexWrap: layout === 'multiple-rows-overflow' ? 'wrap' : 'nowrap',
          gap: theme.spacing(2),
        })}
      >
        {chip}
        <Chip label={`${label} 2`} variant={style === 'outlined' ? 'outlined' : 'filled'} />
        <Chip label={`${label} 3`} variant={style === 'outlined' ? 'outlined' : 'filled'} />
      </Box>
    );
  }

  return chip;
};

export default DSChip;
