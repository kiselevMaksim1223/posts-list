import { CommentType } from './comments.type'

const initialState: CommentType[] = []

export const SET_COMMENTS = 'SET-COMMENTS'
export const FETCH_COMMENTS = 'FETCH-COMMENTS'
export const ClEAR_POST_COMMENTS = 'ClEAR-POST-COMMENTS'

type ActionsType = ReturnType<typeof setCommentsAC> | ReturnType<typeof clearPostCommentsAC>

export const commentsReducer = (
  state: CommentType[] = initialState,
  action: ActionsType
): CommentType[] => {
  switch (action.type) {
    case SET_COMMENTS:
      return [...state, ...action.postComments]
    case ClEAR_POST_COMMENTS:
      return state.filter(pc => pc.postId !== action.postId)
    default:
      return state
  }
}
export const setCommentsAC = (postComments: CommentType[]) =>
  ({ type: SET_COMMENTS, postComments } as const)
export const clearPostCommentsAC = (postId: number) =>
  ({ type: ClEAR_POST_COMMENTS, postId } as const)
export const fetchCommentsAC = (postId: number) => ({ type: FETCH_COMMENTS, postId } as const)
