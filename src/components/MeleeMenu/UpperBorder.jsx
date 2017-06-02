import React from 'react';
import styled from 'styled-components';
import { SlantBorder } from './';

const Slant = styled.div`  
  background: rgba(48, 59, 140, .4);
  position: absolute;
  margin-top: -76px;
  margin-left: 50%;
  padding: 22px 162px;
  border: 5px solid #253186;
  border-width: 6.5px;
  border-radius: 0px 8px 0px 0px;
  border-bottom: none;
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -o-transform: skew(-20deg);
`;

export default class UpperBorder extends React.Component {
	render(){
    const { val } = this.props;
		return (
      <div>
      	<SlantBorder val = "38%"/>
        <SlantBorder val = "42%"/>
        <SlantBorder val = "46%"/>
        <Slant/>
      </div>
		)
	}
}