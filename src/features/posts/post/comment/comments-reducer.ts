import { CommentType } from '../post'

const initialState: CommentType[] = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem mem quasi reiciend',
  },
  {
    postId: 2,
    id: 2,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem mem quasi reiciend',
  },
  {
    postId: 3,
    id: 3,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim ',
  },
]

type ActionsType = ReturnType<typeof setCommentsAC>

export const commentsReducer = (state: CommentType[] = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET-COMMENTS':
      return action.comments.map(c => ({ ...c }))
    default:
      return state
  }
}

export const setCommentsAC = (comments: CommentType[]) =>
  ({ type: 'SET-COMMENTS', comments } as const)
