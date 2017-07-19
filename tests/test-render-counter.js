import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';
chai.use(chaiEnzyme());
chai.use(sinonChai);
require('jsdom-global')();

const RenderCounter = require ('../src/index').RenderCounter;
const spyLog = spy(console, 'log');

class FakeComponentClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stateVal: 0,
		};
	}
	
	render() {
		return (
			<div>Fake Component {this.props.val}</div>
		);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		return JSON.stringify(this.props) !== JSON.stringify(nextProps) || JSON.stringify(this.state) !== JSON.stringify(nextState);
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

/** @namespace describe */
/** @namespace it */
/** @namespace beforeEach */
/** @namespace before */

describe('RenderCounter', function() {
	it('should only accept a React Component or a function', function() {
        //Execute + Verify
		
		expect(RenderCounter(FakeComponentClass)); //no check to do
		expect(RenderCounter(FakeComponentObj)); //no check to do
		expect(RenderCounter((props) => props.val)); //no check to do
		
		expect(() => RenderCounter(100)).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter('a')).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter({})).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter([])).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter(new Date())).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter(Date)).to.throw(Error, 'RenderCounter only accepts React Component');
	});
	it('should render the same thing as the child component', function() {
		//Prepare
		const TestComponent = RenderCounter(FakeComponentClass); //eslint-disable-line no-unused-vars
		
		//Execute
		const component = mount(
			<TestComponent val={42}/>
		);
		const refComponent = mount(
			<FakeComponentClass val={42}/>
		);
		
		//Verify
		expect(component.html()).to.eq(refComponent.html());
	});
	
	describe('when the props change', function() {
		it('should increment the counter and show it in the log', function() {
			//Prepare
			const TestComponent = RenderCounter(FakeComponentClass); //eslint-disable-line no-unused-vars
			spyLog.reset();
			
			const component = mount(
				<TestComponent val={42}/>
			);
			
			//Verify (1)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponentClass #1');
			
			//Execute
			component.setProps({
				val: 43
			});
			//Verify (2)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponentClass #2');
			
			//Execute
			component.setProps({
				val: 43
			});
			//Verify (3)
			expect(spyLog).to.have.not.been.calledWith('Rendering FakeComponentClass #3');
			
			//Execute
			component.setProps({
				val: 44
			});
			//Verify (4)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponentClass #3');
		});
	});
	
	describe('when the state changes', function() {
		it('should increment the counter and show it in the log', function() {
			//Prepare
			const TestComponent = RenderCounter(FakeComponentClass); //eslint-disable-line no-unused-vars
			spyLog.reset();
			
			const component = mount(
				<TestComponent val={42}/>
			);
			
			//Verify (1)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponentClass #1');
			
			//Execute
			component.setProps({
				val: 43
			});
			
			//Verify (2)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponentClass #2');
			expect(spyLog).to.have.not.been.calledWith('Rendering FakeComponentClass #3');
		});
	});
	
	describe('whith a custom label', function() {
		it ('fake', function(done) {
			done('error');
		});
		it('should use this label in the log', function() {
			//Prepare
			const TestComponent = RenderCounter(FakeComponentClass, (component => 'TestComponent_' + component.props.label)); //eslint-disable-line no-unused-vars
			spyLog.reset();
			
			const component1 = mount(
				<TestComponent val={42} label={'i1'}/>
			);
			const component2 = mount(
				<TestComponent val={42} label={'i2'}/>
			);
			
			//Verify (1)
			expect(spyLog).to.have.been.calledWith('Rendering TestComponent_i1 #1');
			expect(spyLog).to.have.been.calledWith('Rendering TestComponent_i2 #1');
			
			//Execute
			component1.setProps({
				val: 43
			});
			
			//Verify (2)
			expect(spyLog).to.have.been.calledWith('Rendering TestComponent_i1 #2');
			
			//Execute
			component2.setProps({
				val: 1
			});
			
			//Verify (2)
			expect(spyLog).to.have.been.calledWith('Rendering TestComponent_i2 #2');
		});
	});
});