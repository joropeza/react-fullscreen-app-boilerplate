import React from 'react';
import reactDom from 'react-dom/server';
import { expect } from 'chai';
import dom from 'cheerio';

import componentToTest from '../src/your-code-goes-here/components/content/homePageContent';
const render = reactDom.renderToStaticMarkup;

describe('(sample functional component tests)', function() {
    describe('(homePageContent)', function() {
        it('should render some stuff', function() {
            const props = {};
            const Component = componentToTest(props);

            const $ = dom.load(render(Component));
            const output = $('div').html();
            expect(output).to.be.ok;
        });
    });
});
