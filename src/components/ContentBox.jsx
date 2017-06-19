import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  margin-right: 10px;
  padding: 20px;
  text-align: left;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 20px;
  border-style: solid;
  border-width: 2px 5px 2px 5px;
  border-radius: 3px;
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