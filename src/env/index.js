const envConfig = {
	common: {
		environment: import.meta.env.VITE_NODE_ENV,
		testKey: import.meta.env.VITE_TEST_KEY,
		baseApiUrl: import.meta.env.VITE_API_BASE_URL,
		port: import.meta.env.VITE_PORT,
	},
	basic: {},
	google: {
		firebase: {
			apiKey: import.meta.env.VITE_AWS_SECRET_KEY,
		},
	},
	aws: {
		secretKey: import.meta.env.VITE_AWS_SECRET_KEY,
	},
};
export { envConfig };
