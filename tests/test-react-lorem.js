import React from 'react'; //eslint-disable-line no-unused-vars
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';
chai.use(chaiEnzyme());
chai.use(sinonChai);
require('jsdom-global')();

const describe = global.describe;
const it = global.it;

const Lorem = require('../src/components/react-lorem').default; //eslint-disable-line no-unused-vars

/** @namespace describe */
/** @namespace it */
/** @namespace beforeEach */
/** @namespace before */

describe('Lorem', function() {
	describe('with default text', function() {
		it('returns the classical "Lorem ipsum dolor sit amet."', function() {
			//Prepare + Execute
			const component = shallow(
				<Lorem words={5}/>
			);
			
			//Verify
			expect(component.html()).to.eq('<span>Lorem ipsum dolor sit amet.</span>');
		});
	});
	
	describe('with custom sample text', function() {
		it('returns the custom sample text with the right amount of words (1)', function() {
			//Prepare + Execute
			const component = shallow(
				<Lorem words={5} sampleText="Hello world, this is a great day to code."/>
			);
			
			//Verify
			expect(component.html()).to.eq('<span>Hello world, this is a.</span>');
		});
		it('returns the custom sample text with the right amount of words (2)', function() {
			//Prepare + Execute
			const component = shallow(
				<Lorem words={18} sampleText="Hello world, this is a great day to code."/>
			);
			
			//Verify
			expect(component.html()).to.eq('<span>Hello world, this is a great day to code. Hello world, this is a great day to code.</span>');
		});
	});
});
