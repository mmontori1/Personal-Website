import React from 'react';

export default class Name extends React.Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		const name = e.target.value;
		this.props.changeName(name);
	}

	render() {
		return (
			<div>
				<h1> this is {this.props.name}'s website! </h1>
				<input value = {this.props.name} onChange = {this.handleChange}/>
			</div>
		);
	}
}