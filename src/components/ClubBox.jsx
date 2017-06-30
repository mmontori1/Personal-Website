import React from 'react';
import styled from 'styled-components';

const ClubWrapper = styled.div`
	padding: 10px;
	font-size: 18px;
	flex: 1;
`;

const ClubTitle = styled.div`
	display: -ms-flex;
	display: -webkit-flex;
	display: flex;
	-ms-flex-align: center;
	-webkit-align-items: center;
	-webkit-box-align: center;
	align-items: center;
	margin-bottom: 5px;
	border-bottom: 1px solid ${props => props.theme.primary};
`;

const Logo = styled.img`
	height: 50px;
	width: 50px;
	margin: 10px;
	margin-right: 20px;
	border-radius: 50%;
	box-shadow: 0 0 20px ${props => props.theme.lightPrimary};
`;

export default class ContentBox extends React.Component {
	render(){
		return (
			<ClubWrapper>
				<ClubTitle>
					{this.props.image ? <Logo src = {this.props.image}/> : undefined}
					{this.props.title}
				</ClubTitle>
				{this.props.children}
			</ClubWrapper>
		)
	}
}