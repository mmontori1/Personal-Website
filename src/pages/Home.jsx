import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	toggleMenu
} from '../actions'

const StyledDiv = styled.div`
  border: ${props => props.menu ? '2px solid black' : 'auto'};
  border-radius: 3px;
  text-align: center;
`;

class Home extends React.Component {
	componentDidMount() {
        this.props.dispatch(toggleMenu(true));
    }

	render(){
		return (
				<StyledDiv>
					Page is a WIP
				</StyledDiv>
		)
	}
}

function mapStateToProps(state) {
    // console.log(state);
    return{
    	state
    }
}

// function mapDispatchToProps(state) {
//     return {
//     };
// }


export default connect(mapStateToProps)(Home)