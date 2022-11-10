import {createSlice} from '@reduxjs/toolkit';

const Data = [];

export const Recent = createSlice({
  name: 'recentSearch',
  initialState: {value: Data},
  reducers: {
    updateStatus: (state, action) => {
      state.value.map(task => {
        if (task.id === action.payload.id) {
          task.favValue = action.payload.favValue;
        }
      });
    },
    addRecentPlace: (state, action) => {
      state.value.unshift(action.payload);
    },

    deleteAllRecentplace: (state, action) => {
      state.value = [];
    },
  },
});

export default Recent.reducer;
export const {updateStatus, addRecentPlace, deleteAllRecentplace} =
  Recent.actions;
