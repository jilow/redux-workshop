import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import * as constants from './constants'

const loggerMiddleware = createLogger()

const store = createStore(rootReducer, constants.DEFAULT_DOMAIN_STATE, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
))

export default store
