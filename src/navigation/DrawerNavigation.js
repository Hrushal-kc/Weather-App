import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import RecentSearch from '../screens/RecentSearch';

const Drawer = createDrawerNavigator();

const Screens = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="RecentSearch"
        component={RecentSearch}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Screens;
