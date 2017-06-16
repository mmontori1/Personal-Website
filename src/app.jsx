import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store.js';
import{
	Container,
	Home,
	About,
	Projects,
	Resume,
	Extras,
	MeleeHome
} from './pages';

const app = document.getElementById('app');
const favicon = require('../static/favicon.ico');

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
