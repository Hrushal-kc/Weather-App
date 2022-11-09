import {createSlice} from '@reduxjs/toolkit';
import humiditylogo from '../../assets/icon_humidity_info.png';

const Data = [
  {
    id: 1,
    place: 'Udupi , Karnataka',
    image: humiditylogo,
    temperature: 31,
    condition: 'Mostly Sunny',
    favValue: true,
  },
  {
    id: 2,
    place: 'Mysore , Karnataka',
    image: humiditylogo,
    temperature: 31,
    condition: 'Mostly Sunny',
    favValue: false,
  },
];

export const Recent = createSlice({
  name: 'recentSearch',
  initialState: {value: Data},
  reducers: {},
});

export default Recent.reducer;
