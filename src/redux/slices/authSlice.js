import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../utils/baseUrl';
import toast from 'react-hot-toast';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async ({ userRole, data }, { rejectWithValue, dispatch }) => {
    const endpoint = `${baseUrl}/${userRole.toLowerCase()}/login`;

    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      


      const result = response.data;
      const token = result[userRole.toLowerCase()]?.token;

      dispatch(setToken(token));
      localStorage.setItem('token', JSON.stringify(token));

      return { userRole, userData: result[userRole.toLowerCase()] };
    } catch (err) {
      console.error('Error during login:', err);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    error: null,
    token: localStorage.getItem('token') || null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      toast.success('Successfully logged out.');
    },
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { userRole, userData } = action.payload;
        state.isAuthenticated = true;
        state.user = userData;
        localStorage.setItem('user', JSON.stringify(userData));
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Login failed: ${action.payload}`);
      });
  },
});

export const { logout, setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
