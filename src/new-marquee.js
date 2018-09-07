import { LitElement, html } from '@polymer/lit-element';

class NewMarquee extends LitElement {

constructor()
{
      super();
}

static get properties(){
    return {
      loop : Number
    }
  }

  _render(properties) {
      return html`
      <style>

  :host {
        display: block;
        padding: 10px;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
      }

  div
      {
        transform: translateX(100%);
        animation-name: scroll-left;
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-delay: 0;
        animation-iteration-count: ${properties.loop > 0 ? properties.loop : 'infinite'};
      }

  @keyframes scroll-left {
       0%   {
         transform: translateX(100%);
       }
       100% {
         transform: translateX(-100%);
       }

  </style>

  <div><slot></slot></div>
      `;
    }

}

window.customElements.define('new-marquee', NewMarquee);
