import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
	// add all the reducers needed for the application here
	// ...reducers,
	// reducer for the router
    router: routerReducer
})

export default rootReducer