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
    favValue: true,
  },
  {
    id: 3,
    place: 'Banglore , Karnataka',
    image: humiditylogo,
    temperature: 27,
    condition: 'Mostly Sunny',
    favValue: true,
  },
];

export const Favourite = createSlice({
  name: 'favouriteSearch',
  initialState: {value: Data},
  reducers: {},
});

export default Favourite.reducer;
