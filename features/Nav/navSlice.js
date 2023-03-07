import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    shownav: (state) => {
      state.state = !state.state;
    },
  },
});

export const { shownav } = navSlice.actions;

export default navSlice.reducer;
