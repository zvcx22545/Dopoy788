import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Api store
const apiUrl = "https://65dde481dccfcd562f55bafc.mockapi.io/create/user/users";
const createuserUrl = "https://dev-api.doopoy788.com/user/auth/register";
const userLogin = "https://dev-api.doopoy788.com/user/auth/login";
const logoutUrl = "https://dev-api.doopoy788.com/user/auth/logout";
const refreshtoken = "https://dev-api.doopoy788.com/user/auth/refresh";
const fetchuserUrl = "https://dev-api.doopoy788.com/user/auth/user";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (_, {getState,rejectWithValue}) => {
  const token = getState().user.userToken;
  if(!token)
  {
    return rejectWithValue('Token not found!')
  }
  try{
    const response = await axios.get(fetchuserUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  }catch(error)
  {
    if (error.response && error.response.data) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
});

export const createUser = createAsyncThunk("users/createUser", async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post(createuserUrl, user);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      // If an error occurs, reject the promise with the error message
      console.log(error.response.data)
      return rejectWithValue(error.response.data);
    } 
  }
});

export const editUser = createAsyncThunk("users/editUser", async (user) => {
  const response = await axios.put(`${apiUrl}/${user.id}`, user);
  return response.data;
});

export const logoutUser = createAsyncThunk("users/logout", async (_, { rejectWithValue, dispatch }) => {
  const token = localStorage.getItem("userToken");
  if (!token) {
    localStorage.removeItem("userToken");
    return rejectWithValue("No token found.");
  }

  try {
    const response = await axios.delete(logoutUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("userToken");
    dispatch(clearUserData());
    return response.data;
  } catch (error) {
    localStorage.removeItem("userToken");
    dispatch(clearUserData());
    console.log(error.response.data);
    return rejectWithValue(error.response.data);
  }
});


// Additional action to clear user data from the state



export const loginUser = createAsyncThunk("users/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(userLogin, credentials);
    // Store the user's token in local storage
    localStorage.setItem("userToken", response.data.token);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      // If an error occurs, reject the promise with the error message
      console.log(error.response.data)
      return rejectWithValue(error.response.data);
    } 
  }
});

export const refreshToken = createAsyncThunk("users/refreshToken", async (_, { getState, rejectWithValue }) => {
  const token = getState().user.userToken;
  if (!token) {
    return rejectWithValue("No token found.");
  }

  try {
    const response = await axios.post(refreshtoken, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newToken = response.data.token;
    localStorage.setItem("userToken", newToken);
    return { token: newToken };
  } catch (error) {
    if (error.response && error.response.data) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
});

const clearUserData = () => (dispatch) => {
  dispatch(clearUsers());
  dispatch(clearCurrentUser());
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    userToken: localStorage.getItem("userToken")|| null,
    tokenExpiresAt: null,
  },
  reducers: {
    clearUsers: (state) => {
      state.users = [];
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
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
          } else if (action.type.includes("logoutUser")) {
            state.userToken = null;
            state.currentUser = null;
          }
          else if (action.type.includes("loginUser") || action.type.includes("refreshToken")){
            state.loading = false; 
            state.currentUser = action.payload;
            state.userToken = action.payload.token; // อัปเดต userToken ใน state เมื่อ login หรือ refresh token สำเร็จ
            state.tokenExpiresAt = action.payload.token_expires_at;
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
export const { clearUsers, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;