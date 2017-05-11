import React from 'react';

let change = 'switch'
let message = 'hello to helog.com'
var hello = "hello"
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
				this.setState({phrase: hello});
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
		const helogStyle = {
			textAlign: "center",
			color: "blue"
		};
		if(this.props.match != undefined){
			hello = this.props.match.params.phrase
		}
		else{
			hello = "hello"
		}
		this.deltaPhrase()
		return (
			<h1 style = {helogStyle}> {this.state.phrase} </h1>
		);
	}
}