import { createStore } from "redux";

const reducer = function(state, action){
	if(action.type === "INC"){
		console.log(state + " + " + action.payload)
		return state + action.payload
	}
	if(action.type === "DEC"){
		console.log(state + " - " + action.payload)
		return state - action.payload
	}
	console.log("no change, payload: " + action.payload)
	return state
}

const store = createStore(reducer, 0);

store.subscribe(() => {
	console.log("store change: ", store.getState())
})

store.dispatch({"type": "INC", "payload": 10})
store.dispatch({"type": "DEC", "payload": 6})
store.dispatch({"type": "N/A", "payload": 2})


/*
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
*/
/*
<Route path = "/" component = {Links}/>
is the same as doing <Links/>
since its the beginning path
*/