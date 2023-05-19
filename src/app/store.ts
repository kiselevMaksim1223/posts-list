import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers, legacy_createStore } from 'redux'

import { commentsReducer } from '../features/posts/post/comment/comments-reducer'
import { postsReducer } from '../features/posts/posts-reducer'

import { appReducer } from './app-reducer'

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
  comments: commentsReducer,
})

export const store = legacy_createStore(rootReducer)

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

type AppRootStateType = ReturnType<typeof rootReducer>
