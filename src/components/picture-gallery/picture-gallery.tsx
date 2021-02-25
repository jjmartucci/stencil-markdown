import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'picture-gallery',
  styleUrl: 'picture-gallery.css',
  shadow: true,
})
export class PictureGallery {
  @Prop() images: string;
  @State() selected: number = null;

  render() {
    const imagesToUse = this.images.split(',').map(image => image.trim());

    return (
      <Host>
        {this.selected !== null && <div class="modal" onClick={() => this.selected = null}><img class="big-image" src={imagesToUse[this.selected]} /></div>}
        {imagesToUse.map((image, index) => <img onClick={() => this.selected = index}src={image} />)}
      </Host>
    );
  }

}
