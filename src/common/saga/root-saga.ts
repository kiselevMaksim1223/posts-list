import { all, fork } from 'redux-saga/effects'

import { CommentsWatcher } from '../../features/posts/comments/comment-saga'
import { PostsWatcher } from '../../features/posts/posts-saga'

export function* rootSaga() {
  yield all([fork(PostsWatcher)])
  yield all([fork(CommentsWatcher)])
}
