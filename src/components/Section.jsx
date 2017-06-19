import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  width: 80%;
  color: ${props => props.theme.primary};
`;

const SectionTitle = styled.h1`
  box-shadow: 0 2px 0 ${props => props.theme.primary};
`;

const Scroller = styled.div`
  height: 500px;
  overflow: auto;
  ::-webkit-scrollbar{ 
    width: 13px; 
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
		return (
  		<Wrapper>
        <SectionTitle> {this.props.title} </SectionTitle>
  			<Scroller>
            {this.props.children}
        </Scroller>
  		</Wrapper>
		)
	}
}