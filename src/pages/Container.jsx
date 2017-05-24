import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	toggleMenu
} from '../actions'

const StyledDiv = styled.div`
  position: fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-size: ${props => props.menu ? '40px 40px' : 'auto'};
  background-color: ${props => props.menu ? '#101334' : 'white'};
  background-image: ${props => props.menu ? 'linear-gradient(to right, #282C43 1px, transparent 1px), linear-gradient(to bottom, #282C43 1px, transparent 1px)' : 'none'};
`;

class Container extends React.Component {
	componentDidMount() {
    if(this.props.pathname == '/')
      this.props.dispatch(toggleMenu(true));
    else{
      this.props.dispatch(toggleMenu(false));
    }
  }

	render(){
    // console.log(this.props.menu)
		return (
        <StyledDiv menu = {this.props.menu}>
          {this.props.children}
        </StyledDiv>
		)
	}
}

function mapStateToProps(state) {
    var { pathname } = state.router.location;
    var { menu } = state.menu;
    return{
      pathname,
      menu
    }
}

export default connect(mapStateToProps)(Container)