import React from 'react';

export default class Name extends React.Component {
	render() {
		return (
			<h1> this is {this.props.name} {this.props.last}'s website! </h1>
		);
	}
}