import { newSpecPage } from '@stencil/core/testing';
import { PictureGallery } from '../picture-gallery';

describe('picture-gallery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PictureGallery],
      html: `<picture-gallery></picture-gallery>`,
    });
    expect(page.root).toEqualHtml(`
      <picture-gallery>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </picture-gallery>
    `);
  });
});
