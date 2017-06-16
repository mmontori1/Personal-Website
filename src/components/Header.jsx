import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'
import { devices } from '../styles';

const NavBar = styled.ul`
	display: none;
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
	${devices.tablet`
		display: block;
	`}
`;

const MobileNav = styled.div`
	display: block;
	${devices.tablet`
		display: none;
	`}
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
	color: ${props => props.theme.primary};
	top: 0;
	left: 0;
	height: 66px;
	width: 120px;
	line-height: 66px;
	text-align: center;
	font-size: 40px;
	box-shadow: inset 0 -2px 0 ${props => props.theme.primary},
				inset -2px 0 0 ${props => props.theme.primary};
	background: ${props => props.theme.secondary};
`;

var hide = {
	bmMenu: {
		overflow: 'hidden'
	}
}

const Burger = styled.div`
	.bm-burger-button{
		position: fixed;
		width: 36px;
		height: 30px;
		top: 24px;
		right: 36px;
	}
	.bm-burger-bars{
		background: ${props => props.theme.primary}
	}
	.bm-cross-button{
		height: 24px;
		width: 24px;
	}
	.bm-cross{
		background: #bdc3c7;
	}
	.bm-menu{
		background: ${props => props.theme.primary};
		padding: 2.5em 1.5em 0;
		fontSize: 1.15em;
	}
	.bm-morph-shape{
		fill: ${props => props.theme.primary}
	}
	.bm-item-list{
		color: #b8b7ad;
		padding: 0.8em;
	}
	.bm-overlay{
		background: rgba(0, 0, 0, 0.3);
	}
`;

export default class Header extends React.Component {
	render(){
		return (
			<div>
				<NavBar>
					<Initials>MM</Initials>
					<StyledLink to="/">Home</StyledLink>
					<StyledLink to="/about">About</StyledLink>
					<StyledLink to="/projects">Projects</StyledLink>
					<StyledLink to="/resume">Resume</StyledLink>
					<StyledLink to="/extras">Extras</StyledLink>
				</NavBar>
				<MobileNav>
					<Initials>MM</Initials>
						<Burger>
							<Menu right styles = {hide}>
								<StyledLink to="/">Home</StyledLink>
								<StyledLink to="/about">About</StyledLink>
								<StyledLink to="/projects">Projects</StyledLink>
								<StyledLink to="/resume">Resume</StyledLink>
								<StyledLink to="/extras">Extras</StyledLink>
							</Menu>
						</Burger>
				</MobileNav>
			</div>
		)
	}
}