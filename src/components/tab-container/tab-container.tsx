import { Component, Host, Element, State, h } from '@stencil/core';

@Component({
  tag: 'tab-container',
  styleUrl: 'tab-container.css',
  shadow: true,
})
export class TabContainer {
  @State() tab: number = 0;
  @State() titles: string[] = [];
  @State() content: any = null;
  @State() end: any = null;
  @Element() host: HTMLElement;
  @State() childrenData: any = {};


  componentDidLoad() {
    let slotted = this.host.children;
    this.titles = Array.from(slotted).map(element => element.getAttribute("title"))
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };
    this.content = Array.from(slotted).slice(this.tab, this.tab + 1);
    console.log(typeof this.content[0]);
    this.end = Array.from(slotted)[this.host.children.length - 1];
  }

  render() {
    return (
      <Host>
         <div>
        {this.titles.map((title, index) => <span onClick={() => this.tab = index}>{title}</span>)}
      </div>
      <div innerHTML={this.content[0]}></div>
      </Host>
    );
  }

}
