import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Navbar from '../components/Navbar';
import backgroundimage from '../../assets/background_android.png';
import nothingLogo from '../../assets/icon_nothing.png';

const NoRecentSearch = ({navigation}) => {
  return (
    <ImageBackground source={backgroundimage} style={styles.image}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Navbar
            headText={'Recent Search'}
            arrowonPress={() => {
              navigation.navigate('Home');
            }}
            searchIcon={'search1'}
            searchonPress={() => navigation.navigate('SearchScreen')}
          />
          <View style={styles.container}>
            <Image source={nothingLogo} />
            <Text style={styles.nothingText}>No Recent Search</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default NoRecentSearch;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },

  container: {
    padding: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  nothingText: {
    marginTop: 20,
    height: 21,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight: 21,
    fontFamily: 'Roboto-Regular',
  },
});
