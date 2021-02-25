import { newE2EPage } from '@stencil/core/testing';

describe('tab-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tab-container></tab-container>');

    const element = await page.find('tab-container');
    expect(element).toHaveClass('hydrated');
  });
});
