import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {
	toggleMenu
} from '../actions'
import {
  WIP
} from '../components';

const StyledLink = styled(Link)`
  display: block;
  border-radius: 15px 50px 12px 40px;
  box-shadow: 0px 0px 10px;
  text-align: center;
  width: 25%;
  background: #04040C;
  font-size: 3vw;
  font-family: sans-serif;
  color: #FFC036;
  text-decoration: none;
  margin: 10px 10px 15px 10%;
  padding: 10px 24px;
  overflow: hidden;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(toggleMenu(true));
  }

	render(){
		return (
        <div>
          <div>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/resume">Resume</StyledLink>
            <StyledLink to="/extras">Extras</StyledLink> 
          </div>
          <WIP menu = {this.props.menu}/>
        </div>
		)
	}
}

function mapStateToProps(state) {
    var { menu } = state.menu;
    return{
    	menu
    }
}

export default connect(mapStateToProps)(Home)