import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {
	Header
} from './components';
import{
	Container,
	Home,
	About
} from './pages';
import { store, history } from './store.js';

const app = document.getElementById('app');

render(
	<Provider store = {store}>
	    <ConnectedRouter history = {history}>
			<Container>
				<Route exact path = "/" component = {Home}/>
				<Route path = "/about" component = {About}/>
				<Route path = "/projects" component = {Header}/>
				<Route path = "/resume" component = {Header}/>
			</Container>
		</ConnectedRouter>
  	</Provider>
, app);
