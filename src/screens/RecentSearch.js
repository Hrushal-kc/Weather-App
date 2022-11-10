import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
  FlatList,
} from 'react-native';
import Navbar from '../components/Navbar';
import backgroundimage from '../../assets/background_android.png';
import ListView from '../components/ListView';
import {useDispatch, useSelector} from 'react-redux';
import favImage from '../../assets/icon_favourite_active.png';
import nofavImage from '../../assets/icon_favourite.png';
import {deleteAllRecentplace, updateStatus} from '../redux/recent';
import {addFavPlace, deleteFavplace} from '../redux/favourite';
import {getWeather} from '../redux/weatherData';

const RecentSearch = ({navigation}) => {
  const [toggle, setToggle] = useState(false);
  const placeList = useSelector(state => state.recentSearch.value);
  const dispatch = useDispatch();

  const placeDetails = {...placeList[0]};

  const handlefavValue = item => {
    if (item.favValue == false) {
      const cityDetails = {
        id: item.id,
        place: item.place,
        region: item.region,
        image: item.image,
        temperature: item.temperature,
        condition: item.condition,
      };
      dispatch(updateStatus({id: item.id, favValue: true}));
      dispatch(addFavPlace(cityDetails));
    } else {
      dispatch(updateStatus({id: item.id, favValue: false}));
      dispatch(deleteFavplace({id: item.id}));
    }
  };

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
        favOnpress={() => handlefavValue(item)}
        favoriteimage={item.favValue ? favImage : nofavImage}
        containerOnPress={() => handleHomeNavigation(item)}
      />
    );
  };

  const handleRemoveFavourite = () => {
    Alert.alert('', 'Are you sure want to remove all the searches?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => dispatch(deleteAllRecentplace())},
    ]);
  };
  return (
    <ImageBackground source={backgroundimage} style={styles.image}>
      <SafeAreaView>
        <Navbar
          headText={'Recent Search'}
          arrowonPress={() => {
            navigation.navigate('Home');
          }}
          searchIcon={'search1'}
          searchonPress={() => navigation.navigate('SearchScreen')}
        />
        <View style={styles.container}>
          <View style={styles.textcontainer}>
            <Text style={styles.cititext}>You recently searched for</Text>
            <TouchableOpacity onPress={handleRemoveFavourite}>
              <Text style={styles.removetext}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={placeList}
              renderItem={renderItems}
              keyExtractor={item => item.id}></FlatList>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RecentSearch;

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
  },

  removetext: {
    height: 15,
    lineHeight: 15,
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '500',
  },

  listContainer: {
    marginTop: 30,
  },
});
