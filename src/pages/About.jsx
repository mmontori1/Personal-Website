import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { ClubBox, ContentBox, PageContainer, Section } from '../components';
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
		-Devpost
*/

const hackersLogo = require('../../static/logos/hackers_logo.jpg');
const mhacksLogo = require('../../static/logos/mhacks_logo.jpg');
const shpeLogo = require('../../static/logos/shpe_logo.png');

const FlexBox = styled.div`
	display: block;
	${devices.tablet`
		display: -ms-flex;
		display: -webkit-flex;
		display: flex;
	`}
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
						<div>
							Hey! I'm Mariano Montori, a junior at the University of Michigan majoring in Computer Science. 
							I come from all parts of Southern Florida, but I am originally from Peru where I spent my 
							early childhood. I also went to high school at Phillips Exeter Academy in Exeter, New Hampshire.
							I’m passionate about programming primarily focused on game dev, web dev, and mobile dev, but 
							I’m always looking to learn more outside those fields as well!
							<p> You can contact me and see my work at the bottom! </p>
						</div>
					</ContentBox>
					<ContentBox title = "What do I do?">
						<div>
							<p> I love being an active member of the hacking community at the University of Michigan. </p> 
							<div>
								<p> I’m involved in various engineering clubs on campus: </p>
								<FlexBox>
									<ClubBox title = "Michigan Hackers" image = {hackersLogo}>
										<div>-&nbsp;2017-2018 Vice President </div>
										<div>-&nbsp;2016-2017 Core Team Member </div>
									</ClubBox>
									<ClubBox title = "MHacks" image = {mhacksLogo}>
										<div>-&nbsp;2017-2018 Hardware Lead </div>
										<div>-&nbsp;2016-2017 Core Team Member </div>
									</ClubBox>
									<ClubBox title = "Society of Hispanic Professional Engineers" image = {shpeLogo}>
										<div>-&nbsp;2017-2018 Member </div>
										<div>-&nbsp;2016-2017 LeaderSHPE Team Member </div>
									</ClubBox>
								</FlexBox>
							</div>
							<div>
								<p> I also enjoy attending hackathons with my friends and other hackers from Michigan Hackers: </p>
								<ul>
									<li>SpartaHack @ MSU, Jan. 20-22 2017 </li>
									<li>HackIllinois @ UIUC, Feb. 24th-26th 2017 </li>
									<li>MHacks Nano (Online Summer Hackathon), June 19th-24th 2017 </li>
								</ul>
							</div>
						</div>
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