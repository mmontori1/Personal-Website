import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
// import { 
// } from './';
// import { store } from '../store.js'

const style = {
	textAlign: "center"
}

class Home extends React.Component {
	render() {
		return (
			<div style = {style}>
				<div> Page is a WIP </div>
				<button onClick={this.props.goToCats}> go to cats </button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
  }
}


const mapDispatchToProps = (dispatch) => {
	return {
		goToCats: () => {
			dispatch(push('/cats'))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);