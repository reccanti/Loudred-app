import React from 'react';
import { render } from 'react-dom';
// import { ProfileInfo } from './sections/ProfileInfo';
import {
  ServerSelect,
  ChannelList,
  ChannelSelectProvider,
} from './sections/ChannelSelect/index';
import {
  DeviceSelect,
  DeviceSelectProvider,
  StartButton,
  StopButton,
} from './sections/DeviceSelect/index';
import {
  CssBaseline,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/**
 * Setup the page by applying elements and style tags to hook into
 */
const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const style = document.createElement('style');
style.innerHTML = `
html {
  -webkit-app-region: drag;
  height: 100%;
}`;
document.head.appendChild(style);

/**
 * Define a wrapper that sets up all of our Providers
 */
const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  return (
    <ChannelSelectProvider>
      <DeviceSelectProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box p={theme.spacing(1)}>
            {/* <ProfileInfo /> */}
            <ServerSelect />
            <ChannelList />
            <DeviceSelect />
            <StartButton />
            <StopButton />
          </Box>
        </ThemeProvider>
      </DeviceSelectProvider>
    </ChannelSelectProvider>
  );
};

render(<App />, mainElement);
