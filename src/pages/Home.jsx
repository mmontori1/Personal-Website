import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	toggleMenu
} from '../actions'
import {
  MenuButton,
  WIP
} from '../components';

// 343F94

const OuterBorder = styled.div`
  align: center;
  border: 5px solid #343F94;
  border-radius: 6px;
  border-width: 8px;
  width: 50%;
  margin: auto;
  margin-top: 10%;
  padding: 17px 17px;
  box-shadow: 0 0 0 4pt #253186;
  opacity: 0.9;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(toggleMenu(true));
  }

	render(){
		return (
        <div>
          <OuterBorder>
            <MenuButton route = "/about" val = "-10%">About</MenuButton>
            <MenuButton route = "/projects" val = "-7%" >Projects</MenuButton>
            <MenuButton route = "/resume" val = "-15%" >Resume</MenuButton>
            <MenuButton route = "/extras" val = "-10%" >Extras</MenuButton> 
          </OuterBorder>
          <WIP menu = {this.props.menu}/>
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