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
  color: white;
  border: ${props => props.menu ? '2px solid black' : 'auto'};
  border-radius: 3px;
  text-align: ${props => props.menu ? 'center' : 'left'};
  margin: 10px
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(toggleMenu(true));
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
    var { menu } = state.menu;
    return{
    	menu
    }
}

export default connect(mapStateToProps)(Home)