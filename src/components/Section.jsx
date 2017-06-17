import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  color: ${props => props.theme.primary};
  height: 80%;
  width: 80%;
`;

export default class Section extends React.Component {
	render(){
		return (
  		<Wrapper>
        <h1> {this.props.title} </h1>
  				{this.props.children}
  		</Wrapper>
		)
	}
}