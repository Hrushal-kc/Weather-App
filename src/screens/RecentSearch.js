import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';
import backgroundimage from '../../assets/background_android.png';

const RecentSearch = () => {
  return (
    <ImageBackground source={backgroundimage} style={styles.image}>
      <SafeAreaView>
        <Navbar headText={'Favourite'} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RecentSearch;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
