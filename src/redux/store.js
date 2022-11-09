import {combineReducers, configureStore} from '@reduxjs/toolkit';
import recent1 from './recent';
import favourite1 from './favourite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducers = combineReducers({
  recentSearch: recent1,
  favouriteSearch: favourite1,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
