import React from 'react';
import { Link } from 'react-router-dom'

const blockStyle = {
	textAlign: 'right'
}

const linkStyle = {
	margin: '10px',
}

export default class Header extends React.Component {
	render(){
		return (
			<div>
				<div style = {blockStyle}>
					<span style = {linkStyle}><Link to="/">Home</Link></span>
					<span style = {linkStyle}><Link to="/about">About</Link></span>
					<span style = {linkStyle}><Link to="/projects">Projects</Link></span>
					<span style = {linkStyle}><Link to="/resume">Resume</Link></span>
				</div>
				<hr/>
			</div>
		)
	}
}