import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import{
	MeleeHome,
	About,
	Projects,
	Resume,
	Extras
} from './pages';
import { store, history } from './store.js';

const app = document.getElementById('app');
const favicon = require('../static/favicon.ico');

render(
	<Provider store = {store}>
	    <ConnectedRouter history = {history}>
			<div>
				<Route exact path = "/" component = {About}/>
				<Route path = "/about" component = {About}/>
				<Route path = "/projects" component = {Projects}/>
				<Route path = "/resume" component = {Resume}/>
				<Route path = "/extras" component = {MeleeHome}/>
			</div>
		</ConnectedRouter>
  	</Provider>
, app);
