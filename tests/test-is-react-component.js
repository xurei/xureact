import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import createReactClass from 'create-react-class';

chai.use(chaiEnzyme());
chai.use(dirtyChai);
chai.use(sinonChai);
require('jsdom-global')();

const isReactComponent = require ('../src/index').isReactComponent;

class FakeComponentClass extends React.Component {
	render() {
		return (
			<div>Fake Component {this.props.val}</div>
		);
	}
}
FakeComponentClass.propTypes = {
	val: PropTypes.any.isRequired
};
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
const FakeComponentDropin = createReactClass({
	propTypes: {
		val: PropTypes.any.isRequired
	},
	
	render() {
		return (
		<div>Fake Component {this.props.val}</div>
		);
	}
});

/** @namespace describe */
/** @namespace it */
/** @namespace beforeEach */
/** @namespace before */

describe('isReactComponent', function() {
	describe('with a valid React component', function() {
		it('should return true', function() {
			//Execute + Verify
			expect(isReactComponent(FakeComponentClass)).to.be.true();
			expect(isReactComponent(FakeComponentObj)).to.be.true();
			expect(isReactComponent(FakeComponentDropin)).to.be.true();
			expect(isReactComponent((props) => props.val)).to.be.true();
			expect(isReactComponent(function () { return null; })).to.be.true();
			expect(isReactComponent(function (props) { return props.val; })).to.be.true();
		});
	});
	describe('with a non React component', function() {
		it('should return false', function() {
			expect(isReactComponent(1000)).to.be.false();
			expect(isReactComponent('ab')).to.be.false();
			expect(isReactComponent({  })).to.be.false();
			expect(isReactComponent([  ])).to.be.false();
			expect(isReactComponent(Date)).to.be.false();
			expect(isReactComponent(new Date())).to.be.false();
			
			expect(isReactComponent((a,b) => a+b)).to.be.false();
			expect(isReactComponent((a,b,c) => a+b-c)).to.be.false();
		});
	});
});