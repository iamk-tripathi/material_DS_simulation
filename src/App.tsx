import { useState } from 'react';
import Profile from './screens/Profile';
import Tasker from './screens/Tasker';

type Screen = 'tasker' | 'profile';

function App() {
  const [screen, setScreen] = useState<Screen>('tasker');

  if (screen === 'profile') {
    return <Profile onBackClick={() => setScreen('tasker')} />;
  }

  return <Tasker onOpenProfile={() => setScreen('profile')} />;
}

export default App;
