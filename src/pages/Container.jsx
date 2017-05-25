import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	toggleMenu
} from '../actions'

const Background = styled.div`
  position: fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: ${props => props.menu ? 'linear-gradient(0deg, #3030a9, #243380, #101334)': 'white'};
`;

/*
  possibilities:
    'linear-gradient(45deg, #3030a9, #243380, #101334)'
    'linear-gradient(0deg, #243380, #101334)'
*/

const Grid = styled.div`
  position: fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-size: ${props => props.menu ? '40px 40px' : 'auto'};
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
		return (
        <Background menu = {this.props.menu}>
          <Grid menu = {this.props.menu}>
            {this.props.children}
          </Grid>
        </Background>
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