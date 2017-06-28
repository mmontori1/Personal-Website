import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles';

const Wrapper = styled.div`
	margin: auto;
	width: 80%;
	color: ${props => props.theme.primary};
`;

const SectionTitle = styled.h1`
	box-shadow: 0 2px 0 ${props => props.theme.primary};
`;

const Scroller = styled.div`
	height: calc(100vh - 210px);
	overflow: ${props => props.hide ? 'visible' : 'auto'};
	::-webkit-scrollbar{ 
		width: 12px; 
	}
	::-webkit-scrollbar-thumb{ 
		background-color: ${props => props.theme.primary}; 
	}
	::-webkit-scrollbar-track{ 
		background-color: ${props => props.theme.secondary}; 
	} 
	::-webkit-scrollbar-track:hover{ 
		background-color: #CCC; 
	}
`

export default class Section extends React.Component {
	render(){
		console.log(this.props.hide)
		return (
			<Wrapper>
				<SectionTitle> {this.props.title} </SectionTitle>
				<Scroller hide = {this.props.hide}>
					{this.props.children}
				</Scroller>
			</Wrapper>
		)
	}
}