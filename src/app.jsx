import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { 
	BrowserRouter as Router,
	Route,
	// hashHistory,
	// Link
} from 'react-router-dom'
import { 
	FrontPage,
	Helog,
	Links
} from './components';

let message = 'helog'
// console.log(message)

const app = document.getElementById('app');
render(
	<Router>
			<div>
				<Route path = "/" component = {Links}/>
				<Route path = "/frontpage" component = {FrontPage}/>
				<Route path = "/onlyhelog/:phrase" component = {Helog}/>
			</div>
	</Router>
	, app);

/*
<Route path = "/" component = {Links}/>
is the same as doing <Links/>
since its the beginning path
*/