import React from 'react';

let change = 'switch'
let message = 'hello to helog.com'
var hello = "hello"
const helogStyle = {
	textAlign: "center",
	color: "blue"
};

export default class Helog extends React.Component {
	constructor(){
		super();
		this.state = {
			phrase: "helog",
			tag: ".com"
		}
		this.nextPhrase = this.nextPhrase.bind(this)
		this.deltaPhrase = this.deltaPhrase.bind(this)
	}

	nextPhrase(){
		if(this.props.match != undefined){
			hello = this.props.match.params.phrase
		}
		else{
			hello = "hello"
		}
	}

	deltaPhrase(){
		if(this.state.phrase == "helog"){
			setTimeout(() => {
				this.setState({phrase: hello});
			}, 1000)
		}
		else{
			var time = 1000
			setTimeout(() => {
				this.setState({phrase: "helog"});
			}, time)
		}
	}

	componentDidMount(){
		this.nextPhrase()
		this.deltaPhrase()
	}
	render() {
		return (
			<h1 style = {helogStyle}> {this.state.phrase} </h1>
		);
	}
}