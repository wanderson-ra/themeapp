import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';

import {Routes} from '../src/routes/Routes';
import colorTheme from './themes/index';

const App = (): React.ReactElement => {
  const colorScheme = useColorScheme();
  const theme = colorTheme[colorScheme ? colorScheme : 'light'];

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.color.navigation.background} />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
