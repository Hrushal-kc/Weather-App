import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Navbar = ({
  headText,
  arrowonPress,
  searchIcon,
  searchonPress,
  navigation,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.navbar}>
        <Icon1
          name="arrowleft"
          color={'black'}
          size={22}
          onPress={arrowonPress}></Icon1>
        <View style={styles.container}>
          <Text style={styles.text}>{headText}</Text>
          <Icon1
            name={searchIcon}
            color={'black'}
            size={22}
            onPress={searchonPress}></Icon1>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    width: '100%',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },

  text: {
    height: 24,
    lineHeight: 24,
    fontSize: 20,
    fontWeight: '500',
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: {width: 2, height: 2},
  },
});
