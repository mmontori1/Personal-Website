import React from 'react';

let change = 'switch'
let message = 'hello to helog.com'
// alert(message)

export default class Helog extends React.Component {
	constructor(){
		super();
		this.state = {
			phrase: "helog",
			tag: ".com"
		}
	}
	deltaPhrase(){
		if(this.state.phrase == "helog"){
			// console.log(change)
			setTimeout(() => {
				this.setState({phrase: "hello"});
			}, 2000)
		}
		else{
			// console.log(change)
			setTimeout(() => {
				this.setState({phrase: "helog"});
			}, 2000)
		}
	}
	rtnFunc(){ //example of a simple return func
		return 3
	}
	render() {
		// setTimeout(() => {
		// 	this.setState({tag: ".com"});
		// }, 3000)
		// console.log(this.props)
		this.deltaPhrase()
		return (
			<h1 style={{"textAlign" : "center"}}> {this.state.phrase + this.state.tag} </h1>
		);
	}
}