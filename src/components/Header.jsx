import React from 'react';
import { Link } from 'react-router-dom'

const style = {
	display: "inline-block",
	margin: '10px'
}

export default class Header extends React.Component {
	render(){
		return (
			<div>
				<div>
					<div style = {style}><Link to="/">Home</Link></div>
					<div style = {style}><Link to="/about">About</Link></div>
					<div style = {style}><Link to="/projects">Projects</Link></div>
					<div style = {style}><Link to="/resume">Resume</Link></div>
				</div>
				<hr/>
			</div>
		)
	}
}

/*
	<li><Link to="/">Home</Link></li>
	<li><Link to="/about">About</Link></li>
	<li><Link to="/projects">Projects</Link></li>
	<li><Link to="/resume">Resume</Link></li>
*/