import React from 'react'; //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

/**
 * Div with a W:H ratio
 */
class RatioPlaceHolder extends React.Component {
	static propTypes = { //eslint-disable-line no-undef
		className: PropTypes.string,
		style: PropTypes.object,
		ratio: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
	};
	
	render() {
		const props = this.props;
		const contentStyle = {
			display: 'block',
			position: 'absolute',
			width: '100%',
			height: '100%',
		};
		
		return (
			<span className={`ratio-placeholder ${props.className || ''}`} style={spacerStyle(props)}>
				<span style={contentStyle}>
					{props.children}
				</span>
			</span>
		);
	}
}

export default RatioPlaceHolder;
//----------------------------------------------------------------------------------------------------------------------

function spacerStyle(props) {
	let w, h;
	if (props.ratio) {
		[w, h] = props.ratio.split(':');
	}
	else if (props.width && props.height) {
		[w, h] = [props.width, props.height];
	}
	else {
		throw new Error('RatioPlaceholder requires either a ratio property of "w:h" or width and height properties');
	}
	
	//TODO check that required style rules are not changed
	
	return Object.assign({
		display: 'inline-block',
		overflow: 'hidden',
		width: '100%',
		backgroundColor: props.color || 'none',
		position: 'relative',
		paddingBottom: `${h / w * 100}%`,
		textAlign: 'center',
	}, props.style);
}
