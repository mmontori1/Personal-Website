import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components';
import { toggleTheme } from '../actions';
import { defaultTheme, nightTheme } from '../styles';

class Container extends React.Component {
    componentWillMount() {
        this.props.dispatch(toggleTheme(defaultTheme));
    }

    render() {
        var { theme, children } = this.props;
        return theme ? (
            <ThemeProvider theme={theme}>
                <div>
                    <Header/>
                    {React.Children.toArray(children)}
                </div>
            </ThemeProvider>
        ) : (
            <div> Loading... </div>
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
