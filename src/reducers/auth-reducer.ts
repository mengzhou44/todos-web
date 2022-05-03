import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   authenticated:  false,
   profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signinSuccess: (state, action) => {
      state.profile = action.payload;
      state.authenticated= true
    },
    signout: (state, action) => {
       state.authenticated = false;
       state.profile= null
    },
  },
});

export const { signinSuccess } = authSlice.actions;
export default authSlice.reducer;
