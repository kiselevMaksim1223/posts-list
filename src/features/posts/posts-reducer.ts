import { PostType } from './posts'

const initialState: PostType[] = []

type ActionsType = ReturnType<typeof setPostsAC>
export const SET_POSTS = 'SET-POSTS'
export const FETCH_POSTS = 'FETCH-POSTS'

export const postsReducer = (state: PostType[] = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts
    default:
      return state
  }
}

export const setPostsAC = (posts: PostType[]) => ({ type: SET_POSTS, posts } as const)
export const fetchPostsAC = () => ({ type: FETCH_POSTS } as const)
