import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import authApi from './api/auth';
import baseApi from './api/baseApi';
import { envConfig } from '../../../env';

const apis = {
	[authApi.reducerPath]: authApi.reducer,
};

const slices = {
	auth: authSlice,
};

export const store = configureStore({
	reducer: {
		...apis,
		...slices,
	},
	devTools: envConfig.common.environment !== 'production',
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
});
