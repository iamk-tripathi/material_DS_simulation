import type { ChangeEvent } from 'react';
import { TextField } from './mui';

export interface DSTextFieldProps {
  variant: 'filled' | 'outlined';
  label: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

// M3 rule: filled variant inside surfaces, outlined on plain backgrounds
const DSTextField = ({
  variant,
  label,
  helperText,
  error,
  disabled,
  fullWidth,
  value,
  onChange,
}: DSTextFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <TextField
      variant={variant}
      label={label}
      helperText={helperText}
      error={error}
      disabled={disabled}
      fullWidth={fullWidth}
      value={value}
      onChange={handleChange}
    />
  );
};

export default DSTextField;
