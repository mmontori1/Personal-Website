import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  border-radius: 15px 50px 12px 40px;
  box-shadow: 0px 0px 10px;
  text-align: center;
  width: 25%;
  background: #04040C;
  font-size: 3vw;
  font-family: sans-serif;
  color: #FFC036;
  text-decoration: none;
  margin: 10px 10px 15px 10%;
  padding: 10px 24px;
  overflow: hidden;
  &:hover {
      color: #04040C;
      background: #FFDF00;
      box-shadow: inset 0 0 15px #000000;
  }
`;

export default class MenuButton extends React.Component {
	render(){
		return (
      <StyledLink to={this.props.route}>
        {this.props.children}
      </StyledLink>
		)
	}
}