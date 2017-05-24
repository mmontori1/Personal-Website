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

class About extends React.Component {
  componentDidMount() {
    this.props.dispatch(toggleMenu(false));
  }

	render(){
		return (
        <div>
          <Header/>
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

export default connect(mapStateToProps)(About)