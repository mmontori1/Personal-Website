// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducers'
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
const history = createHistory()
 
const store = createStore(
  connectRouter(history)(reducer),
  // initialState, once i have a state?
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions 
      // ... other middlewares ... 
    ),
  ),
)

export { store, history };
