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