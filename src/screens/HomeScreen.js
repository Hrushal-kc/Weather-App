import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import weatherLogo from '../../assets/weatherLogo.png';
import drawericon from '../../assets/icon_menu_white.png';
import searchicon from '../../assets/icon_search_white.png';
import nofavouriteicon from '../../assets/icon_favourite.png';
import temperatureicon from '../../assets/icon_temperature_info.png';
import precipitationlogo from '../../assets/icon_precipitation_info.png';
import humiditylogo from '../../assets/icon_humidity_info.png';
import backgroundimage from '../../assets/background_android.png';
import {useDispatch, useSelector} from 'react-redux';
import {getWeather} from '../redux/weatherData';
import moment from 'moment';
import favImage from '../../assets/icon_favourite_active.png';
import {addFavPlace, deleteFavplace} from '../redux/favourite';

const HomeScreen = ({navigation}) => {
  const [toggle, setToggle] = useState(false);
  const [favPlace, setFavPlace] = useState(false);

  const celciusToggle = () => {
    setToggle(false);
  };

  const fahrenheitToggle = () => {
    setToggle(true);
  };

  const dispatch = useDispatch();
  const weatherList = useSelector(state => state.weather.list);

  const favlist = useSelector(state => state.favouriteSearch.value);

  const favValue = {...favlist[0]};
  // console.log(favValue.favValue);
  // setFavPlace(favValue.favValue);

  useEffect(() => {
    dispatch(getWeather('Udupi'));
  }, []);

  const handleFavPlace = () => {
    setFavPlace(!favPlace);
    const cityDetails = {
      id: weatherList?.location?.name,
      place: weatherList?.location?.name,
      region: weatherList?.location?.region,
      image: `https:${weatherList?.current?.condition.icon}`,
      temperature: weatherList?.current?.temp_c,
      condition: weatherList?.current?.condition?.text,
      favValue: true,
    };
    dispatch(addFavPlace(cityDetails));
  };

  const handleDeleteFavPlace = () => {
    setFavPlace(!favPlace);
    dispatch(deleteFavplace({id: weatherList?.location?.name}));
  };

  return (
    <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
      <ScrollView>
        <SafeAreaView>
          <View>
            <View style={styles.navbar}>
              <View>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image source={drawericon} style={styles.drawerlogo} />
                </TouchableOpacity>
              </View>
              <View style={styles.logoContainer}>
                <Image source={weatherLogo} style={styles.weathearlogo} />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SearchScreen');
                  }}>
                  <Image source={searchicon} style={styles.searchlogo} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.datetime}>
                {moment().format('llll').toUpperCase()}
              </Text>
              <Text style={styles.locationtext}>
                {weatherList?.location?.name}, {weatherList?.location?.region}
              </Text>
              <View style={styles.favouriteContainer}>
                {favPlace ? (
                  <TouchableOpacity onPress={handleDeleteFavPlace}>
                    <Image source={favImage} style={styles.favouriteicon} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={handleFavPlace}>
                    <Image
                      source={nofavouriteicon}
                      style={styles.favouriteicon}
                    />
                  </TouchableOpacity>
                )}

                <Text style={styles.favouritetext}>Add to favourite</Text>
              </View>
            </View>
            <View style={styles.infobox}>
              <Image
                source={{uri: `https:${weatherList?.current?.condition?.icon}`}}
                style={styles.sunicon}
              />
              {toggle ? (
                <View style={styles.tempdetails}>
                  <Text style={styles.degreetext}>
                    {weatherList?.current?.temp_f}
                  </Text>
                  <View style={styles.tempicon}>
                    <TouchableOpacity onPress={celciusToggle}>
                      <Text style={styles.ctext}>°C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fahrenheitToggle}>
                      <Text
                        style={[
                          styles.ftext,
                          {backgroundColor: '#FFFFFF', color: '#E32843'},
                        ]}>
                        °F
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={styles.tempdetails}>
                  <Text style={styles.degreetext}>
                    {weatherList?.current?.temp_c}
                  </Text>
                  <View style={styles.tempicon}>
                    <TouchableOpacity onPress={celciusToggle}>
                      <Text
                        style={[
                          styles.ctext,
                          {backgroundColor: '#FFFFFF', color: '#E32843'},
                        ]}>
                        °C
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fahrenheitToggle}>
                      <Text style={styles.ftext}>°F</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              <Text style={styles.weathertext}>
                {weatherList?.current?.condition?.text}
              </Text>
            </View>
            <ScrollView horizontal>
              <View style={styles.bottominfo}>
                <View style={styles.tempcontainer}>
                  <Image source={temperatureicon} />
                  <View>
                    <Text style={styles.bottomtext}> Min - Max</Text>
                    <Text style={styles.temptext}>
                      {parseInt(weatherList?.current?.temp_c - 2)}°-
                      {parseInt(weatherList?.current?.temp_c + 2)}°
                    </Text>
                  </View>
                </View>
                <View style={styles.tempcontainer}>
                  <Image
                    source={precipitationlogo}
                    style={styles.precipitationlogo}
                  />
                  <View>
                    <Text style={styles.bottomtext}>Precipitation</Text>
                    <Text style={styles.temptext}>
                      {weatherList?.current?.precip_mm}%
                    </Text>
                  </View>
                </View>
                <View style={styles.tempcontainer}>
                  <Image source={humiditylogo} style={styles.humiditylogo} />
                  <View>
                    <Text style={styles.bottomtext}>Humidity</Text>
                    <Text style={styles.temptext}>
                      {weatherList?.current?.humidity}%
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
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
    padding: 10,
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
    marginBottom: 10,
  },

  degreetext: {
    height: 61,
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: '500',
    lineHeight: 70,
    marginBottom: 10,
  },

  ctext: {
    height: 30,
    color: '#FFFFFF',
    fontSize: 16,
    lineheight: 19,
    padding: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },

  ftext: {
    height: 30,
    color: '#FFFFFF',
    fontSize: 17,
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
    width: 400,
  },

  tempcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
    paddingHorizontal: 13,
  },

  temptext: {
    height: 21,
    lineHeight: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 14,
  },
});
