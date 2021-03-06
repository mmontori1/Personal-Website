import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../../actions'
import MenuButton from './MenuButton.jsx';
import MenuTag from './MenuTag.jsx';
import MenuTitle from './MenuTitle.jsx';
import Portrait from './Portrait.jsx';
import UpperBorder from './UpperBorder.jsx';

const OuterBorder = styled.div`
	display: none;
	align: center;
	border: 5px solid #343F94;
	border-radius: 6px 0px 6px 6px;
	border-width: 8px;
	width: 50%;
	margin: auto;
	margin-top: 10%;
	padding: 17px 17px;
	box-shadow: 0px -5px 0px 0px #253186;
	background: rgba(48, 59, 140, .25);
	opacity: 0.9;
	border-bottom: none;
	position: relative;
	@media screen and (min-width: 800px) {
		display: block;
	}
`;

class MenuScreen extends React.Component {
	componentDidMount() {
		this.props.dispatch(toggleMenu(true));
	}

	render(){
		return (
			<OuterBorder>
				<UpperBorder/>
				<MenuTitle/>
				<div>
					<Portrait/>
					<MenuButton route = "/about" val = "-10%" >About</MenuButton>
					<MenuButton route = "/projects" val = "-7%" >Projects</MenuButton>
					<MenuButton route = "/resume" val = "-15%" >Resume</MenuButton>
					<MenuButton route = "/extras" val = "-10%" >Extras</MenuButton> 
				</div>
				<MenuTag/>
			</OuterBorder>
		)
	}
}

function mapStateToProps(state) {
		var { menu } = state.menu;
		return{
			menu
		}
}

export default connect(mapStateToProps)(MenuScreen)