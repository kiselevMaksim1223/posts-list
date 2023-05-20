import { InitialAppType, RequestStatusType } from './app.type'

const initialState: InitialAppType = {
  userStatus: 'idle',
  postsStatus: 'idle',
  commentsStatus: '',
  error: null,
}

const SET_USER_STATUS = 'SET-USER-STATUS'
const SET_POSTS_STATUS = 'SET-POSTS-STATUS'
const SET_COMMENTS_STATUS = 'SET-COMMENTS-STATUS'
const SET_ERROR = 'SET-ERROR'

type ActionsType =
  | ReturnType<typeof setPostsStatusAC>
  | ReturnType<typeof setAppErrorAC>
  | ReturnType<typeof setCommentsStatusAC>
  | ReturnType<typeof setUserStatusAC>

export const appReducer = (
  state: InitialAppType = initialState,
  action: ActionsType
): InitialAppType => {
  switch (action.type) {
    case 'SET-USER-STATUS':
      return { ...state, userStatus: action.status }
    case SET_POSTS_STATUS:
      return { ...state, postsStatus: action.status }
    case SET_COMMENTS_STATUS:
      return { ...state, commentsStatus: action.postId.toString() + action.status }
    case SET_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}

export const setAppErrorAC = (error: string | null) => ({ type: SET_ERROR, error } as const)

export const setUserStatusAC = (status: RequestStatusType) =>
  ({ type: SET_USER_STATUS, status } as const)

export const setPostsStatusAC = (status: RequestStatusType) =>
  ({ type: SET_POSTS_STATUS, status } as const)

export const setCommentsStatusAC = (postId: number, status: RequestStatusType) =>
  ({
    type: SET_COMMENTS_STATUS,
    postId,
    status,
  } as const)
