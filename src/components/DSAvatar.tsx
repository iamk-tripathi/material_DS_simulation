import { Avatar, Typography } from './mui';
import { Check } from './icons';

export interface DSAvatarProps {
  variant?: 'generic' | 'three-dimensional';
  style?: 'avatar' | 'monogram' | 'check';
  index?: number;
  label?: string;
}

// M3 rule: Avatar represents a person, account, or identity placeholder
const DSAvatar = ({
  variant = 'generic',
  style = 'avatar',
  index = 1,
  label = 'A',
}: DSAvatarProps) => (
  <Avatar
    sx={(theme) => ({
      width: theme.spacing(10),
      height: theme.spacing(10),
      backgroundColor:
        variant === 'three-dimensional'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      color:
        variant === 'three-dimensional'
          ? theme.palette.secondary.contrastText
          : theme.palette.primary.contrastText,
    })}
  >
    {variant === 'three-dimensional' ? (
      <Typography variant="caption">{index}</Typography>
    ) : style === 'check' ? (
      <Check />
    ) : style === 'monogram' ? (
      label.slice(0, 1)
    ) : (
      <Typography variant="caption">{label.slice(0, 1)}</Typography>
    )}
  </Avatar>
);

export default DSAvatar;
