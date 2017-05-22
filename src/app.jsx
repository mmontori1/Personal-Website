import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {
	Header
} from './components';
// import{
// 	Home
// } from './pages';
import { store, history } from './store.js';
const app = document.getElementById('app');

render(
	<Provider store = {store}>
	    <ConnectedRouter history = {history}>
			<div>
				<Route /*exact*/ path = "/" component = {Header}/>
			</div>
		</ConnectedRouter>
  	</Provider>
, app);
