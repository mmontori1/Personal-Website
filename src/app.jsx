import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import{
	Home
} from './pages';
const app = document.getElementById('app');
// const history = createHistory()
render(
	<Provider>
		<Router>
			<div>
				<Route exact path = "/" component = {Home}/>
			</div>
		</Router>
	</Provider>
	, app);
