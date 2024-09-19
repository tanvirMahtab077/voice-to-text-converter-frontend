import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	accessToken: null,
	user: null,
};
/**
 *  it is a basic auth related slice example
 */
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.accessToken = action.payload.accessToken;
		},
		userInfo: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setAuth, userInfo } = authSlice.actions;

export default authSlice.reducer;
