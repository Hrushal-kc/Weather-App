import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import NoRecentSearch from '../screens/NoRecentSearch';
import RecentSearch from '../screens/RecentSearch';

const CombineRecentScreen = ({navigation}) => {
  const placeList = useSelector(state => state.recentSearch.value);
  return (
    <View style={styles.container}>
      {placeList.length == 0 ? (
        <NoRecentSearch navigation={navigation} />
      ) : (
        <RecentSearch navigation={navigation} />
      )}
    </View>
  );
};

export default CombineRecentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
