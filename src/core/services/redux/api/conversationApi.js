import { BASE_CONVERSATION_URL } from '../../../constants/redux/baseUrl.constant';
import { conversations } from '../../../constants/redux/tagTypeList.constant';
import baseApi from './baseApi';

const conversationApi = baseApi.injectEndpoints({
	endpoints: build => ({
		conversations: build.query({
			query: arg => {
				return {
					url: BASE_CONVERSATION_URL,
					method: 'GET',
					params: arg,
				};
			},
			providesTags: [conversations],
		}),
		conversation: build.query({
			query: id => ({
				url: `${BASE_CONVERSATION_URL}/${id}`,
				method: 'GET',
			}),
			providesTags: [conversations],
		}),
		createNewConversation: build.mutation({
			query: data => ({
				url: BASE_CONVERSATION_URL,
				method: 'POST',
				data,
			}),
			invalidatesTags: [conversations],
		}),
		updateConversation: build.mutation({
			query: data => ({
				url: `${BASE_CONVERSATION_URL}/${data.id}`,
				method: 'PATCH',
				data: data.body,
			}),
			invalidatesTags: [conversations],
		}),
		deleteConversation: build.mutation({
			query: id => ({
				url: `${BASE_CONVERSATION_URL}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [conversations],
		}),
	}),
});

export const { useConversationQuery,useConversationsQuery,useCreateNewConversationMutation,useDeleteConversationMutation,useUpdateConversationMutation } = conversationApi;

export default conversationApi;