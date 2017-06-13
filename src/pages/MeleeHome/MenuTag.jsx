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

about: learn more about me!
projects: look at my work
resume: view my portfolio
extras: some other cool stuff
*/