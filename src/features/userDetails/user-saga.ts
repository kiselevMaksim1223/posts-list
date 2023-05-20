import { put, takeLatest, call, all } from 'redux-saga/effects'

import { setAppErrorAC, setPostsStatusAC, setUserStatusAC } from '../../app/app-reducer'
import { delay } from '../../common/utils/delay'
import { PostType } from '../posts/post/posts.type'
import { setPostsAC } from '../posts/posts-reducer'

import { FETCH_USER, setUserAC } from './user-reducer'
import { userApi } from './user.api'
import { UserType } from './user.type'

function* fetchUserWorker(action: { type: string; userId: number }) {
  yield put(setUserStatusAC('loading'))
  try {
    yield delay(2000)
    const resUser: { data: UserType } = yield call(userApi.fetchUser, action.userId)

    yield put(setUserAC(resUser.data))
    yield put(setUserStatusAC('idle'))

    yield put(setPostsStatusAC('loading'))
    yield delay(2000)
    const resUserPosts: { data: PostType[] } = yield call(userApi.fetchUserPosts, action.userId)

    yield put(setPostsAC(resUserPosts.data))
    yield put(setPostsStatusAC('idle'))
  } catch (e: any) {
    console.log(e)
    yield put(setAppErrorAC(e.message))
  }
}

export function* UserWatcher() {
  yield all([takeLatest(FETCH_USER, fetchUserWorker)])
}
