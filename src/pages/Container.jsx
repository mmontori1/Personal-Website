import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Footer } from '../components';
import { toggleTheme } from '../actions';
import { defaultTheme } from '../styles';

const Styles = styled.div`
    position: fixed; 
    width: 100%;
    height: 100%; 
    z-index: 10;
    top: 0; 
    left: 0;
    background: ${props => props.theme.secondary};
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
