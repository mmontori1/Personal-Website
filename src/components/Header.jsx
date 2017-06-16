import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.ul`
    position: fixed;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    padding: 0;
    list-style-type: none;
    background-color: ${props => props.theme.primary};
    text-align: right;
    z-index: 1000;
`;

const StyledLink = styled(Link)`
	display: inline-block;
	font-family: sans-serif;
    color: ${props => props.theme.secondary};
    text-align: center;
    padding: 24px 16px;
    text-decoration: none;
    &:hover {
	    background-color: ${props => props.theme.lightPrimary};
      	box-shadow: inset 0 -4px 0 ${props => props.theme.secondary};
	}
`;

const Initials = styled.div`
    position: fixed;
    display: inline-block;
    top: 0;
    left: 0;
    height: 66px;
    width: 120px;
    line-height: 66px;
    text-align: center;
    font-size: 40px;
    box-shadow: inset 0 -2px 0 ${props => props.theme.primary};
    background: ${props => props.theme.secondary};
`;

export default class Header extends React.Component {
	render(){
		return (
    		<NavBar>
                <Initials>MM</Initials>
    			<StyledLink to="/">Home</StyledLink>
    			<StyledLink to="/about">About</StyledLink>
    			<StyledLink to="/projects">Projects</StyledLink>
    			<StyledLink to="/resume">Resume</StyledLink>
    			<StyledLink to="/extras">Extras</StyledLink>
    		</NavBar>
		)
	}
}