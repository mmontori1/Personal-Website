import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { ContentBox, PageContainer, Section } from '../components';
import { devices } from '../styles';

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

const hackersLogo = require('../../static/logos/hackers_logo.jpg');
const mhacksLogo = require('../../static/logos/mhacks_logo.jpg');
const shpeLogo = require('../../static/logos/shpe_logo.png');

const Text = styled.p`
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0 0 20px ${props => props.theme.lightPrimary};
  margin: 10px;
  margin-right: 20px;
`;

const FlexBox = styled.div`
  display: block;
  ${devices.tablet`
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
  `}
`;

const ClubWrapper = styled.div`
  font-size: 18px;
  padding: 10px;
`;

const ClubTitle = styled.div`
  border-bottom: 1px solid ${props => props.theme.primary};
  vertical-align: center;
  margin-bottom: 5px;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
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
            <ContentBox title = "Who am I?">
              <Text>
                Hey! I'm Mariano Montori, a junior at the University of Michigan majoring in Computer Science. 
                I come from all parts of Southern Florida, but I am originally from Peru where I spent my 
                early childhood. I also went to high school at Phillips Exeter Academy in Exeter, New Hampshire.
                I’m passionate about programming primarily focused on game dev, web dev, and mobile dev, but 
                I’m always looking to learn more outside those fields as well!
              </Text>
            </ContentBox>
            <ContentBox title = "What do I do?">
              <div>
                At the University of Michigan, I’m involved in various clubs:
                <FlexBox>
                  <ClubWrapper>
                    <ClubTitle>
                      <Logo src = {hackersLogo}/> 
                      Michigan Hackers
                    </ClubTitle>
                    <div>-&nbsp;2017-2018 Vice President </div>
                    <div>-&nbsp;2016-2017 Core Team Member </div>
                  </ClubWrapper>
                  <ClubWrapper>
                    <ClubTitle>
                      <Logo src = {mhacksLogo}/>
                      MHacks
                    </ClubTitle>
                    <div>-&nbsp;2017-2018 Hardware Lead </div>
                    <div>-&nbsp;2016-2017 Core Team Member </div>
                  </ClubWrapper>
                  <ClubWrapper>
                    <ClubTitle> 
                      <Logo src = {shpeLogo}/>
                      Society of Hispanic Professional Engineers
                    </ClubTitle>
                    <div>-&nbsp;2017-2018 Club Member </div>
                    <div>-&nbsp;2016-2017 LeaderSHPE Team Member </div>
                  </ClubWrapper>
                </FlexBox>
              </div>
            </ContentBox>
            <ContentBox title = "Contact Me">
              <p>
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