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

const Button = styled.li`
	display: inline;
`;

const Word = styled.nav `
	display: inline;
	font-family: sans-serif;
    display: inline-block;
    color: aliceblue;
    text-align: center;
    padding: 12px 16px;
    &:hover {
	    background-color: #444;
    	text-decoration: underline;
	}
`;

export default class Header extends React.Component {
	render(){
		return (
				<NavBar>
					<Button><Link to="/"><Word>Home</Word></Link></Button>
					<Button><Link to="/about"><Word>About</Word></Link></Button>
					<Button><Link to="/projects"><Word>Projects</Word></Link></Button>
					<Button><Link to="/resume"><Word>Resume</Word></Link></Button>
				</NavBar>
		)
	}
}