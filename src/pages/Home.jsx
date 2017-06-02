import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	toggleMenu
} from '../actions'
import {
  MenuButton,
  MenuTag
} from '../components';

// 343F94

const Title = styled.div`
  color: white;
  align: center;
  text-align: center;
  font-size: 3.5vw;
  font-style: oblique;
  font-family: sans-serif;
  position: absolute;
  width: 40%;
  margin-top: -12%;
`;

const OuterBorder = styled.div`
  align: center;
  border: 5px solid #343F94;
  border-radius: 6px;
  border-width: 8px;
  width: 50%;
  margin: auto;
  margin-top: 10%;
  padding: 17px 17px;
  box-shadow: 0px -5px 0px 0px #253186;
  opacity: 0.9;
  border-bottom: none;
  position: relative;
`;

/*

about: learn more about me!
projects: look at my work
resume: view my portfolio
extras: some other cool stuff

*/

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(toggleMenu(true));
  }

	render(){
		return (
        <div>          
          <OuterBorder>
            <Title>Main Menu</Title>
            <div>
              <MenuButton route = "/about" val = "-10%">About</MenuButton>
              <MenuButton route = "/projects" val = "-7%" >Projects</MenuButton>
              <MenuButton route = "/resume" val = "-15%" >Resume</MenuButton>
              <MenuButton route = "/extras" val = "-10%" >Extras</MenuButton> 
            </div>
            <MenuTag/>
          </OuterBorder>
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

export default connect(mapStateToProps)(Home)