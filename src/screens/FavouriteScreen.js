import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import Navbar from '../components/Navbar';
import backgroundimage from '../../assets/background_android.png';
import ListView from '../components/ListView';
import {TouchableHighlight} from 'react-native-gesture-handler';

const FavouriteScreen = ({navigation}) => {
  const handleRemoveFavourite = () => {
    Alert.alert('', 'Are you sure want to remove all the favourites?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <ImageBackground source={backgroundimage} style={styles.image}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Navbar
              headText={'Favourite'}
              arrowonPress={() => {
                navigation.goBack();
              }}
              searchIcon={'search1'}
            />
            <View style={styles.container}>
              <View style={styles.textcontainer}>
                <Text style={styles.cititext}>6 City added as favourite</Text>
                <TouchableHighlight onPress={handleRemoveFavourite}>
                  <Text style={styles.removetext}>Remove All</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.listContainer}>
                <ListView />
                <ListView />
                <ListView />
                <ListView />
                <ListView />
                <ListView />
              </View>
            </View>
          </View>
        </ScrollView>
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