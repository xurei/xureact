const React = require('react');

const style = {
	display: 'block',
	position: 'relative',
	top: '50%',
	transform: 'translateY(-50%)',
};

class VCenter extends React.Component {
	render() {
		const mystyle = Object.assign({}, this.props.style, style);
		
		return (
			<div style={mystyle}>
				{this.props.children}
			</div>
		);
	}
}

module.exports = VCenter;

