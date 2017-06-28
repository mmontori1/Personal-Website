import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	padding-top: 60px;
	width: 100%;
`;

export default class PageContainer extends React.Component {
	render(){
		return (
			<Wrapper>
				{this.props.children}
			</Wrapper>
		)
	}
}