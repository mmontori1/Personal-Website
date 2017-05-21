import React from 'react';
import { 
	// BrowserRouter as Router,
	// Route,
	Link
} from 'react-router-dom'

export default class Links extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/frontpage">FrontPage</Link></li>
					<li><Link to="/onlyhelog/bark">Helog</Link></li>
				</ul>
				<hr/>
			</div>
		);
	}
}