import React from 'react';
import SVGInline from 'react-svg-inline';

export default class FooterIcon extends React.Component {
	render(){
		return(
			<div>
				<SVGInline svg = {this.props.svg} fill = "currentcolor" height = "50px" width = "50px"/>
			</div>
		);
	}
}