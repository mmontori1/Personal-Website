import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  border-radius: 15px 50px 12px 40px;
  box-shadow: 0px 0px 15px,
              2px 2px 5px,
              -2px -2px 5px;
  text-align: center;
  width: 45%;
  background: #04040C;
  font-size: 3vw;
  font-family: sans-serif;
  color: #FFC036;
  text-decoration: none;
  margin: 10px 10px 15px;
  padding: 10px 24px;
  overflow: hidden;
  &:hover {
      color: #04040C;
      background: #FFDF00;
      box-shadow: inset 2px 2px 20px #000000,
                  0px 0px 15px #000000;
  }
`;

export default class MenuButton extends React.Component {
	render(){
    const { route, val } = this.props;
		return (
        <StyledLink to = {route} style = {{marginLeft: val}}>
            {this.props.children}
        </StyledLink>
    )
	}
}