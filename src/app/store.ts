import { combineReducers, legacy_createStore } from 'redux'

import { appReducer } from './app-reducer'

const rootReducer = combineReducers({
  app: appReducer,
})

export const store = legacy_createStore(rootReducer)
