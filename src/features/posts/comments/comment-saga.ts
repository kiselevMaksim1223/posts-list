import { all, call, put, takeEvery } from 'redux-saga/effects'

import { setAppErrorAC, setCommentsStatusAC } from '../../../app/app-reducer'
import { delay } from '../../../common/utils/delay'

import { FETCH_COMMENTS, setCommentsAC } from './comments-reducer'
import { commentsApi } from './comments.api'
import { CommentType } from './comments.type'

function* fetchCommentsWorker(action: { type: string; postId: number }) {
  yield put(setCommentsStatusAC(action.postId, 'loading'))
  yield delay(2000)
  try {
    const res: { data: CommentType[] } = yield call(commentsApi.fetchComments, action.postId)

    yield put(setCommentsAC(res.data))
  } catch (e: any) {
    console.log(e)
    yield put(setAppErrorAC(e.message))
  } finally {
    yield put(setCommentsStatusAC(action.postId, 'idle'))
  }
}

export function* CommentsWatcher() {
  yield all([takeEvery(FETCH_COMMENTS, fetchCommentsWorker)])
}
