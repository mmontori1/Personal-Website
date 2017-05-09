import React from 'react';

let change = 'switch'
let message = 'hello to helog.com'
// alert(message)

export default class Helog extends React.Component {
	constructor(){
		super();
		this.state = {
			phrase: "hello",
			tag: ".com"
		}
	}
	deltaPhrase(){
		if(this.state.phrase == "helog"){
			// console.log(change)
			setTimeout(() => {
				this.setState({phrase: "hello"});
			}, 1000)
		}
		else{
			var time = 1000 //Math.floor(10000 * ((Math.random() * 10) + 1));
			// console.log(time)
			setTimeout(() => {
				this.setState({phrase: "helog"});
			}, time)
		}
	}
	render() {
		this.deltaPhrase()
		return (
			<h1 /*style={{"textAlign" : "center"}}*/> {this.state.phrase} </h1>
		);
	}
}