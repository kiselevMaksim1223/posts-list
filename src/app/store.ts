import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '../common/saga/root-saga'
import { commentsReducer } from '../features/posts/comments/comments-reducer'
import { postsReducer } from '../features/posts/posts-reducer'
import { userReducer } from '../features/userDetails/user-reducer'

import { appReducer } from './app-reducer'

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

type AppRootStateType = ReturnType<typeof rootReducer>
