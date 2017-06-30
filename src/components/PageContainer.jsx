import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { devices } from '../styles';

const falco = require('../../static/falco.gif');
const fader = keyframes`${fadeIn}`;

const Wrapper = styled.div`
	position: relative;
	padding-top: 60px;
	width: 100%;
	animation: 2s ${fader} normal 1 ease;
`;

const Falco = styled.div`
	display: none;
	position: fixed;
	top: 50%;
	left: 50%;
	height: 5em;
	width: 60vw;
	vertical-align: middle;
	text-align: center;
	font-size: 20px;
	margin: 0 auto;
	z-index: 4000;
	background: rgba(80, 52, 239, 1);
	transform: translate(-50%, 0);
	border: 5px solid #253186;
	border-width: 2px;
	border-radius: 7px;
	box-shadow: 0px 0px 10px 0px #253186;
	animation: 1s ${fader} normal 1 ease;
	${devices.tablet`
		width: 30vw;
	`}
`;

const Title = styled.p`
	position: absolute;
	margin: 0;
	margin-left: 5.2em;
	color: yellow;
	display: block;
`;

const StyledGif = styled.img`
	display: block;
	height: 5em;
	width: 5em;
`;

const TextBox = styled.p`
	position: absolute;
	margin: 0;
	margin-left: 5.2em;
	left: 0;
	bottom: 10%;
	display: inline;
`;

export default class PageContainer extends React.Component {
	render(){
		return (
			<Wrapper>
				<Falco id="falco">
					<Title> FALCO </Title>
					<TextBox> Melee Falco best character </TextBox>
					<StyledGif src = {falco}/>
				</Falco>
				{this.props.children}
			</Wrapper>
		)
	}
}