import React from 'react';
import styled from 'styled-components';

const SmallSlant = styled.div`  
	background: rgba(48, 59, 140, .4);
	position: fixed;
	margin-top: -8.8vh;
	width: 1.5vw;
	height: 4%;
	border: 5px solid #253186;
	border-width: 6.5px;
	border-bottom: none;
	-webkit-transform: skew(-20deg);
	-moz-transform: skew(-20deg);
	-o-transform: skew(-20deg);
	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export default class SlantBorder extends React.Component {
	render(){
		const { val } = this.props;
		return (
			<SmallSlant style = {{marginLeft: val}}/>
		)
	}
}