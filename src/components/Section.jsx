import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  color: ${props => props.theme.primary};
  width: 80%;
`;

const SectionTitle = styled.h1`
  box-shadow: 0 2px 0 ${props => props.theme.primary};
`;

const Scroller = styled.div`
  overflow: auto;
  height: 500px;
`

export default class Section extends React.Component {
	render(){
		return (
  		<Wrapper>
        <SectionTitle> {this.props.title} </SectionTitle>
  			<Scroller> {this.props.children} </Scroller>
  		</Wrapper>
		)
	}
}