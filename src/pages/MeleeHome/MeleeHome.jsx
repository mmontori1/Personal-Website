import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	toggleMenu
} from '../../actions';
import {
  MenuScreen
} from './';
import {
  Grid,
} from '../../components/MeleeMenu';

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

class MeleeHome extends React.Component {
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
          <Grid menu = {this.props.menu}/>
          <MenuScreen/>
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

export default connect(mapStateToProps)(MeleeHome)