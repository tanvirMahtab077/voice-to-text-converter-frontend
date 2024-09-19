import { BASE_USER_URL } from '../../../constants/redux/baseUrl.constant';
import { users } from '../../../constants/redux/tagTypeList.constant';
import baseApi from './baseApi';

const userApi = baseApi.injectEndpoints({
	endpoints: build => ({
		users: build.query({
			query: arg => {
				return {
					url: BASE_USER_URL,
					method: 'GET',
					params: arg,
				};
			},
			providesTags: [users],
		}),
		user: build.query({
			query: id => ({
				url: `${BASE_USER_URL}/${id}`,
				method: 'GET',
			}),
			providesTags: [users],
		}),
		createUser: build.mutation({
			query: data => ({
				url: BASE_USER_URL,
				method: 'POST',
				data,
			}),
			invalidatesTags: [users],
		}),
		updateUser: build.mutation({
			query: data => ({
				url: `${BASE_USER_URL}/${data.id}`,
				method: 'PATCH',
				data: data.body,
			}),
			invalidatesTags: [users],
		}),
		deleteUser: build.mutation({
			query: id => ({
				url: `${BASE_USER_URL}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [users],
		}),
	}),
});

export const { useUserQuery, useUsersQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;

export default userApi;
