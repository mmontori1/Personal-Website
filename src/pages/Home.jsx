import React from 'react';
import { connect } from 'react-redux';
import {
	toggleMenu
} from '../actions'
import {
  MenuButton,
  WIP
} from '../components';

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(toggleMenu(true));
  }

	render(){
		return (
        <div>
          <div>
            <MenuButton route = "/about">About</MenuButton>
            <MenuButton route = "/projects">Projects</MenuButton>
            <MenuButton route = "/resume">Resume</MenuButton>
            <MenuButton route = "/extras">Extras</MenuButton> 
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