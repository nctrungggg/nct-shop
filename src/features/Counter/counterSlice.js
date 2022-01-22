import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state, action) {
      console.log(action);
      return state + 1;
    },

    decrease(state, action) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { increase, decrease } = actions;
export default reducer;
