import { createApi } from '@reduxjs/toolkit/query/react';
import { envConfig } from '../../../../env';
import { tagTypes } from '../../../constants/redux/tagTypeList.constant';
import { axiosBaseQuery } from '../../axios';

const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: axiosBaseQuery({
		baseUrl: envConfig.common.baseApiUrl,
	}),
	endpoints: () => ({}),
	tagTypes: tagTypes,
});

export default baseApi;
