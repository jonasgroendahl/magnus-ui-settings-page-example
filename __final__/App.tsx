import React from 'react';

import {ThemeProvider} from 'react-native-magnus';
import Settings from './Settings';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Settings />
    </ThemeProvider>
  );
};

export default App;
