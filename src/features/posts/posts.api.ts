import { instance } from '../../common/api/instans.api'

import { PostType } from './post/posts.type'

export const postsApi = {
  fetchPosts(userId?: number) {
    return instance.get<PostType[]>('posts', { params: userId })
  },
}
