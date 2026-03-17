import { Paper, TextField, Typography } from './mui';

export interface DSDateTimePickerProps {
  variant?: 'modal-date' | 'input-date' | 'docked-input-date' | 'dial' | 'keyboard';
  type?: 'day' | 'year' | 'full-screen-range' | 'single-input' | 'range' | 'month';
  format?: '12-hour' | '24-hour';
  orientation?: 'vertical' | 'horizontal';
}

// M3 rule: Date and time pickers collect temporal values in structured flows
const DSDateTimePicker = ({
  variant = 'modal-date',
  type = 'day',
  format = '12-hour',
  orientation = 'vertical',
}: DSDateTimePickerProps) => (
  <Paper
    sx={(theme) => ({
      padding: theme.spacing(4),
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      gap: theme.spacing(3),
      width: theme.spacing(72),
    })}
  >
    <Typography variant="h6">{variant}</Typography>
    <Typography variant="body2">Type: {type}</Typography>
    {variant === 'dial' || variant === 'keyboard' ? (
      <Typography variant="body2">Format: {format}</Typography>
    ) : null}
    <TextField label="Date" variant="outlined" />
    {(variant === 'input-date' || variant === 'docked-input-date') && type === 'range' ? (
      <TextField label="End date" variant="outlined" />
    ) : null}
  </Paper>
);

export default DSDateTimePicker;
