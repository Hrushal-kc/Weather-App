import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Navbar from '../components/Navbar';
import backgroundimage from '../../assets/background_android.png';
import ListView from '../components/ListView';

const RecentSearch = ({navigation}) => {
  const handleRemoveFavourite = () => {
    Alert.alert('', 'Are you sure want to remove all the searches?', [
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
          <Navbar
            headText={'Recent Search'}
            arrowonPress={() => {
              navigation.goBack();
            }}
            searchIcon={'search1'}
          />
          <View style={styles.container}>
            <View style={styles.textcontainer}>
              <Text style={styles.cititext}>You recently searched for</Text>
              <TouchableHighlight onPress={handleRemoveFavourite}>
                <Text style={styles.removetext}>Clear All</Text>
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
        </ScrollView>
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
