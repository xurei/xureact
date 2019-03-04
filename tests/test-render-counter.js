import React from 'react'; //eslint-disable-line no-unused-vars
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from './util/enzyme';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';
chai.use(chaiEnzyme());
chai.use(sinonChai);
require('jsdom-global')();

const describe = global.describe;
const it = global.it;
const beforeEach = global.beforeEach;
const afterEach = global.afterEach;

import { RenderCounter } from '../src/index';

const FakeComponent = require('./util/fake-component');

/** @namespace describe */
/** @namespace it */
/** @namespace beforeEach */
/** @namespace before */

describe('RenderCounter', function() {
	let spyLog;
	beforeEach(() => {
		spyLog = spy(console, 'log');
	});
	afterEach(() => {
		spyLog.restore();
	});
	
	it.skip('should only accept a React Component or a function', function() {
		//Execute + Verify
		
		expect(RenderCounter(FakeComponent.Class)); //no check to do
		expect(RenderCounter(FakeComponent.Obj)); //no check to do
		expect(RenderCounter(FakeComponent.Func)); //no check to do
		
		/*expect(() => RenderCounter(100)).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter('a')).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter({})).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter([])).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter(new Date())).to.throw(Error, 'RenderCounter only accepts React Component');
		expect(() => RenderCounter(Date)).to.throw(Error, 'RenderCounter only accepts React Component');*/
	});
	it('should render the same thing as the child component', function() {
		//Prepare
		const TestComponent = RenderCounter(FakeComponent.Class); //eslint-disable-line no-unused-vars
		
		//Execute
		const component = mount(
			<TestComponent val={42}/>
		);
		const refComponent = mount(
			<FakeComponent.Class val={42}/>
		);
		
		//Verify
		expect(component.html()).to.eq(refComponent.html());
	});
	
	describe('when the props change', function() {
		it('should increment the counter and show it in the log', function() {
			//Prepare
			const TestComponent = RenderCounter(FakeComponent.Class); //eslint-disable-line no-unused-vars
			spyLog.resetHistory();
			
			const component = mount(
				<TestComponent val={42}/>
			);
			
			//Verify (1)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponent.Class #1');
			
			//Execute
			component.setProps({
				val: 43,
			});
			//Verify (2)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponent.Class #2');
			
			//Execute
			component.setProps({
				val: 43,
			});
			//Verify (3)
			expect(spyLog).to.have.not.been.calledWith('Rendering FakeComponent.Class #3');
			
			//Execute
			component.setProps({
				val: 44,
			});
			//Verify (4)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponent.Class #3');
		});
	});
	
	describe('when the state changes', function() {
		it('should increment the counter and show it in the log', function() {
			//Prepare
			const TestComponent = RenderCounter(FakeComponent.Class); //eslint-disable-line no-unused-vars
			spyLog.resetHistory();
			
			const component = mount(
				<TestComponent val={42}/>
			);
			
			//Verify (1)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponent.Class #1');
			
			//Execute
			component.setProps({
				val: 43,
			});
			
			//Verify (2)
			expect(spyLog).to.have.been.calledWith('Rendering FakeComponent.Class #2');
			expect(spyLog).to.have.not.been.calledWith('Rendering FakeComponent.Class #3');
		});
	});
	
	describe('whith a custom label', function() {
		it('should use this label in the log', function() {
			//Prepare
			const TestComponent = RenderCounter(FakeComponent.Class, (component => `TestComponent_${component.props.label}`)); //eslint-disable-line no-unused-vars
			spyLog.resetHistory();
			
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
				val: 43,
			});
			
			//Verify (2)
			expect(spyLog).to.have.been.calledWith('Rendering TestComponent_i1 #2');
			
			//Execute
			component2.setProps({
				val: 1,
			});
			
			//Verify (2)
			expect(spyLog).to.have.been.calledWith('Rendering TestComponent_i2 #2');
		});
	});
});
