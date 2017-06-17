import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  border-style: solid;
  border-width: 2px 5px 2px 5px;
  border-radius: 3px;
  text-align: left;
  font-size: 20px;
  padding: 20px;
`;


export default class ContentBox extends React.Component {
	render(){
		return (
      <div>
        <h2> {this.props.title} </h2>
  			<Wrapper>
  				{this.props.children}
  			</Wrapper>
      </div>
		)
	}
}