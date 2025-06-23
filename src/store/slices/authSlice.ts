import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      console.log("Save token in Redux", state.token);

    },
    logOut: state => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const {setToken, logOut} = authSlice.actions;
export default authSlice.reducer;
