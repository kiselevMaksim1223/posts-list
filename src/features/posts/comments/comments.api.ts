import { instance } from '../../../common/api/instans.api'

import { CommentType } from './comments.type'

export const commentsApi = {
  fetchComments(postId: number) {
    return instance.get<CommentType[]>(`posts/${postId}/comments`)
  },
}
