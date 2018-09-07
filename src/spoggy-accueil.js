import {LitElement, html} from '@polymer/lit-element';
import './spoggy-input.js';


class SpoggyAccueil extends LitElement {

  // Public property API that triggers re-render (synced with attributes)
  static get properties() {
    return {
      /*foo: String,
      whales: Number*/
    }
  }

  constructor() {
    super();
    /*this.foo = 'foo';
    this.addEventListener('click', async (e) => {
      this.whales++;
      await this.renderComplete;
      this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
    });*/
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  _render({foo, whales}) {
    return html`
    <!--<style>
    :host {
      display: block;
    }
    :host([hidden]) {
      display: none;
    }
    </style>
    <h4>Input: ${foo}</h4>
    <div>whales: ${'🐳'.repeat(whales)}</div>-->

input
    <spoggy-input  whales="5">hi</spoggy-input>
    input
    <spoggy-input label="3 mots, une virgule et Entrée"></spoggy-input>
    2put
  <slot></slot>


    `;
  }

}
customElements.define('spoggy-accueil', SpoggyAccueil);
