import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

const ListView = ({
  place,
  image,
  temperature,
  condition,
  favoriteimage,
  favOnpress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.mainText}>{place}</Text>
        <View style={styles.logocontainer}>
          <Image source={image} />
          <View style={styles.textContainer}>
            <Text style={styles.temptext}>{temperature}</Text>
            <Text style={styles.ctext}>°C</Text>
          </View>
          <Text style={styles.humidityText}>{condition}</Text>
        </View>
      </View>
      <TouchableHighlight onPress={favOnpress}>
        <Image source={favoriteimage} />
      </TouchableHighlight>
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    flexDirection: 'column',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },

  logocontainer: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },

  mainText: {
    height: 18,
    lineHeight: 18,
    fontSize: 15,
    fontWeight: '500',
    color: '#FFE539',
  },

  temptext: {
    height: 21,
    lineHeight: 21,
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  ctext: {
    height: 15,
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
  },

  humidityText: {
    height: 16,
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    width: '80%',
  },
});
