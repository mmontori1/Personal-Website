import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux';
// import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import {
	Header
} from './components';
// import{
// 	Home
// } from './pages';
// import { store, history } from './store.js';
const app = document.getElementById('app');

render(
	<Router>
		<div>
			<Route /*exact*/ path = "/" component = {Header}/>
		</div>
	</Router>
	, app);
