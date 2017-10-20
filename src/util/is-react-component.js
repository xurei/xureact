const React = require('react');

const ReactClassComponentPrototype = (
	(React.createClass) ?
	(Object.getPrototypeOf(Object.getPrototypeOf(new (React.createClass({ render () {} }))()))) :
	{}
);

const ReactClassComponentDropInPrototype = (() => {
	try {
		const createReactClass = require('create-react-class');
		
		return (
			(createReactClass) ?
			(Object.getPrototypeOf(Object.getPrototypeOf(new (createReactClass({ render () {} }))()))) :
			{}
		);
	}
	catch (e) {
		return {};
	}
})();

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
		(ReactClassComponentDropInPrototype.isPrototypeOf(Component.prototype)) ||
		(typeof(Component) === 'function' && Component.length <= 1)
	);
};
