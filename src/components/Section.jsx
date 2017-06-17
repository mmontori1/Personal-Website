import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  color: ${props => props.theme.primary};
  height: 80%;
  width: 80%;
`;

const SectionTitle = styled.h1`
  box-shadow: 0 2px 0 ${props => props.theme.primary};
`;

export default class Section extends React.Component {
	render(){
		return (
  		<Wrapper>
        <SectionTitle> {this.props.title} </SectionTitle>
  				{this.props.children}
  		</Wrapper>
		)
	}
}