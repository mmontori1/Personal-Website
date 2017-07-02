import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { stack as Menu } from 'react-burger-menu'
import { devices } from '../styles';
import { bounceInDown } from 'react-animations';

const animate = keyframes`${bounceInDown}`;

const Wrapper = styled.div`
	animation: 1s ${animate} ;
`;

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
	z-index: 100;
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
	text-decoration: none;
	font-size: 40px;
	z-index: 200;
	box-shadow: inset 0 -2px 0 ${props => props.theme.primary},
				inset -2px 0 0 ${props => props.theme.primary};
	background: ${props => props.theme.secondary};
	// &:hover{
	// 	color: ${props => props.theme.secondary};
	// 	background: ${props => props.theme.primary};
	// }
`;

var hide = {
	bmMenuWrap: {
		zIndex: '300',
	},
	bmOverlay: {
		zIndex: '250',
	},
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
	constructor(){
		super();
		this.state = {
			falco: false
		}
		this.falcoAppears = this.falcoAppears.bind(this);
		this.falcoDisappears = this.falcoDisappears.bind(this);
	}

	falcoAppears(){
		if(!this.state.falco){
			this.setState({falco: true});
			document.getElementById('falco').style.cssText = "display: -ms-flex; display: -webkit-flex; display: flex;"
			setTimeout(this.falcoDisappears, 2000);
		}
	}

	falcoDisappears(){
		this.setState({falco: false});
		document.getElementById('falco').style.display = "none";
	}

	render(){
		return (
			<Wrapper>					
				<Initials>MM</Initials>
				<NavBar>
					<StyledLink to="/"><Icon>&#xe88a;</Icon> Home</StyledLink>
					<StyledLink to="/about"><Icon>&#xe7fd;</Icon> About</StyledLink>
					<StyledLink to="/resume"><Icon>&#xe873;</Icon> Resume</StyledLink>
					<StyledLink to="/extras"><Icon>&#xE7F2;</Icon> Extras</StyledLink>
				</NavBar>
				<MobileNav>
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
							<StyledLink to="/resume">
								<IconWrapper>
									<Icon>&#xe873;</Icon>
								</IconWrapper>
								Resume
							</StyledLink>
							<StyledLink to="/extras">
								<IconWrapper>
									<Icon>&#xE7F2;</Icon>
								</IconWrapper>
								Extras
							</StyledLink>
						</Menu>
					</Burger>
				</MobileNav>
			</Wrapper>
		)
	}
}