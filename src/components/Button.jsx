import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles';

const StyledButton = styled.div`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  cursor: pointer;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 3px;
  &:first-child {
    margin-top: 0;
  }
  ${devices.tablet`
    font-size: 20px;
  `}
`;

export default class Button extends React.Component {
	render(){
		return (
  			<StyledButton>
  				{this.props.children}
  			</StyledButton>
		)
	}
}