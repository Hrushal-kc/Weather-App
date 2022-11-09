import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import FavouriteScreen from '../screens/FavouriteScreen';
import NoFavourite from '../screens/NoFavouriteAdded';

const CombineFavouriteScreen = ({navigation}) => {
  const placeList = useSelector(state => state.favouriteSearch.value);
  return (
    <View style={styles.container}>
      {placeList.length == 0 ? (
        <NoFavourite navigation={navigation} />
      ) : (
        <FavouriteScreen navigation={navigation} />
      )}
    </View>
  );
};

export default CombineFavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
