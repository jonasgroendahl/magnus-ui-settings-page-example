import React from 'react';
import Settings from './Settings';
import {Div, ThemeProvider} from 'react-native-magnus';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Settings />
    </ThemeProvider>
  );
};

export default App;
