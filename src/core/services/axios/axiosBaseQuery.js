import { axiosInstance } from './interceptor';

export const axiosBaseQuery =
	({ baseUrl } = { baseUrl: '' }) =>
	async ({ url, method, data, params, contentType }) => {
		try {
			const result = await axiosInstance({
				url: baseUrl + url,
				method,
				data,
				params,
				headers: {
					'Content-Type': contentType || 'application/json',
					Accept: 'application/json',
				},
			});

			return result;
		} catch (axiosError) {
			let err = axiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};
