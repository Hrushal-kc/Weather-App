import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Navbar from '../components/Navbar';
import backgroundimage from '../../assets/background_android.png';
import ListView from '../components/ListView';

const FavouriteScreen = () => {
  return (
    <ImageBackground source={backgroundimage} style={styles.image}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Navbar headText={'Favourite'} />
            <View style={styles.container}>
              <View style={styles.textcontainer}>
                <Text style={styles.cititext}>6 City added as favourite</Text>
                <Text style={styles.removetext}>Remove All</Text>
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
