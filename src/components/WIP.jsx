import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: ${props => props.theme.primary};
  border: 2px solid;
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