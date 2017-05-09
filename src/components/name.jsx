import React from 'react';

export default class Name extends React.Component {
	handleChange(e){
		const name = e.target.value;
		this.props.changeName(name);
	}

	render() {
		return (
			<div>
				<h1> this is {this.props.name}'s website! </h1>
				<input value = {this.props.name} onChange = {this.handleChange.bind(this)}/>
			</div>
		);
	}
}