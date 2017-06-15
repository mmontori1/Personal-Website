import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import {
  PageContainer,
  WIP
} from '../components';

/*
Content to add:
  -About Me Paragraph
    -UMich Student
      -Year/Grade
      -Major
      -Other Info?
    -Clubs
      -Hackers VP
      -MHacks Hardware Lead
    -Hackathons
      -Which I've attended
    -What I like to hack
      -Unity
      -Web Dev
      -Experience with C++ other stuff
    -Games
  -Contact Info
    -Email
    -Facebook
    -Github
    -LinkedIn
*/

class About extends React.Component {
  componentDidMount() {
    if(this.props.menu){
      this.props.dispatch(toggleMenu(false));
    }
  }

	render(){
		return (
        <PageContainer>
  				<WIP menu = {this.props.menu}/>
        </PageContainer>
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