import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {
	Header
} from './components';
import{
	Home
} from './pages';
import { store, history } from './store.js';
import { injectGlobal } from 'styled-components';

injectGlobal`
	body { 
		background-size: ${props => props.menu ? '40px 40px' : 'auto'};
	    background-image: 	${props => props.menu ? 'linear-gradient(to right, #282C43 1px, transparent 1px), linear-gradient(to bottom, #282C43 1px, transparent 1px)' : 'none'};
		background-color: ${props => props.menu ? '#101334' : 'transparent'};
	}
`;

const app = document.getElementById('app');

render(
	<Provider store = {store}>
	    <ConnectedRouter history = {history}>
			<div>
				<Route exact path = "/" component = {Home}/>
				<Route path = "/about" component = {Header}/>
				<Route path = "/projects" component = {Header}/>
				<Route path = "/resume" component = {Header}/>
			</div>
		</ConnectedRouter>
  	</Provider>
, app);
