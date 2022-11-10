import {createSlice} from '@reduxjs/toolkit';

const Data = [];

export const Favourite = createSlice({
  name: 'favouriteSearch',
  initialState: {value: Data},
  reducers: {
    addFavPlace: (state, action) => {
      let isPresent = false;
      for (let item of state.value) {
        if (item.id === action.payload.id) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        state.value.unshift(action.payload);
      }
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
