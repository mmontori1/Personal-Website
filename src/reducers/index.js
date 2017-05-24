import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
	menu
} from './menu.js'

const rootReducer = combineReducers({
	// add all the reducers needed for the application here
	// ...reducers,	
	menu: menu,
	// reducer for the router
    router: routerReducer
})

export default rootReducer