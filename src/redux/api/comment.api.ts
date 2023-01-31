import { api } from '@/redux/api/api';
import { IComment, ICommentsDto } from '@/types/comment.interface';
export const commentApi = api.injectEndpoints({
  endpoints: builder => ({
    createComment: builder.mutation<IComment, ICommentsDto>({
			query: body => ({
				url: 'comment',
				method: 'POST',
        body
			}),
			invalidatesTags: (result, error, {videoId}) => [{ type: 'Video', id: videoId }]
		})
  })
})
