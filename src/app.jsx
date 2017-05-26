import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import{
	Container,
	Home,
	About,
	Projects,
	Resume,
	Extras
} from './pages';
import { store, history } from './store.js';
require('../static/favicon.ico');

const app = document.getElementById('app');

render(
	<Provider store = {store}>
	    <ConnectedRouter history = {history}>
			<Container>
				<Route exact path = "/" component = {Home}/>
				<Route path = "/about" component = {About}/>
				<Route path = "/projects" component = {Projects}/>
				<Route path = "/resume" component = {Resume}/>
				<Route path = "/extras" component = {Extras}/>
			</Container>
		</ConnectedRouter>
  	</Provider>
, app);
