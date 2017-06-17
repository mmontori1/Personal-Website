import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { PageContainer, Section } from '../components';

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

const StyledParagraph = styled.p`
  margin: auto;
  border-style: solid;
  border-width: 2px 5px 2px 5px;
  border-radius: 3px;
  text-align: left;
  font-size: 20px;
  padding: 20px;
`;

class About extends React.Component {
  componentDidMount() {
    if(this.props.menu){
      this.props.dispatch(toggleMenu(false));
    }
  }

	render(){
		return (
        <PageContainer>
          <Section title = "ABOUT">
            <StyledParagraph> 
                Hey! I'm Mariano Montori, a junior at the University of Michigan majoring in Computer Science. 
                I
            </StyledParagraph>
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

export default connect(mapStateToProps)(About)