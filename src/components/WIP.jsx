import React from 'react';
import styled from 'styled-components';
import {
  Header
} from '../components';

const StyledDiv = styled.div`
  color: ${props => props.menu ? 'white' : 'black'};
  border: ${props => props.menu ? '2px solid white' : '2px solid black'};
  border-radius: 3px;
  text-align: center;
  margin: 10px
`;

export default class WIP extends React.Component {
	render(){
		return (
  			<StyledDiv menu = {this.props.menu}>
  				Page is a WIP
  			</StyledDiv>
		)
	}
}