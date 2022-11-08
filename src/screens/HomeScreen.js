import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  ImageBackground,
} from 'react-native';
import weatherLogo from '../../assets/weatherLogo.png';
import drawericon from '../../assets/icon_menu_white.png';
import searchicon from '../../assets/icon_search_white.png';
import favouriteicon from '../../assets/icon_favourite.png';
import temperatureicon from '../../assets/icon_temperature_info.png';
import precipitationlogo from '../../assets/icon_precipitation_info.png';
import humiditylogo from '../../assets/icon_humidity_info.png';
import backgroundimage from '../../assets/background_android.png';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
      <ScrollView>
        <SafeAreaView>
          <View>
            <View style={styles.navbar}>
              <View>
                <TouchableHighlight onPress={() => navigation.openDrawer()}>
                  <Image source={drawericon} style={styles.drawerlogo} />
                </TouchableHighlight>
              </View>
              <View style={styles.logoContainer}>
                <Image source={weatherLogo} style={styles.weathearlogo} />
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate('SearchScreen');
                  }}>
                  <Image source={searchicon} style={styles.searchlogo} />
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.datetime}>Wed, 28 Nov 2018 11:35 AM</Text>
              <Text style={styles.locationtext}>Udupi, Karnataka</Text>
              <View style={styles.favouriteContainer}>
                <Image source={favouriteicon} style={styles.favouriteicon} />
                <Text style={styles.favouritetext}>Add to favourite</Text>
              </View>
            </View>
            <View style={styles.infobox}>
              <Image source={drawericon} style={styles.sunicon} />
              <View style={styles.tempdetails}>
                <Text style={styles.degreetext}>31</Text>
                <View style={styles.tempicon}>
                  <Text style={styles.ctext}>°C</Text>
                  <Text style={styles.ftext}>°F</Text>
                </View>
              </View>
              <Text style={styles.weathertext}>Mostly Sunny</Text>
            </View>
            <View style={styles.bottominfo}>
              <View style={styles.tempcontainer}>
                <Image source={temperatureicon} />
                <View>
                  <Text style={styles.bottomtext}>Min - Max</Text>
                  <Text style={styles.temptext}>22 - 34</Text>
                </View>
              </View>
              <View style={styles.tempcontainer}>
                <Image
                  source={precipitationlogo}
                  style={styles.precipitationlogo}
                />
                <View>
                  <Text style={styles.bottomtext}>Precipitation</Text>
                  <Text style={styles.temptext}>0%</Text>
                </View>
              </View>
              <View style={styles.tempcontainer}>
                <Image source={humiditylogo} style={styles.humiditylogo} />
                <View>
                  <Text style={styles.bottomtext}>Humidity</Text>
                  <Text style={styles.temptext}>47%</Text>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
  },

  Safeview: {
    flex: 1,
  },

  scrollview: {
    flex: 1,
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 10,
  },

  weathearlogo: {
    height: 26,
    width: 124,
    marginLeft: 20,
  },

  searchlogo: {
    height: 20,
    width: 20,
    marginRight: 16,
  },

  drawerlogo: {
    height: 13,
    width: 17,
    marginLeft: 16,
  },

  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'column',
    padding: 50,
  },

  datetime: {
    height: 15,
    opacity: 0.6,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: 'center',
    marginBottom: 15,
  },
  locationtext: {
    height: 21,
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
  },

  favouriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },

  favouriteicon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },

  favouritetext: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
  },

  infobox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },

  tempdetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tempicon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
  },

  sunicon: {
    height: 67,
    width: 64,
    marginBottom: 20,
  },

  degreetext: {
    height: 61,
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '500',
    lineHeight: 61,
    marginBottom: 10,
  },

  ctext: {
    height: 30,
    color: '#E32843',
    fontSize: 16,
    lineheight: 19,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },

  ftext: {
    height: 30,
    color: '#FFFFFF',
    lineheight: 19,
    padding: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },

  weathertext: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
  },

  bottominfo: {
    flexDirection: 'row',
    borderTopWidth: 1,
    marginTop: '30%',
    borderTopColor: '#FFFFFF',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tempcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '30%',
    marginTop: 30,
  },

  precipitationlogo: {
    height: 25,
    width: 25,
  },

  humiditylogo: {height: 20, width: 15},

  bottomtext: {
    height: 15,
    lineHeight: 15,
    color: '#FFFFFF',
    fontSize: 13,
  },

  temptext: {
    height: 21,
    lineHeight: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
});
