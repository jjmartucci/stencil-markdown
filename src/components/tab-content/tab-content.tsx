import { Component, Host, Prop, h } from '@stencil/core';


@Component({
  tag: 'tab-content',
  styleUrl: 'tab-content.css',
  shadow: true,
})
export class TabContent {
  @Prop() titleText: string;
    
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
