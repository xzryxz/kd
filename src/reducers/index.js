import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { responsiveStateReducer } from 'redux-responsive'


const rootReducer = combineReducers({
  routing: routerReducer,
  browser: responsiveStateReducer,
})

export default rootReducer
