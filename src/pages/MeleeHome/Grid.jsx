import React from 'react';
import styled, { keyframes } from 'styled-components';

const GridMove = keyframes`
  0% {background-position: 0% 0%}
  100% {background-position: 100% 100%}
`;

const GridLayout = styled.div`
  position: fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-size: ${props => props.menu ? '40px 40px' : 'auto'};
  background-image: ${props => props.menu ? 'linear-gradient(to right, #282C43 1px, transparent 1px), linear-gradient(to bottom, #282C43 1px, transparent 1px)' : 'none'};
  animation: ${GridMove} 40s linear infinite;
`;

export default class Grid extends React.Component {
  render(){
    return (
      <GridLayout menu = {this.props.menu}/>
    )
  }
}