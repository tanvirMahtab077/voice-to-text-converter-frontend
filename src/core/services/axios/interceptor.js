import axios from 'axios';
import Cookies from 'js-cookie';
import { accessTokenKey } from '../../constants/Auth.constant';

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers['Accept'] = 'application/json';

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axiosInstance.defaults.timeout = 60000;

/**
 * request interceptor
 */
axiosInstance.interceptors.request.use(
	function (config) {
		/**
		 * this setup is for cookie based authentication
		 */
		const accessToken = Cookies.get(accessTokenKey);
		if (accessToken) {
			config.headers.Authorization = accessToken;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

/**
 * response interceptor
 */
axiosInstance.interceptors.response.use(
	function (response) {
		const responseObject = {
			data: response?.data,
			meta: response?.data?.meta,
		};
		return responseObject;
	},
	function (error) {
		const responseObject = {
			statusCode: error?.response?.data?.statusCode || 500,
			message: error?.response?.data?.message || 'Something Went Wrong',
			errorMessages: error?.response?.data?.message,
		};
		return Promise.reject(responseObject);
	}
);

export { axiosInstance };
