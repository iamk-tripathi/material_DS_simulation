import { Tabs, Tab } from './mui';
import { Home } from './icons';

export interface DSTabProps {
  type?: 'fixed' | 'scrollable';
  style?: 'primary' | 'secondary';
  configuration?: 'label-only' | 'icon-only' | 'label-icon';
  selected?: boolean;
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed';
}

// M3 rule: Tabs organize peer destinations within the same context
const DSTab = ({
  type = 'fixed',
  style = 'primary',
  configuration = 'label-only',
  selected = true,
  state = 'enabled',
}: DSTabProps) => (
  <Tabs
    value={selected ? 0 : 1}
    variant={type === 'scrollable' ? 'scrollable' : 'standard'}
    textColor={style === 'secondary' ? 'secondary' : 'primary'}
    indicatorColor={style === 'secondary' ? 'secondary' : 'primary'}
    sx={(theme) => ({
      minHeight: theme.spacing(12),
      backgroundColor:
        state === 'hovered'
          ? theme.palette.action.hover
          : undefined,
    })}
  >
    <Tab
      label={configuration === 'icon-only' ? undefined : 'Tab One'}
      icon={configuration === 'label-only' ? undefined : <Home />}
      iconPosition="start"
      sx={(theme) => ({
        outline:
          state === 'focused'
            ? `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`
            : undefined,
      })}
    />
    <Tab label="Tab Two" />
  </Tabs>
);

export default DSTab;
