import React from 'react';
import {View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Icon1
            name="arrowleft"
            color={'black'}
            size={22}
            onPress={() => {
              navigation.goBack();
            }}></Icon1>
          <TextInput placeholder="Search for City" style={styles.inputText} />
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
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

  inputText: {
    marginLeft: 30,
    width: '70%',
  },
});
