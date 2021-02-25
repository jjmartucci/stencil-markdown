import { Component,Host,  h } from '@stencil/core';
import md from "markdown-it";
import content from "./content.md" ;

console.log(content);

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  render() {
    const result = md({
      html: true,
      linkify: true,
      typographer: true

    }).render(content);

    return (
      <Host>
        <header>
          <h1>Markdown with Web Components</h1>
        </header>

        <main>
            
            <div innerHTML={result}></div>
          
        </main>
      </Host>
    );
  }
}
