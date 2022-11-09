import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '603dc9ed29mshd3f9bb74ffe31c3p124b36jsn662f3737c4d7',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export const getWeather = createAsyncThunk('redux/getWeather', async () => {
  return fetch(
    'https://weatherapi-com.p.rapidapi.com/current.json?q=Mandya',
    options,
  )
    .then(response => response.json())
    .catch(err => console.error(err));
});

const weatherData = createSlice({
  name: 'weather',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
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

export default weatherData.reducer;
