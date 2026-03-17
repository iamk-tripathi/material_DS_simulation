import type { ReactNode } from 'react';
import { Box, Tooltip, Typography } from './mui';

export interface DSTooltipProps {
  variant?: 'plain' | 'rich';
  type?: 'single-line' | 'multi-line' | 'rich';
  title: string;
  children?: ReactNode;
  open?: boolean;
}

// M3 rule: Tooltip provides concise supplemental guidance
const DSTooltip = ({
  variant = 'plain',
  type = 'single-line',
  title,
  children,
  open = true,
}: DSTooltipProps) => (
  <Tooltip
    arrow={variant === 'rich'}
    open={open}
    title={
      <Typography variant="body2">
        {type === 'multi-line' ? `${title} ${title}` : title}
      </Typography>
    }
  >
    <Box
      sx={(theme) => ({
        display: 'inline-flex',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
      })}
    >
      {children ?? <Typography variant="body2">Tooltip trigger</Typography>}
    </Box>
  </Tooltip>
);

export default DSTooltip;
