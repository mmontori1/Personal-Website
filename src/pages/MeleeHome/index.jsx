import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../../actions';
import MenuScreen from './MenuScreen.jsx';
import MenuScreenMobile from './MenuScreenMobile.jsx';
import Grid from './Grid.jsx';

const Background = styled.div`
	position: fixed;
	padding:0;
	margin:0;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
	background: ${props => props.menu ? 'linear-gradient(0deg, #3030a9, #243380, #101334)': 'white'};
`;

class MeleeHome extends React.Component {
	componentDidMount() {
		if(!this.props.menu){
			this.props.dispatch(toggleMenu(true));
		}
	}

	render(){
		return (
			<div>
				<Background menu = {this.props.menu}>
					<Grid menu = {this.props.menu}/>
					<MenuScreen/>
				</Background>
				<MenuScreenMobile/>
			</div>
		)
	}
}

function mapStateToProps(state) {
		var { menu } = state.menu;
		return{
			menu
		}
}

export default connect(mapStateToProps)(MeleeHome)