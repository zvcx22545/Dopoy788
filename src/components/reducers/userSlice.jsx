import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://65dde481dccfcd562f55bafc.mockapi.io/create/user/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (userId) => {
  const response = await axios.get(`${apiUrl}/${userId}`);
  return response.data;
});

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  const response = await axios.post(apiUrl, user);
  return response.data;
});

export const editUser = createAsyncThunk("users/editUser", async (user) => {
  const response = await axios.put(`${apiUrl}/${user.id}`, user);
  return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (userId) => {
  await axios.delete(`${apiUrl}/${userId}`);
  return userId;
});

export const loginUser = createAsyncThunk("users/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(apiUrl, credentials);
    // You might want to store the user's token in local storage here
    // localStorage.setItem("userToken", response.data.token);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          if (action.type.includes("fetchUsers")) {
            state.users = action.payload;
          } else if (action.type.includes("fetchUser")) {
            state.currentUser = action.payload;
          } else if (action.type.includes("createUser")) {
            state.users.push(action.payload);
          } else if (action.type.includes("editUser")) {
            const index = state.users.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
              state.users[index] = action.payload;
            }
          } else if (action.type.includes("deleteUser")) {
            state.users = state.users.filter((user) => user.id !== action.payload);
          }
          else if (action.type.includes("loginUser")){
            state.loading = false; state.currentUser = action.payload;
          }
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
      );
  },
});

export default userSlice.reducer;