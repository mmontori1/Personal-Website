import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components'

const blueTheme = {
  primary: 'blue',
};

export default class Container extends React.Component {
    render() {
        return (
            <ThemeProvider theme={blueTheme}>
                <div>
                    <Header/>
                    {React.Children.toArray(this.props.children)}
                </div>
            </ThemeProvider>
        );
    }
}