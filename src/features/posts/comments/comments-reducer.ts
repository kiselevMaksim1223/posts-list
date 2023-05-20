import { CommentType } from '../post/post'

const initialState: CommentType[] = []

export const SET_COMMENTS = 'SET-COMMENTS'
export const FETCH_COMMENTS = 'FETCH-COMMENTS'

type ActionsType = ReturnType<typeof setCommentsAC>

export const commentsReducer = (state: CommentType[] = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments
    default:
      return state
  }
}
export const setCommentsAC = (comments: CommentType[]) =>
  ({ type: SET_COMMENTS, comments } as const)
export const fetchCommentsAC = (postId: number) => ({ type: FETCH_COMMENTS, postId } as const)
