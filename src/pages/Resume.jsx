import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { PageContainer, Section, WIP } from '../components';

const resume = require('../../static/resume.pdf');

const ResumeFile = styled.object`
  width: 100%; 
  height: 490px;
`;

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
            <ResumeFile data = {resume} type="application/pdf"/>
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