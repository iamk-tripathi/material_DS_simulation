import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  ThemeProvider,
  Typography,
} from '../components';
import { theme } from '../theme/theme';

const CardBody = () => (
  <Box
    sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    })}
  >
    <Typography variant="h6">Quarterly Sales</Typography>
    <Typography
      variant="body2"
      sx={(theme) => ({ color: theme.palette.text.secondary })}
    >
      Track revenue growth across channels and regions with the latest updates.
    </Typography>
  </Box>
);

const CardChildren = () => (
  <>
    <CardContent
      sx={(theme) => ({
        padding: theme.spacing(4),
        '&:last-child': {
          paddingBottom: theme.spacing(4),
        },
      })}
    >
      <CardBody />
    </CardContent>
    <CardActions
      sx={(theme) => ({
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      })}
    >
      <Button variant="text">View Details</Button>
    </CardActions>
  </>
);

const meta = {
  title: 'DS / Card',
  component: Card,
  args: {
    variant: 'elevation',
    elevation: 1,
    children: <CardChildren />,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
    },
    elevation: {
      control: { type: 'number', min: 0, max: 4, step: 1 },
    },
    children: {
      control: false,
    },
    sx: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box
          sx={(theme) => ({
            padding: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
          })}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: 'elevation',
    elevation: 1,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    elevation: 0,
  },
};
