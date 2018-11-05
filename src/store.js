import { createStore, combineReducers } from 'redux'
import projectListReducer from './reducers/projectListReducer'
import filter from './reducers/filter'

const reducers = combineReducers({
   loggedUserState: projectListReducer,
   filterDataState: filter
})

const store = createStore(reducers)

export default store