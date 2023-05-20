import { instance } from '../../../common/api/instans.api'
import { CommentType } from '../post/post'

export const commentsApi = {
  fetchComments(postId: number) {
    return instance.get<CommentType[]>(`posts/${postId}/comments`)
  },
}
