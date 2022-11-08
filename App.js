import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/navigation/DrawerNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screens"
          component={Screens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
