import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu, toggleTheme } from '../actions';
import { PageContainer, WIP } from '../components';
import { defaultTheme, steelTheme } from '../styles';

/*
Content to add:
  -Extra cool stuff that I like
    -Melee stuff
    -TBD
*/

class Extras extends React.Component {
  constructor(){
    super();
    this.handleTheme = this.handleTheme.bind(this);
  }

  componentDidMount() {
    if(this.props.menu){
      this.props.dispatch(toggleMenu(false));
    }
  }

  handleTheme(){
    if(this.props.theme.name == 'defaultTheme'){
      this.props.dispatch(toggleTheme(steelTheme));
    }
    else{
      this.props.dispatch(toggleTheme(defaultTheme));
    }
  }

	render(){
		return (
        <PageContainer>
          <WIP menu = {this.props.menu}/>
          <WIP menu = {this.props.menu}/>
          <WIP menu = {this.props.menu}/>
          <WIP menu = {this.props.menu}/>
          <button onClick = {this.handleTheme}> theme! </button>
        </PageContainer>
		)
	}
}

function mapStateToProps(state) {
    var { menu } = state.menu;
    var { theme } = state.theme;
    return{
    	menu,
      theme
    }
}

export default connect(mapStateToProps)(Extras)