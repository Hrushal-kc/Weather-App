import {createSlice} from '@reduxjs/toolkit';
import humiditylogo from '../../assets/icon_humidity_info.png';

const Data = [];

export const Favourite = createSlice({
  name: 'favouriteSearch',
  initialState: {value: Data},
  reducers: {
    addFavPlace: (state, action) => {
      state.value.push(action.payload);
    },
    deleteFavplace: (state, action) => {
      state.value = state.value.filter(place => place.id !== action.payload.id);
    },

    deleteAllFavplace: (state, action) => {
      state.value = [];
    },
  },
});

export default Favourite.reducer;
export const {addFavPlace, deleteFavplace, deleteAllFavplace} =
  Favourite.actions;
