import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../constants/routes';
import Search from './screens/Search';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Search} component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
