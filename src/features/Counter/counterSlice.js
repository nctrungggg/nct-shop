import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1;
    },

    decrease(state, action) {
      return state - 1;
    },
  },
});

const { actions, reducer } = courseSlice;

export const { increase, decrease } = actions;
export default reducer;
