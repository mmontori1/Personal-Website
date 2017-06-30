import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Footer } from '../components';
import { toggleTheme } from '../actions';
import { defaultTheme } from '../styles';

const falco = require('../../static/falco.gif');

const Styles = styled.div`
	position: fixed; 
	top: 0; 
	left: 0;
	height: 100%; 
	width: 100%;
	background: ${props => props.theme.secondary};
`;

const Falco = styled.div`
	display: none;
	margin: auto;
`;

const StyledGif = styled.img`
	height: 5em;
	width: 5em;
`;

const TextBox = styled.div`
`;

class Container extends React.Component {
	componentWillMount() {
		this.props.dispatch(toggleTheme(defaultTheme));
	}

	render() {
		var { theme, children } = this.props;
		return theme ? (
			<ThemeProvider theme = {theme}>
				<Styles>
					<Header/>
					{React.Children.toArray(children)}
					<Falco id="falco"> 
						<StyledGif src = {falco}/>
						<TextBox> what are you doing? </TextBox>
					</Falco>
					<Footer/>
				</Styles>
			</ThemeProvider>
		) : (
			<div> Error :( </div>
		);
	}
}

function mapStateToProps(state) {
	var { theme } = state.theme;
	return{
		theme
	}
}

export default withRouter(connect(mapStateToProps)(Container))