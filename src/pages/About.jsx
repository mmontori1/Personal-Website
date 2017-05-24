import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	toggleMenu
} from '../actions'
import {
  Header
} from '../components';

const StyledDiv = styled.div`
  color: black;
  border: 2px solid black;
  border-radius: 3px;
  text-align: center;
  margin: 10px
`;

class About extends React.Component {
  componentDidMount() {
    this.props.dispatch(toggleMenu(false));
  }

	render(){
		return (
        <div>
          <Header/>
  				<StyledDiv menu = {this.props.menu}>
            Page is a WIP
          </StyledDiv>
        </div>
		)
	}
}

function mapStateToProps(state) {
    const { menu } = state.menu;
    return{
    	menu
    }
}

export default connect(mapStateToProps)(About)