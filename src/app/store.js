import counterReducer from "../features/Counter/counterSlice";
import courseReducer from "../features/ListCourse/listCourseSlice";
import userReducer from "../features/Auth/userSlice";

import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  count: counterReducer,
  course: courseReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
