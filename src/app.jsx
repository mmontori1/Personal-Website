import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { 
	BrowserRouter as Router,
	Route,
	// Link
} from 'react-router-dom'
import { 
	FrontPage,
	Helog,
	Links
} from './components';

let message = 'helog'
console.log(message)

const app = document.getElementById('app');
render(
	<Router>
			<div>
				<Links/>
				<Route path = "/frontpage" component = {FrontPage}/>
				<Route path = "/onlyhelog/:phrase" component = {Helog}/>
			</div>
	</Router>
	, app);