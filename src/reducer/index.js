import { combineReducers } from 'redux'
import counterReducer from './couter'
import articles from './articles'
import filterOptions from './filterOptions'

export default combineReducers({
  counter: counterReducer,
  articles,
  filterOptions
})
