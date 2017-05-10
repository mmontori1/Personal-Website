import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { 
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import { 
	FrontPage,
	Helog
} from './components';

let message = 'helog'
console.log(message)

const app = document.getElementById('app');
render(
	<Router>
		<div>
			<ul>
				<li><Link to="/">FrontPage</Link></li>
				<li><Link to="/onlyhelog">Helog</Link></li>
			</ul>
			<hr/>
			<Route path = "/" component = {FrontPage}/>
			<Route path = "/onlyhelog" component = {Helog}/>
		</div>
	</Router>
	, app);