import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addRecentPlace} from '../redux/recent';
import {getWeather} from '../redux/weatherData';
import getSearch from '../services/SearchRecomendation';

const SearchScreen = ({navigation}) => {
  const currentWeatherDetails = useSelector(state => state.weather.list);

  const [inputText, setInputText] = useState('');
  const [searchData, setSearchData] = useState('');

  const dispatch = useDispatch();

  const handleClearText = () => {
    setInputText('');
  };

  const handleInputText = async string => {
    setInputText(string);
    const Data = await getSearch(inputText);
    setSearchData(Data);
  };

  const handleTextPress = async string => {
    dispatch(getWeather(string));
    navigation.navigate('Home', {status: false});
    const recentSearchData = {
      id: currentWeatherDetails?.location?.name,
      place: currentWeatherDetails?.location?.name,
      region: currentWeatherDetails?.location?.region,
      image: `https:${currentWeatherDetails?.current?.condition.icon}`,
      temperature: currentWeatherDetails?.current?.temp_c,
      condition: currentWeatherDetails?.current?.condition?.text,
    };
    dispatch(addRecentPlace(recentSearchData));
  };

  const renderItems = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleTextPress(item.name)}>
        <View style={styles.renderContainer}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.bottomLine}></View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        {inputText == '' ? (
          <View style={styles.navbar}>
            <Icon1
              name="arrowleft"
              color={'black'}
              size={22}
              onPress={() => {
                navigation.goBack();
              }}></Icon1>
            <TextInput
              placeholder="Search for City"
              style={styles.inputText}
              onChangeText={handleInputText}
              value={inputText}
            />
          </View>
        ) : (
          <View style={styles.navbar}>
            <Icon1
              name="arrowleft"
              color={'black'}
              size={22}
              onPress={() => {
                navigation.goBack();
              }}></Icon1>
            <TextInput
              placeholder="Search for City"
              style={styles.inputText}
              onChangeText={handleInputText}
            />
            <Icon1
              name="close"
              color={'black'}
              size={22}
              onPress={handleClearText}></Icon1>
          </View>
        )}
        <View style={styles.bottomLine}></View>
        <View>
          <FlatList
            data={searchData}
            renderItem={renderItems}
            keyExtractor={item => item.id}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  navbar: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },

  inputText: {
    marginLeft: 30,
    width: '60%',
    marginRight: 60,
    fontFamily: 'Roboto-Regular',
  },

  renderContainer: {
    flex: 1,
    padding: 20,
  },

  bottomLine: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    opacity: 0.1,
  },
});
