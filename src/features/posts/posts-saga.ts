import { put, takeLatest, call, all } from 'redux-saga/effects'

import { setAppErrorAC, setPostsStatusAC } from '../../app/app-reducer'
import { delay } from '../../common/utils/delay'

import { PostType } from './posts'
import { FETCH_POSTS, setPostsAC } from './posts-reducer'
import { postsApi } from './posts.api'

function* fetchPostsWorker() {
  yield put(setPostsStatusAC('loading'))
  yield delay(2000)
  try {
    const res: { data: PostType[] } = yield call(postsApi.fetchPosts)

    yield put(setPostsAC(res.data))
  } catch (e: any) {
    yield put(setAppErrorAC(e.message))
  } finally {
    yield put(setPostsStatusAC('idle'))
  }
}

export function* PostsWatcher() {
  yield all([takeLatest(FETCH_POSTS, fetchPostsWorker)])
}
