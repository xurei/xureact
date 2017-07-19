const React = require('react');

const ReactClassComponentPrototype = (Object.getPrototypeOf(Object.getPrototypeOf(new (React.createClass({ render () {} }))())));

/**
 * isReactComponent
 *
 * @param Component
 * @return boolean true if the first argument is either a React class, a React element or a function with one argument
 */
module.exports = function isReactComponent(Component) {
	return (
		(React.Component.prototype.isPrototypeOf(Component.prototype)) ||
		(ReactClassComponentPrototype.isPrototypeOf(Component.prototype)) ||
		(typeof(Component) === 'function' && Component.length <= 1)
	);
};