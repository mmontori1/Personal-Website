import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: white;
  align: center;
  text-align: center;
  font-size: 3.5vw;
  font-style: oblique;
  font-family: sans-serif;
  position: absolute;
  width: 40%;
  margin-top: -12%;
  margin-left: -2%;
`;

export default class MenuTitle extends React.Component {
  render(){
    return (
      <Title>
        Main Menu
      </Title>
    )
  }
}