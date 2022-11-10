import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Navbar from '../components/Navbar';
import backgroundimage from '../../assets/background_android.png';
import ListView from '../components/ListView';
import {useDispatch, useSelector} from 'react-redux';
import favImage from '../../assets/icon_favourite_active.png';
import {deleteAllFavplace, deleteFavplace} from '../redux/favourite';
import {getWeather} from '../redux/weatherData';

const FavouriteScreen = ({navigation}) => {
  const placeList = useSelector(state => state.favouriteSearch.value);

  const dispatch = useDispatch();

  const handleHomeNavigation = async item => {
    console.log(item.place);
    dispatch(getWeather(item.place));
    navigation.navigate('Home');
  };

  const renderItems = ({item}) => {
    return (
      <ListView
        place={item.place}
        region={item.region}
        image={item.image}
        temperature={item.temperature}
        condition={item.condition}
        favoriteimage={favImage}
        favOnpress={() => dispatch(deleteFavplace({id: item.place}))}
        containerOnPress={() => handleHomeNavigation(item)}
      />
    );
  };

  const handleRemoveFavourite = () => {
    Alert.alert('', 'Are you sure want to remove all the favourites?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => dispatch(deleteAllFavplace())},
    ]);
  };

  return (
    <ImageBackground source={backgroundimage} style={styles.image}>
      <SafeAreaView>
        <View>
          <Navbar
            headText={'Favourite'}
            arrowonPress={() => {
              navigation.navigate('Home');
            }}
            searchIcon={'search1'}
            searchonPress={() => navigation.navigate('SearchScreen')}
          />
          <View style={styles.container}>
            <View style={styles.textcontainer}>
              <Text style={styles.cititext}>
                {placeList.length} City added as favourite
              </Text>
              <TouchableOpacity onPress={handleRemoveFavourite}>
                <Text style={styles.removetext}>Remove All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={placeList}
                renderItem={renderItems}
                keyExtractor={item => item.id}></FlatList>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },

  container: {
    marginHorizontal: 20,
  },

  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  cititext: {
    height: 15,
    lineHeight: 15,
    fontSize: 13,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },

  removetext: {
    height: 15,
    lineHeight: 15,
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
  },

  listContainer: {
    marginTop: 30,
  },
});
