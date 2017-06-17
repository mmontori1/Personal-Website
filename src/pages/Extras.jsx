import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu, toggleTheme } from '../actions';
import { PageContainer, Section, WIP } from '../components';
import { devices, defaultTheme, steelTheme, colorfulTheme, seaGreenTheme, goBlueTheme } from '../styles';

/*
Content to add:
  -Extra cool stuff that I like
    -Melee stuff
    -TBD
*/

const Wrapper = styled.div`
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  border-style: solid;
  border-width: 2px 5px 2px 5px;
  border-radius: 3px;
  text-align: left;
  font-size: 20px;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  width: 35%;
  padding: 10px;
  padding-top: 0;
  text-align: center;
  box-shadow: inset 0 -1px 0 ${props => props.theme.primary};
`;

const DescriptionWrapper = styled.div`
  display: inline-block;
  text-align: center;
  width: 65%;
  padding: 10px;
  box-shadow: inset 0 -1px 0 ${props => props.theme.primary};
`;

const StyledButton = styled.div`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  cursor: pointer;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 3px;
  &:first-child {
    margin-top: 0;
  }
  ${devices.tablet`
    font-size: 20px;
  `}
`;

const Description = styled.p`
  margin: 0;
  display: inline-block;
  width: 100%;
  ${devices.tablet`
    font-size: 34px;
  `}
`;

class Extras extends React.Component {
  constructor(){
    super();
    this.handleTheme = this.handleTheme.bind(this);
  }

  componentDidMount() {
    if(this.props.menu){
      this.props.dispatch(toggleMenu(false));
    }
  }

  handleTheme(themeName){
    this.props.dispatch(toggleTheme(themeName));
  }

	render(){
		return (
        <PageContainer>
          <Section title = "EXTRAS">
            <h2> Pick a theme! </h2>
            <Wrapper>
              <ButtonWrapper>
                <StyledButton onClick = {() => this.handleTheme(defaultTheme)}> {defaultTheme.name}! </StyledButton>
                <StyledButton onClick = {() => this.handleTheme(steelTheme)}> {steelTheme.name}! </StyledButton>
                <StyledButton onClick = {() => this.handleTheme(colorfulTheme)}> {colorfulTheme.name}! </StyledButton>
                <StyledButton onClick = {() => this.handleTheme(seaGreenTheme)}> {seaGreenTheme.name}! </StyledButton>
                <StyledButton onClick = {() => this.handleTheme(goBlueTheme)}> {goBlueTheme.name}! </StyledButton>
              </ButtonWrapper>
              <DescriptionWrapper>
                <Description> You can pick one out of the five themes for the site! </Description>
              </DescriptionWrapper>
            </Wrapper>
          </Section>
        </PageContainer>
		)
	}
}

function mapStateToProps(state) {
    var { menu } = state.menu;
    var { theme } = state.theme;
    return{
    	menu,
      theme
    }
}

export default connect(mapStateToProps)(Extras)