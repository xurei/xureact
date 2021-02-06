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

import { VCenter } from '../src/index';

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
			expect(component.html()).to.eq('<div style="position:absolute;width:100%;height:100%;left:0;top:0;display:flex;align-items:center;"><div style="width:100%;">Hello world</div></div>');
		});
	});
});
