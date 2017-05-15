import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux'
import { 
	BrowserRouter as Router,
	Route,
	// hashHistory,
} from 'react-router-dom'
// import { 
// } from './components';

const style = {
	textAlign: "center"
}
const app = document.getElementById('app');
render(
	<Provider>
		<div style = {style}>
			Page is a WIP
		</div>
	</Provider>
	, app);
