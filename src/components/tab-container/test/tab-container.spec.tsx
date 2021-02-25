import { newSpecPage } from '@stencil/core/testing';
import { TabContainer } from '../tab-container';

describe('tab-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabContainer],
      html: `<tab-container></tab-container>`,
    });
    expect(page.root).toEqualHtml(`
      <tab-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tab-container>
    `);
  });
});
