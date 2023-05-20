import { instance } from '../../common/api/instans.api'

import { PostType } from './posts'

export const postsApi = {
  fetchPosts() {
    return instance.get<PostType[]>('posts')
  },
}
