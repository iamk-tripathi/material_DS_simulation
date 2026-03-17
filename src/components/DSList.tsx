import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Switch,
  Typography,
} from './mui';
import { ChevronRight, ExpandMore, Image, PlayArrow, Person, Search } from './icons';

export interface DSListProps {
  variant?:
    | 'baseline'
    | 'standard'
    | 'segmented-filled'
    | 'expandable'
    | 'draggable'
    | 'swipable-standard'
    | 'swipable-segmented';
  density?: '0' | '-2' | '-4';
  condition?: '1-line' | '2-line' | '3-line+';
  leading?:
    | 'none'
    | 'monogram'
    | 'icon'
    | 'image'
    | 'video'
    | 'check-box'
    | 'radio-button'
    | 'switch'
    | 'avatar'
    | 'indent'
    | 'icon-button'
    | 'slot'
    | 'type11';
  trailing?:
    | 'none'
    | 'icon'
    | 'check-box'
    | 'radio-button'
    | 'switch'
    | 'trailing-text-only'
    | 'icon-button'
    | 'accordion-button'
    | 'slot';
  alignment?: 'middle' | 'top';
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged' | 'disabled';
  selected?: boolean;
  showOverline?: boolean;
  showSupportingText?: boolean;
  accordion?: 'collapsed' | 'expanded';
  swipeState?: 'default' | 'initiate-reveal' | 'revealed' | 'swipe-action';
  multiLine?: boolean;
}

const renderLeading = (leading: NonNullable<DSListProps['leading']>) => {
  if (leading === 'none') {
    return null;
  }

  if (leading === 'monogram' || leading === 'avatar') {
    return <Avatar><Person /></Avatar>;
  }

  if (leading === 'image') {
    return <Image />;
  }

  if (leading === 'video') {
    return <PlayArrow />;
  }

  if (leading === 'check-box') {
    return <Checkbox checked />;
  }

  if (leading === 'radio-button') {
    return <Radio checked />;
  }

  if (leading === 'switch') {
    return <Switch checked />;
  }

  return <Search />;
};

const renderTrailing = (trailing: NonNullable<DSListProps['trailing']>) => {
  if (trailing === 'none') {
    return null;
  }

  if (trailing === 'check-box') {
    return <Checkbox checked />;
  }

  if (trailing === 'radio-button') {
    return <Radio checked />;
  }

  if (trailing === 'switch') {
    return <Switch checked />;
  }

  if (trailing === 'trailing-text-only') {
    return <Typography variant="body2">Meta</Typography>;
  }

  return <ChevronRight />;
};

// M3 rule: List rows present structured scan and action patterns
const DSList = ({
  variant = 'standard',
  density = '0',
  condition = '2-line',
  leading = 'icon',
  trailing = 'icon',
  alignment = 'middle',
  state = 'enabled',
  selected = false,
  showOverline = false,
  showSupportingText = true,
  accordion = 'collapsed',
  swipeState = 'default',
  multiLine = false,
}: DSListProps) => {
  const item = (
    <ListItem
      sx={(theme) => ({
        alignItems: alignment === 'top' ? 'flex-start' : 'center',
        backgroundColor:
          variant === 'segmented-filled' || variant === 'swipable-segmented'
            ? theme.palette.secondary.light
            : selected
              ? theme.palette.action.selected
              : undefined,
        opacity: state === 'disabled' ? 0.5 : 1,
        paddingTop: density === '-4' ? theme.spacing(1) : density === '-2' ? theme.spacing(1.5) : theme.spacing(2),
        paddingBottom: density === '-4' ? theme.spacing(1) : density === '-2' ? theme.spacing(1.5) : theme.spacing(2),
      })}
    >
      {leading !== 'none' ? <ListItemIcon>{renderLeading(leading)}</ListItemIcon> : null}
      <ListItemText
        primary="List item"
        secondary={
          <Box>
            {showOverline ? <Typography variant="caption">Overline</Typography> : null}
            {showSupportingText || multiLine || condition !== '1-line' ? (
              <Typography variant="body2">Supporting text</Typography>
            ) : null}
            {condition === '3-line+' ? <Typography variant="body2">Additional supporting line</Typography> : null}
          </Box>
        }
      />
      {renderTrailing(trailing)}
    </ListItem>
  );

  if (variant === 'expandable') {
    return (
      <Accordion defaultExpanded={accordion === 'expanded'}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="body1">Expandable item</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">Expanded content</Typography>
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <Box>
      <List>{item}</List>
      {variant.startsWith('swipable') && swipeState !== 'default' ? (
        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: theme.spacing(2),
            paddingLeft: theme.spacing(4),
          })}
        >
          <Typography variant="body2">{swipeState}</Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default DSList;
