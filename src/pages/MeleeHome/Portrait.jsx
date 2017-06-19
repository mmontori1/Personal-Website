import React from 'react';
import styled from 'styled-components';

const Photo = styled.img`
  display: block;
  position: absolute;
  width: 30%;
  height: 60%;
  margin-top: 5%;
  margin-left: 55%;
  border: 5px solid black;
  border-radius: 5px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const picture = require('../../../static/portraits/portrait-old.jpg');

export default class Portrait extends React.Component {
  render(){
    return (
      <Photo src = {picture}/>
    )
  }
}