import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton.jsx';
import MenuTitle from './MenuTitle.jsx';

const Container = styled.div`
  padding: 0;
  padding-top: 50px;
  top: 0;
  width: 100%;
  height: 100%;
  margin-top: 120px;
  position: relative;
  @media screen and (min-width: 800px) {
    	display: none;
  	}
`;

export default class MenuScreenMobile extends React.Component {
	render(){
		return (
			<Container>
	    	    <MenuTitle/>
		        <MenuButton route = "/about">About</MenuButton>
		        <MenuButton route = "/projects">Projects</MenuButton>
		        <MenuButton route = "/resume">Resume</MenuButton>
		        <MenuButton route = "/extras">Extras</MenuButton>
		    </Container>
    	)
	}
}