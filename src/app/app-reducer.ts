export type RequestStatusType = 'idle' | 'loading'
export type InitialAppType = {
  // происходит ли сейчас взаимодействие с сервером
  postsStatus: RequestStatusType
  commentsStatus: RequestStatusType
  // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
  error: string | null
}

const initialState: InitialAppType = {
  postsStatus: 'idle',
  commentsStatus: 'idle',
  error: null,
}

const SET_POSTS_STATUS = 'SET-POSTS-STATUS'
const SET_COMMENTS_STATUS = 'SET-COMMENTS-STATUS'
const SET_ERROR = 'SET-ERROR'

export const appReducer = (
  state: InitialAppType = initialState,
  action: ActionsType
): InitialAppType => {
  switch (action.type) {
    case SET_POSTS_STATUS:
      return { ...state, postsStatus: action.status }
    case SET_COMMENTS_STATUS:
      return { ...state, commentsStatus: action.status }
    case SET_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}

export const setAppErrorAC = (error: string | null) => ({ type: SET_ERROR, error } as const)
export const setPostsStatusAC = (status: RequestStatusType) =>
  ({ type: SET_POSTS_STATUS, status } as const)
export const setCommentsStatusAC = (status: RequestStatusType) =>
  ({
    type: SET_COMMENTS_STATUS,
    status,
  } as const)

export type SetAppErrorAT = ReturnType<typeof setAppErrorAC>
export type SetPostsStatusAT = ReturnType<typeof setPostsStatusAC>
export type SetCommentsStatusAT = ReturnType<typeof setCommentsStatusAC>

type ActionsType = SetPostsStatusAT | SetCommentsStatusAT | SetAppErrorAT
