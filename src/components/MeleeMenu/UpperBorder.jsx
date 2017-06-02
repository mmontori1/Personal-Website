import React from 'react';
import styled from 'styled-components';
import { SlantBorder } from './';

const BigSlant = styled.div`  
  background: rgba(48, 59, 140, .4);
  position: absolute;
  margin-top: -10.9vh;
  margin-left: 50%;
  width: 25.3vw;
  height: 5.3vh;
  border: 5px solid #253186;
  border-width: 6.5px;
  border-radius: 0px 8px 0px 0px;
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -o-transform: skew(-20deg);
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default class UpperBorder extends React.Component {
	render(){
    const { val } = this.props;
		return (
      <div>
      	<SlantBorder val = "20%"/>
        <SlantBorder val = "22%"/>
        <SlantBorder val = "24%"/>
        <BigSlant/>
      </div>
		)
	}
}