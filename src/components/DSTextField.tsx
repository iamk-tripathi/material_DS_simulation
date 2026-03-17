import type { ChangeEvent } from 'react';
import { TextField } from './mui';
import { Search, Check } from './icons';

export interface DSTextFieldProps {
  variant: 'filled' | 'outlined';
  state?: 'enabled' | 'hovered' | 'focused' | 'error' | 'disabled';
  textConfiguration?: 'input-text' | 'label-text' | 'placeholder-text';
  label: string;
  helperText?: string;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

// M3 rule: filled variant inside surfaces, outlined on plain backgrounds
const DSTextField = ({
  variant,
  state = 'enabled',
  textConfiguration = 'label-text',
  label,
  helperText,
  leadingIcon = false,
  trailingIcon = false,
  error,
  disabled,
  fullWidth,
  value,
  onChange,
}: DSTextFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const isError = error || state === 'error';
  const isDisabled = disabled || state === 'disabled';

  return (
    <TextField
      variant={variant}
      label={label}
      helperText={helperText}
      error={isError}
      disabled={isDisabled}
      fullWidth={fullWidth}
      value={value}
      onChange={handleChange}
      autoFocus={state === 'focused'}
      placeholder={
        textConfiguration === 'placeholder-text'
          ? label
          : undefined
      }
      InputProps={{
        startAdornment: leadingIcon ? <Search /> : undefined,
        endAdornment: trailingIcon ? <Check /> : undefined,
      }}
      sx={(theme) => ({
        '& .MuiInputBase-root': {
          backgroundColor:
            state === 'hovered'
              ? theme.palette.action.hover
              : undefined,
        },
      })}
    />
  );
};

export default DSTextField;
