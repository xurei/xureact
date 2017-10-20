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
	static propTypes = {
		style: PropTypes.object,
	};
	
	render() {
		const mystyle = Object.assign({}, this.props.style, style);
		return (
			<div style={mystyle}>
				{this.props.children}
			</div>
		);
	}
}

export default VCenter;

