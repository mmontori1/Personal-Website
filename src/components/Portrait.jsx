import React from 'react';
import styled from 'styled-components';

const Photo = styled.img`
	display: block;
	margin: auto;
	margin-top: 30px;
	margin-bottom: 30px;
	height: 200px;
	width: 200px;
	border: 3px solid ${props => props.theme.primary};
	border-radius: 50%;
	box-shadow: 0 0 20px ${props => props.theme.lightPrimary};
`;

const pic = require('../../static/portraits/portrait.jpg');

export default class Portrait extends React.Component {
	render(){
		return (
			<Photo src = {pic}/>
		)
	}
}