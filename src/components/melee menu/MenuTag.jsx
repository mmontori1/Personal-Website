import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: white;
  border: 5px solid white;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  margin-left: -20px;
  position: absolute;
  font-size: 2vw;
  font-family: sans-serif;
`;

export default class MenuTag extends React.Component {
	render(){
		return (
    	<StyledDiv>
        Welcome!
    	</StyledDiv>
		)
	}
}

/*
  <StyledDiv>
    learn more about me!
  </StyledDiv>
  <StyledDiv>
    look at some of my work
  </StyledDiv>
  <StyledDiv>
    view my personal portfolio
  </StyledDiv>
  <StyledDiv>
    some other cool stuff
  </StyledDiv>
*/