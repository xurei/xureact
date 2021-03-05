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

import { Checkbox } from '../src/index';

/** @namespace describe */
/** @namespace it */
/** @namespace beforeEach */
/** @namespace before */

describe('Checkbox', function() {
	// TODO
});
