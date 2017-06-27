import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'styled-components';
import SVGInline from 'react-svg-inline';
import mailLogo from '../../static/logos/mail_icon.svg'
import githubLogo from '../../static/logos/github_icon.svg';
import linkedInLogo from '../../static/logos/linkedIn_icon.svg';
import devpostLogo from '../../static/logos/devpost_icon.svg';

const Wrapper = styled.div`
	display: -ms-flex;
	display: -webkit-flex;
	display: flex;
	position: fixed;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 0);
	margin: 0;
	padding: 0;
`;

const Link = styled.a`
	margin: 40px 40px 10px 10px;
	&:first-child{
		margin-left: 0;
	}
	&:last-child{
		margin-right: 0;
	}
`;

function Icon(props){
	return(
		<div>
			<SVGInline svg = {props.svg} fill = {props.fill} height = "50px" width = "50px"/>
		</div>
	)
}

Icon.propTypes = {
	fill: PropTypes.string,
}

class Footer extends React.Component {
	render(){
		const { primary } = this.props.theme;
		return (
			<Wrapper>
				<Link href = "mailto:mmontori@umich.edu">
					<Icon svg = {mailLogo} fill = {primary}/>
				</Link>
				<Link href = "https://www.github.com/mmontori1">
					<Icon svg = {githubLogo} fill = {primary}/>
				</Link>
				<Link href = "https://www.linkedin.com/in/mariano-montori-37a2a5127/">
					<Icon svg = {linkedInLogo} fill = {primary}/>
				</Link>
				<Link href = "https://devpost.com/mmontori1">
					<Icon svg = {devpostLogo} fill = {primary}/>
				</Link>
			</Wrapper>
		)
	}
}


export default withTheme(Footer)