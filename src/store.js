import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'
const history = createHistory()
const middleware = routerMiddleware(history)
const initialState = {
	menu: false
};
const store = createStore(
  rootReducer,
  initialState,
  compose(
	  applyMiddleware(middleware),
	  //for redux dev tools, remove when not needed! ONLY WORKS ON CHROME
	  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export {store, history}