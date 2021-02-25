import { newE2EPage } from '@stencil/core/testing';

describe('picture-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<picture-gallery></picture-gallery>');

    const element = await page.find('picture-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
