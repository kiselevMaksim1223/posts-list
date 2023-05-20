import { instance } from '../../common/api/instans.api'
import { PostType } from '../posts/post/posts.type'

import { UserType } from './user.type'

export const userApi = {
  fetchUser(userId: number) {
    return instance.get<UserType>(`users/${userId}`)
  },
  fetchUserPosts(userId: number) {
    return instance.get<PostType[]>(`users/${userId}/posts`)
  },
}
