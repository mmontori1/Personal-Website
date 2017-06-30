import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fader = keyframes`${fadeIn}`;

const Wrapper = styled.div`
	position: relative;
	padding-top: 60px;
	width: 100%;
	animation: 2s ${fader} normal 1 ease;
`;

export default class PageContainer extends React.Component {
	render(){
		return (
			<Wrapper>
				{this.props.children}
			</Wrapper>
		)
	}
}