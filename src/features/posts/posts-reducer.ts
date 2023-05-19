import { PostType } from './posts'

const initialState: PostType[] = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat ',
    body: 'quia et suscipitsuscipit ',
  },
  {
    userId: 2,
    id: 2,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehende',
  },
  {
    userId: 3,
    id: 3,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehende',
  },
]

type ActionsType = ReturnType<typeof setPostsAC>

export const postsReducer = (state: PostType[] = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET-POSTS':
      return action.posts.map(p => ({ ...p }))
    default:
      return state
  }
}

export const setPostsAC = (posts: PostType[]) => ({ type: 'SET-POSTS', posts } as const)
