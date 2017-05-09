import React from 'react';
import { render } from 'react-dom';
import { 
	Helog,
	Name
} from './components';

let message = 'helog'
console.log(message)

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			name: "marhuelo"
		};
	}

	changeName(name){
		this.setState({name});
	}

	render() {
		return (
			<div>
				<Helog/>
				<Name changeName = {this.changeName.bind(this)} name = {this.state.name} last = "montori" />
			</div>
		);
	}
}

const app = document.getElementById('app');
render(<App/>, app);