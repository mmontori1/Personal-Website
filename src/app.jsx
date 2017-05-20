import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import{
	Home
} from './pages';
import { store, history } from './store.js';
const app = document.getElementById('app');

render(
	<Provider store = {store}>
		<ConnectedRouter history = {history}>
			<div>
				<Route path = '/' component = {Home}/>
				<Route path = '/cats' component = {Home}/>
			</div>
		</ConnectedRouter>	
	</Provider>
	, app);
