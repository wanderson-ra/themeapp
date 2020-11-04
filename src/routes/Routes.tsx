import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';

import {Home} from '../screens/home/Home';
import colorTheme from '../themes/index';

const AppRouter = createStackNavigator();

export const Routes = (): React.ReactElement => {
  const colorScheme = useColorScheme();
  const theme = colorTheme[colorScheme ? colorScheme : 'light'];

  return (
    <AppRouter.Navigator initialRouteName={'Home'}>
      <AppRouter.Screen
        options={{
          headerStyle: {backgroundColor: theme.color.navigation.background},
          headerTintColor: theme.color.navigation.title,
        }}
        name={'Home'}
        component={Home}
      />
    </AppRouter.Navigator>
  );
};
