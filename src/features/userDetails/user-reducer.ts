import { User } from './user'

const initialState: User | null = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
}

type ActionsType = ReturnType<typeof setUserAC>

export const userReducer = (state: User = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET-USER':
      return action.user
    default:
      return state
  }
}

export const setUserAC = (user: User) => ({ type: 'SET-USER', user } as const)
