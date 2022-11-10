import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const BaseURL = 'https://weatherapi-com.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '603dc9ed29mshd3f9bb74ffe31c3p124b36jsn662f3737c4d7',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export const getWeather = createAsyncThunk('redux/getWeather', async string => {
  return fetch(`${BaseURL}/current.json?q=${string}`, options)
    .then(response => response.json())
    .then(response => ({...response, isFavourite: false}))
    .catch(err => console.error(err));
});

const weatherData = createSlice({
  name: 'weather',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    changeFavouriteStatus: (state, action) => {
      state.list = {...state.list, isFavourite: action.payload};
    },
  },
  extraReducers: builder => {
    builder.addCase(getWeather.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getWeather.fulfilled, (state, {payload}) => {
      state.list = payload;
      state.status = 'success';
    });
    builder.addMatcher(getWeather.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export const {changeFavouriteStatus} = weatherData.actions;
export default weatherData.reducer;
