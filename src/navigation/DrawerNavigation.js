import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CombineFavouriteScreen from './CombineFavouriteScreen';
import CombineRecentScreen from './CombineRecentScreen';

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
        component={CombineFavouriteScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="RecentSearch"
        component={CombineRecentScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Screens;
