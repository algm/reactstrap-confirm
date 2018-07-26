/* global describe, it */

import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import confirm from '../src/index';

describe('confirm function', function() {
    jsdom();

    it('renders modal on calling', async () => {
        confirm();

        let rendered = document.querySelector('div');

        expect(rendered).to.be.ok;
    });
});
