import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkbox: {
    all: false,
    noTrasfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
};

const filtersSlice = createSlice({
  name: '@@filters',
  initialState,
  reducers: {
    toggleFilter: (state, { payload }) => {
      const { filter } = payload;

      if (filter === 'all') {
        const newValue = !state.checkbox.all;
        state.checkbox = {
          all: newValue,
          noTrasfers: newValue,
          oneTransfer: newValue,
          twoTransfers: newValue,
          threeTransfers: newValue,
        };
      } else {
        state.checkbox[filter] = !state.checkbox[filter];
        state.checkbox.all = false;
      }
    },
  },
});

export const { toggleFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
