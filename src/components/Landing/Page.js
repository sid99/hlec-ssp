import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Theme from './theme';
import Landing from './components/Landing';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Landing />
    </MuiThemeProvider>
  );
}

export default App;
