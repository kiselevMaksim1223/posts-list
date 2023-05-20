import { all, fork } from 'redux-saga/effects'

import { CommentsWatcher } from '../../features/posts/comments/comment-saga'
import { PostsWatcher } from '../../features/posts/posts-saga'
import { UserWatcher } from '../../features/userDetails/user-saga'

export function* rootSaga() {
  yield all([fork(PostsWatcher)])
  yield all([fork(CommentsWatcher)])
  yield all([fork(UserWatcher)])
}
