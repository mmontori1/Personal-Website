import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { ContentBox, PageContainer, Section } from '../components';

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
          <Section title = "ABOUT">
            <ContentBox title = "Who am I?">
              <p>
                Hey! I'm Mariano Montori, a junior at the University of Michigan majoring in Computer Science.
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST
                HACKATHON ENTHUSIAST 
              </p>
            </ContentBox>
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