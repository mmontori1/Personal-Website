import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;
  padding-top: 40px;
`;

export default class PageContainer extends React.Component {
	render(){
		return (
  			<StyledDiv>
  				{this.props.children}
  			</StyledDiv>
		)
	}
}