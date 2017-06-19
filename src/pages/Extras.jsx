import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MeleeHome } from '../pages';
import { toggleMenu, toggleTheme } from '../actions';
import { ContentBox, PageContainer, Section, WIP } from '../components';
import { devices, defaultTheme, steelTheme, colorfulTheme, seaGreenTheme, goBlueTheme } from '../styles';

const ButtonWrapper = styled.div`
  display: inline-block;
  width: 35%;
  padding: 10px;
  padding-top: 0;
  text-align: center;
`;

const DescriptionWrapper = styled.div`
  display: inline-block;
  width: 65%;
  text-align: center;
  padding: 10px;
  padding-top: 0;
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

const StyledLink = styled(Link)`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  cursor: pointer;
  color: ${props => props.theme.primary};
  text-decoration: none;
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
            <ContentBox title = "Pick a theme!">
              <ButtonWrapper>
                <StyledButton onClick = {() => this.handleTheme(defaultTheme)}> {defaultTheme.name}! </StyledButton>
                <StyledButton onClick = {() => this.handleTheme(steelTheme)}> {steelTheme.name}! </StyledButton>
                <StyledButton onClick = {() => this.handleTheme(colorfulTheme)}> {colorfulTheme.name}! </StyledButton>
                <StyledButton onClick = {() => this.handleTheme(seaGreenTheme)}> {seaGreenTheme.name}! </StyledButton>
                <StyledButton onClick = {() => this.handleTheme(goBlueTheme)}> {goBlueTheme.name}! </StyledButton>
              </ButtonWrapper>
              <DescriptionWrapper>
                <Description> 
                  You can pick one out of the five themes for the site!
                </Description>
              </DescriptionWrapper>
            </ContentBox>
          </Section>
        </PageContainer>
		)
	}
}

/*
<ContentBox title = "Melee themed menu">
  <ButtonWrapper>
    <StyledLink to="/extras/melee"> Melee Homepage </StyledLink>
  </ButtonWrapper>
  <DescriptionWrapper>
    <Description>
      This home page is inspired after the home screen menu from Super Smash Bros. Melee.
      I was going to use this as my home page for this site, but I decided to scrap it later on.
    </Description>
  </DescriptionWrapper>
</ContentBox>
*/

function mapStateToProps(state) {
    var { menu } = state.menu;
    var { theme } = state.theme;
    return{
    	menu,
      theme
    }
}

export default connect(mapStateToProps)(Extras)