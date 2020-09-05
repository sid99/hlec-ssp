import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Theme from './theme';
import Landing from './components/Landing';
import Privacy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Privacy />
    </MuiThemeProvider>
  );
}

export default App;
