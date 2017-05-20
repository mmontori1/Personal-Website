import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
// import { 
// } from './';

const style = {
	textAlign: "center"
}

class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			phrase: "cats"
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		const phrase = e.target.value;
		this.setState({phrase});
	}

	render() {
		console.log(this.state.phrase)
		return (
			<div style = {style}>
				<div> Page is a WIP </div>
				<button onClick={this.props.goTo}> go to input phrase </button>
				<input value = {this.state.phrase} onChange = {this.handleChange}/>
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
		goTo: () => {
			var location = '/' + this.state.phrase
			dispatch(push(location))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);