import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
	render(){
		return (
				<ul>
					<li><Link to="/"><nav>Home</nav></Link></li>
					<li><Link to="/about"><nav>About</nav></Link></li>
					<li><Link to="/projects"><nav>Projects</nav></Link></li>
					<li><Link to="/resume"><nav>Resume</nav></Link></li>
				</ul>
		)
	}
}