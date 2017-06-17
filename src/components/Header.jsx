import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { stack as Menu } from 'react-burger-menu'
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
	color: ${props => props.theme.secondary};
	padding: 22px 16px;
	text-align: left;
	text-decoration: none;
	&:hover {
		background-color: ${props => props.theme.lightPrimary};
	}
	${devices.tablet`
		text-align: center;
		&:hover {
			box-shadow: inset 0 -4px 0 ${props => props.theme.secondary};
		}
	`}
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

const IconWrapper = styled.div`
	display: inline-block;
	width: 40%;
`;

const Icon = styled.i`
	display: inline-flex;
    vertical-align: middle;
	font-family: Material Icons;
	font-style: normal;
	font-weight: 100;
	padding-bottom: 2.5px;
`;

export default class Header extends React.Component {
	render(){
		return (
			<div>
				<NavBar>
					<Initials>MM</Initials>
					<StyledLink to="/"><Icon>&#xe88a;</Icon> Home</StyledLink>
					<StyledLink to="/about"><Icon>&#xe7fd;</Icon> About</StyledLink>
					<StyledLink to="/projects"><Icon>&#xe1b1;</Icon> Projects</StyledLink>
					<StyledLink to="/resume"><Icon>&#xe873;</Icon> Resume</StyledLink>
					<StyledLink to="/extras"><Icon>&#xe24e;</Icon> Extras</StyledLink>
				</NavBar>
				<MobileNav>
					<Initials>MM</Initials>
						<Burger>
							<Menu right styles = {hide}>
								<StyledLink to="/">
									<IconWrapper>
										<Icon>&#xe88a;</Icon>
									</IconWrapper>
									Home
								</StyledLink>
								<StyledLink to="/about">
									<IconWrapper>
										<Icon>&#xe7fd;</Icon>
									</IconWrapper>
									About
								</StyledLink>
								<StyledLink to="/projects">
									<IconWrapper>
										<Icon>&#xe1b1;</Icon>
									</IconWrapper>
									Projects
								</StyledLink>
								<StyledLink to="/resume">
									<IconWrapper>
										<Icon>&#xe873;</Icon>
									</IconWrapper>
									Resume
								</StyledLink>
								<StyledLink to="/extras">
									<IconWrapper>
										<Icon>&#xe24e;</Icon>
									</IconWrapper>
									Extras
								</StyledLink>
							</Menu>
						</Burger>
				</MobileNav>
			</div>
		)
	}
}