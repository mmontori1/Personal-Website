import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components'
import { withRouter } from 'react-router-dom'
import { toggleTheme } from '../actions'

const wowTheme = {
  primary: 'orange',
};

class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(toggleTheme(wowTheme));
    }

    render() {
        // console.log(this.props.theme);
        return (
            <ThemeProvider theme={wowTheme}>
                <div>
                    <Header/>
                    {React.Children.toArray(this.props.children)}
                </div>
            </ThemeProvider>
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
