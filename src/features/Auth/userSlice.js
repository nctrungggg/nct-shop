import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";

// createAsyncThunk để tạo ra các async action
export const register = createAsyncThunk(
  "user/register",
  // call API to register
  async (payload) => {
    const data = await userApi.register(payload);

    // save data to local storage
    // localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    // localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    return data.user;
  }
);

export const login = createAsyncThunk(
  "user/login",

  async (payload) => {
    const data = await userApi.login(payload);

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    return data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    showLogin: false,
  },

  // Các action bình thường (sync action)
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.KEY);
      localStorage.removeItem(StorageKeys.USER);

      state.current = {};
    },
  },

  // Code logic xử lý async action
  // extraReducers dùng để xử lý các trạng thái của async action
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.current = action.payload;
    // },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { showFormLogin, hideFormLogin, logout } = actions;

export default reducer;
