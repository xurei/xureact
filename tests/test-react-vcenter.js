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

import VCenter from '../src/components/layout/react-vcenter';

/** @namespace describe */
/** @namespace it */
/** @namespace beforeEach */
/** @namespace before */

describe('VCenter', function() {
	describe('with a className', function() {
		it('returns the correct HTML code', function() {
			//Prepare + Execute
			const component = shallow(
			<VCenter className="my-vcenter">
				Hello world
			</VCenter>
			);
			
			//Verify
			expect(component.html()).to.eq('<div style="display:block;position:relative;top:50%;transform:translateY(-50%);" class="my-vcenter">Hello world</div>');
		});
	});
	describe('with custom styles', function() {
		it('returns the correct HTML code', function() {
			//Prepare + Execute
			const component = shallow(
				<VCenter className="my-vcenter" style={{ background: "red" }}>
					Hello world
				</VCenter>
			);
			
			//Verify
			expect(component.html()).to.eq('<div style="background:red;display:block;position:relative;top:50%;transform:translateY(-50%);" class="my-vcenter">Hello world</div>');
		});
	});
});
