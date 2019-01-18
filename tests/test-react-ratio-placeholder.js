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

import RatioPlaceholder from '../src/components/layout/react-ratio-placeholder';

//const RatioPlaceHolder = require('../src/components/layout/react-ratio-placeholder').default; //eslint-disable-line no-unused-vars

/** @namespace describe */
/** @namespace it */
/** @namespace beforeEach */
/** @namespace before */

describe('RatioPlaceHolder', function() {
	describe('with 1:1 ratio', function() {
		it('returns a div with 1:1 ratio', function() {
			//Prepare + Execute
			const component = shallow(
				<RatioPlaceholder ratio="1:1">
					Hello world
				</RatioPlaceholder>
			);
			
			//Verify
			expect(component.html()).to.eq('<span class="ratio-placeholder " style="display:inline-block;overflow:hidden;width:100%;background-color:none;position:relative;padding-bottom:100%;text-align:center;"><span style="display:block;position:absolute;width:100%;height:100%;">Hello world</span></span>');
		});
	});
	
	describe('with 16:9 ratio', function() {
		it('returns a div with 16:9 ratio', function() {
			//Prepare + Execute
			const component = shallow(
				<RatioPlaceholder ratio="16:9">
					Hello world
				</RatioPlaceholder>
			);
			
			//Verify
			expect(component.html()).to.eq('<span class="ratio-placeholder " style="display:inline-block;overflow:hidden;width:100%;background-color:none;position:relative;padding-bottom:56.25%;text-align:center;"><span style="display:block;position:absolute;width:100%;height:100%;">Hello world</span></span>');
		});
	});
	
	describe('with defined width 1000 and height 200', function() {
		it('returns a div with 5:1 ratio', function() {
			//Prepare + Execute
			const component = shallow(
				<RatioPlaceholder width={1000} height={200}>
					Hello world
				</RatioPlaceholder>
			);
			
			//Verify
			expect(component.html()).to.eq('<span class="ratio-placeholder " style="display:inline-block;overflow:hidden;width:100%;background-color:none;position:relative;padding-bottom:20%;text-align:center;"><span style="display:block;position:absolute;width:100%;height:100%;">Hello world</span></span>');
		});
	});
});
