const React = require('react'); //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class FakeComponentClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stateVal: 0,
		};
	}
	
	render() {
		return (
			<div style={this.props.style || {}}>Fake Component {this.props.val}</div>
		);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		return JSON.stringify(this.props) !== JSON.stringify(nextProps) || JSON.stringify(this.state) !== JSON.stringify(nextState);
	}
}
FakeComponentClass.propTypes = {
	val: PropTypes.any.isRequired
};
FakeComponentClass.displayName = 'FakeComponent.Class';

const FakeComponentObj = React.createClass({
	propTypes: {
		val: PropTypes.any.isRequired
	},
	
	render() {
		return (
		<div>Fake Component {this.props.val}</div>
		);
	}
});
FakeComponentObj.displayName = 'FakeComponent.Obj';

module.exports = {
	Class: FakeComponentClass,
	Obj: FakeComponentObj,
	Func: (props) => props.val,
};