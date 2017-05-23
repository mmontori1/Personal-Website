import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavBar = styled.ul`
	list-style-type: none;
    background-color: #222;
    text-align: right;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
	right: 0;
`;

const StyledLink = styled(Link)`
	font-family: sans-serif;
    display: inline-block;
    color: aliceblue;
    text-align: center;
    padding: 12px 16px;
    text-decoration: none;
    &:hover {
	    background-color: #444;
    	text-decoration: underline;
	}
`;
export default class Header extends React.Component {
	render(){
		return (
				<NavBar>
					<StyledLink to="/">Home</StyledLink>
					<StyledLink to="/about">About</StyledLink>
					<StyledLink to="/projects">Projects</StyledLink>
					<StyledLink to="/resume">Resume</StyledLink>
				</NavBar>
		)
	}
}