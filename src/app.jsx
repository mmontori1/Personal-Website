import React from 'react';
import { render } from 'react-dom';
import { 
	Helog,
	Name
} from './components';

let message = 'helog'
console.log(message)

export default class App extends React.Component {
	render() {
		const name = "marhuelo";
		return (
			<div>
				<Name name = "mariano" last = "montori" />
				<Name name = {name} last = "montori" />
				<Helog/>
			</div>
		);
	}
}

const app = document.getElementById('app');
render(<App/>, app);