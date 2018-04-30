const React = require('react'); //eslint-disable-line no-unused-vars
const PropTypes = require('prop-types');

const style = {
	display: 'block',
	position: 'relative',
	top: '50%',
	transform: 'translateY(-50%)',
};

/**
 * Vertical centering of children
 */
class VCenter extends React.Component {
	static propTypes = { //eslint-disable-line no-undef
		style: PropTypes.object,
		className: PropTypes.string,
	};
	
	render() {
		const props = this.props;
		const mystyle = Object.assign({}, props.style, style);
		return (
			<div style={mystyle} className={props.className || ''}>
				{props.children}
			</div>
		);
	}
}

export default VCenter;

