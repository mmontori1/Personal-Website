import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	toggleMenu
} from '../actions'
import {
  Header,
  WIP
} from '../components';

/*
Content to add:
  -Extra cool stuff that I like
    -Melee stuff
    -TBD
*/

class Extras extends React.Component {
  componentDidMount() {
    this.props.dispatch(toggleMenu(false));
  }

	render(){
		return (
        <div>
          <Header/>
          <WIP menu = {this.props.menu}/>
          <WIP menu = {this.props.menu}/>
          <WIP menu = {this.props.menu}/>
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

export default connect(mapStateToProps)(Extras)