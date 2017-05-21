import React from 'react';
import { 
	Helog,
	Name
} from './';

export default class FrontPage extends React.Component {
	constructor(){
		super();
		this.state = {
			name: "marhuelo"
		};
		this.changeName = this.changeName.bind(this)
	}

	changeName(name){
		this.setState({name});
	}

	render() {
		return (
			<div>
				<Helog/>
				<Name changeName = {this.changeName} name = {this.state.name} last = "montori" />
			</div>
		);
	}
}