import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: ["ReactJS", "PHP", "C+"],
  reducers: {
    deleteCourse(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer } = courseSlice;

export const { deleteCourse } = actions;
export default reducer;
