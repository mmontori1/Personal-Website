import React from 'react';
import SVGInline from 'react-svg-inline';
import PropTypes from 'prop-types';

class FooterIcon extends React.Component {
	render(){
		return(
			<div>
				<SVGInline svg = {this.props.svg} fill = {this.props.fill} height = "50px" width = "50px"/>
			</div>
		);
	}
}

FooterIcon.propTypes = {
	fill: PropTypes.string
};

export { FooterIcon }