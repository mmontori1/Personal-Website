import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
// import { 
// } from './';
// import { store } from '../store.js'

@connect((store)) => {
	return {};
})

const style = {
	textAlign: "center"
}

export default class Home extends React.Component {

	goToCats(){
		this.props.dispatch(push('/cats')
	}

	render() {
		return (
			<div style = {style}>
				<div> Page is a WIP </div>
				<button onClick={}> go to cats </button>
			</div>
		);
	}
}

// function mapStateToProps(state) {
// }

// export default connect(mapStateToProps)(Home);