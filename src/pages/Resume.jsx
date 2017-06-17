import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { PageContainer, Section, WIP } from '../components';

/*
Content to add:
  -Display resume PDF
*/

class Resume extends React.Component {
  componentDidMount() {
    if(this.props.menu){
      this.props.dispatch(toggleMenu(false));
    }
  }

	render(){
		return (
        <PageContainer>
          <Section title = "RESUME">
            <WIP menu = {this.props.menu}/>
          </Section>
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

export default connect(mapStateToProps)(Resume)