import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/navigation/DrawerNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const Stack = createNativeStackNavigator();

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
