import { UserType } from './user.type'

const initialState: UserType = {
  id: null,
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  company: {
    name: 'a',
    catchPhrase: '',
    bs: '',
  },
}

export const SET_USER = 'SET-USER'
export const FETCH_USER = 'FETCH-USER'
const SET_USER_ID = 'SET-USER-ID'

type ActionsType = ReturnType<typeof setUserAC> | ReturnType<typeof setUserIdAC>

export const userReducer = (state: UserType = initialState, action: ActionsType): UserType => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case SET_USER_ID:
      return { ...state, id: action.userId }
    default:
      return state
  }
}

export const setUserAC = (user: UserType) => ({ type: SET_USER, user } as const)
export const setUserIdAC = (userId: number) => ({ type: SET_USER_ID, userId } as const)
export const fetchUserAC = (userId: number) => ({ type: FETCH_USER, userId } as const)
