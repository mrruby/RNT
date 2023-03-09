import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import Account from './features/Account';
import FillSeed from './features/FillSeed';
import {RootStackParamList} from './models';
import theme from './utils/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FillSeed">
          <Stack.Screen
            name="FillSeed"
            component={FillSeed}
            options={{
              title: 'Your secret phrase',
              headerTitleStyle: {
                color: theme.main,
              },
            }}
          />
          <Stack.Screen name="AccountDetails" component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
