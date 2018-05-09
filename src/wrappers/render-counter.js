const React = require('react'); //eslint-disable-line no-unused-vars

/**
 * RenderCounter
 *
 * @param Component object React component to wrap. This must be a class extending React.Component,
 * a React.createClass() object, or a function with one argument
 * @param componentLabel function Function that returns the label of the component in the logs. Useful when there are
 * the same component multiple times in the app and you want to get the render counter of each of them
 *
 * Component Wrapper that counts the num
 */
module.exports = function RenderCounter(Component, componentLabel = () => Component.displayName) {
	class _RenderCounter extends Component {
		constructor(props) {
			super(props);
			this.renderCounter = 0;
		}
		render() {
			console.log(`Rendering ${componentLabel(this)} #${++this.renderCounter}`);
			return super.render();
		}
	}
	return _RenderCounter;
};
