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
	width: ${props => props.extend ? "65vw" : "auto"};
	${devices.tablet`
		display: -ms-flex;
		display: -webkit-flex;
		display: flex;
	`}
`;

const PaddedContent = styled.div`
	padding: 10px;
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
							I’m passionate about programming, primarily focused on game dev, web dev, and mobile dev, but 
							I’m always looking to learn more outside those fields as well!
							<p> You can contact me and see my work through the links at the footer! </p>
						</div>
					</ContentBox>
					<ContentBox title = "What do I do?">
						<div>
							<PaddedContent> 
								I love being an active member of the hacking community at the University of Michigan. 
							</PaddedContent> 
							<div>
								<PaddedContent> 
									I’m involved in various engineering clubs on campus: 
								</PaddedContent>
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
								<PaddedContent> 
									I also enjoy attending hackathons with my friends and other hackers from Michigan Hackers: 
								</PaddedContent>
								<PaddedContent>
									<li>SpartaHack @ MSU, Jan. 20-22 2017 </li>
									<li>HackIllinois @ UIUC, Feb. 24th-26th 2017 </li>
									<li>MHacks Nano (Online Summer Hackathon), June 19th-24th 2017 </li>
								</PaddedContent>
							</div>
							<div>
								<PaddedContent> 
									Outside of programming, I enjoy playing competitive, multiplayer games 
									such as Super Smash Bros. Melee and League of Legends as well as single player 
									adventure or platformers like The Legend of Zelda: Breath of the Wild, Super Mario 64,
									and Mega Man 3. I take a lot of insipiration from these games when I try to make my 
									own games.
								</PaddedContent>
							</div>
						</div>
					</ContentBox>
					<ContentBox title = "Skills">
						<div>
							<PaddedContent> 
								Here's a list of programming languages that I use as well as my other technical skills 
							</PaddedContent> 
							<FlexBox extend>
								<ClubBox title = "Proficient">
									<div>-&nbsp;C++ </div>
									<div>-&nbsp;HTML + CSS </div>
								</ClubBox>
								<ClubBox title = "Experienced">
									<div>-&nbsp;Unity + C# </div>
									<div>-&nbsp;React </div>
									<div>-&nbsp;Javascript </div>
									<div>-&nbsp;Python </div> 
								</ClubBox>
								<ClubBox title = "Beginner">
									<div>-&nbsp;Swift </div>
									<div>-&nbsp;Redux </div>
									<div>-&nbsp;Jinja </div> 
								</ClubBox>
							</FlexBox>
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