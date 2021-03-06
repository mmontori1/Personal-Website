import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { Button, PageContainer, Section, WIP } from '../components';

const resume = require('../../static/resume.pdf');

const ResumeFile = styled.object`
	height: calc(100vh - 210px);
	width: 100%; 
`;

const ResumeLink = styled.a`
	display: inline-block;
	margin: auto;
	margin-left: 10px;
	padding: 2px;
	color: ${props => props.theme.primary};
	text-decoration: none;
	text-align: center;
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
				<Section hide title = "RESUME">
					<ResumeFile data = {resume} type="application/pdf">
						Your current browser doesn't support object tags. Use this link instead:
						<ResumeLink href = {resume} target="_blank"> 
							<Button>
								&nbsp;Resume Link&nbsp;
							</Button>
						</ResumeLink>
					</ResumeFile>
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