import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userDetails: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userDetails = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userDetails = null;
      localStorage.removeItem('examDetails');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
