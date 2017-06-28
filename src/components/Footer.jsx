import React from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';
import FooterIcon from './FooterIcon.jsx';
import { devices } from '../styles';
import mailLogo from '../../static/logos/mail_icon.svg'
import githubLogo from '../../static/logos/github_icon.svg';
import linkedInLogo from '../../static/logos/linkedIn_icon.svg';
import devpostLogo from '../../static/logos/devpost_icon.svg';

const Wrapper = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${props => props.theme.secondary};
	text-align: center;
`;

const LinkWrapper  = styled.div`
	display: inline-block;
`;

const Link = styled.a`
	display: inline-block;
	margin: 5px 10px 5px;
	color: ${props => props.theme.primary};
	&:hover{
		color: ${props => props.theme.lightPrimary};
	}
	${devices.small`
		margin: 5px 20px 5px;
	`}
	${devices.tablet`
		margin: 5px 40px 5px;
	`}
`;

class Footer extends React.Component {
	render(){
		return (
			<Wrapper>
				<LinkWrapper>
					<Link href = "mailto:mmontori@umich.edu">
						<FooterIcon svg = {mailLogo} fill = "currentcolor"/>
					</Link>
					<Link href = "https://www.github.com/mmontori1">
						<FooterIcon svg = {githubLogo} fill = "currentcolor"/>
					</Link>
				</LinkWrapper>
				<LinkWrapper>
					<Link href = "https://www.linkedin.com/in/mariano-montori-37a2a5127/">
						<FooterIcon svg = {linkedInLogo} fill = "currentcolor"/>
					</Link>
					<Link href = "https://devpost.com/mmontori1">
						<FooterIcon svg = {devpostLogo} fill = "currentcolor"/>
					</Link>
				</LinkWrapper>
			</Wrapper>
		)
	}
}


export default withTheme(Footer)