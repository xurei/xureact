import React from 'react'; //eslint-disable-line no-unused-vars
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from './util/enzyme';
import sinonChai from 'sinon-chai';
chai.use(chaiEnzyme());
chai.use(sinonChai);
require('jsdom-global')();

const describe = global.describe;
const it = global.it;

import { Sep } from '../src/index';

/** @namespace describe */
/** @namespace it */
/** @namespace beforeEach */
/** @namespace before */

describe('Sep', function() {
	describe('with default width', function() {
		it('returns the classical whitespace: 0.3em', function() {
			//Prepare + Execute
			const component = shallow(
				<Sep/>
			);
			
			//Verify
			expect(component.html()).to.eq('<span style="display:inline-block;width:0.3em;"></span>');
		});
	});
	
	describe('with custom width', function() {
		it('returns the separator with the specified width', function() {
			//Prepare + Execute
			const component = shallow(
				<Sep width="10px"/>
			);
			
			//Verify
			expect(component.html()).to.eq('<span style="display:inline-block;width:10px;"></span>');
		});
	});
});
