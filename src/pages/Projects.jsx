import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { PageContainer, WIP } from '../components';

/*
Content to add:
  -Paragraph talking about 
  -Link to my github to display other work
  -TBD, with more projects
    -Project components which have:
      -Name/Title
      -Picture
      -Little desc. about the project
*/

class Projects extends React.Component {
  componentDidMount() {
    if(this.props.menu){
      this.props.dispatch(toggleMenu(false));
    }
  }

	render(){
		return (
        <PageContainer>
          <WIP menu = {this.props.menu}/>
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

export default connect(mapStateToProps)(Projects)