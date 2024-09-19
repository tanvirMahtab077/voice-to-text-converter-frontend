import { BASE_AUTH_URL } from '../../../../constants/redux/baseUrl.constant';
import baseApi from '../baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: build => ({
		register: build.mutation({
			query: data => {
				return {
					url: `${BASE_AUTH_URL}/register`,
					method: 'POST',
					data: data,
				};
			},
		}),
		login: build.mutation({
			query: data => {
				return {
					url: `${BASE_AUTH_URL}/login`,
					method: 'POST',
					data: data,
				};
			},
		}),
		forgotPassword: build.mutation({
			query: data => ({
				url: `${BASE_AUTH_URL}/forgot-password`,
				method: 'POST',
				data: data,
			}),
		}),
		resetPassword: build.mutation({
			query: data => ({
				url: `${BASE_AUTH_URL}/reset-password`,
				method: 'POST',
				data: data,
			}),
		}),
		changePassword: build.mutation({
			query: data => ({
				url: `${BASE_AUTH_URL}/change-password`,
				method: 'POST',
				data: data,
			}),
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
	useChangePasswordMutation,
} = authApi;

export default authApi;
