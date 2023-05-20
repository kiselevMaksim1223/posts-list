import { PostType } from './posts.type'

const initialState: PostType[] = []

export const SET_POSTS = 'SET-POSTS'
export const FETCH_POSTS = 'FETCH-POSTS'
export const CLEAN_POSTS = 'CLEAN-POSTS'

type ActionsType = ReturnType<typeof setPostsAC> | ReturnType<typeof cleanPostsAC>

export const postsReducer = (state: PostType[] = initialState, action: ActionsType): PostType[] => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts
    case 'CLEAN-POSTS':
      return (state = [])
    default:
      return state
  }
}

export const setPostsAC = (posts: PostType[]) => ({ type: SET_POSTS, posts } as const)
export const cleanPostsAC = () => ({ type: CLEAN_POSTS } as const)
export const fetchPostsAC = () => ({ type: FETCH_POSTS } as const)
