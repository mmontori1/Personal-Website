import React from 'react';
import styled from 'styled-components';

const BigSlant = styled.div`  
  background: rgba(48, 59, 140, .4);
  position: absolute;
  margin-top: -76px;
  margin-left: 38%;
  padding: 20px 10px;
  border: 5px solid #253186;
  border-width: 6.5px;
  border-bottom: none;
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -o-transform: skew(-20deg);
`;

export default class SlantBorder extends React.Component {
	render(){
    const { val } = this.props;
		return (
    	<BigSlant style = {{marginLeft: val}}/>
		)
	}
}