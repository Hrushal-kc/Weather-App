import {combineReducers, configureStore} from '@reduxjs/toolkit';
import recent from './recent';
import favourite from './favourite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import weatherData from './weatherData';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducers = combineReducers({
  recentSearch: recent,
  favouriteSearch: favourite,
  weather: weatherData,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
