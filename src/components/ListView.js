import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ListView = ({
  place,
  region,
  image,
  temperature,
  condition,
  favoriteimage,
  favOnpress,
  containerOnPress,
}) => {
  return (
    <TouchableOpacity onPress={containerOnPress}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.mainText}>
            {place} , {region}
          </Text>
          <View style={styles.logocontainer}>
            <Image source={{uri: image}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.temptext}>{temperature}</Text>
              <Text style={styles.ctext}>°C</Text>
            </View>
            <Text style={styles.humidityText}>{condition}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={favOnpress}>
          <Image source={favoriteimage} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'column',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },

  logocontainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
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
    marginRight: 10,
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

  image: {
    height: 30,
    width: 30,
  },
});
