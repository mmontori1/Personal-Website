import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { menuReducer } from './menu.js';
import { themeReducer } from './theme.js';

const rootReducer = combineReducers({
	// add all the reducers needed for the application here
	// ...reducers,	
	menu: menuReducer,
	theme: themeReducer,
	// reducer for the router
    router: routerReducer
})

export default rootReducer