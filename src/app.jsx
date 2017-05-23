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
import { injectGlobal } from 'styled-components';

injectGlobal`
	body { 
		background-size: 40px 40px;
	    background-image: 	linear-gradient(to right, #282C43 1px, transparent 1px), 
	    					linear-gradient(to bottom, #282C43 1px, transparent 1px);
		background-color: #101334
	}
`;

const app = document.getElementById('app');

render(
	<Provider store = {store}>
	    <ConnectedRouter history = {history}>
			<div>
				<Route /*exact*/ path = "/" component = {Header}/>
				<Route /*exact*/ path = "/about" component = {Header}/>
				<Route /*exact*/ path = "/projects" component = {Header}/>
				<Route /*exact*/ path = "/resume" component = {Header}/>
			</div>
		</ConnectedRouter>
  	</Provider>
, app);


	    // background-size: 40px 40px;
	    // background-image: 	linear-gradient(to right, #282C43 1px, transparent 1px), 
	    // 					linear-gradient(to bottom, #282C43 1px, transparent 1px);