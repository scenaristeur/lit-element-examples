import {LitElement, html} from '@polymer/lit-element';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-ajax/iron-ajax.js';


class SpoggySparql extends LitElement {

  // Public property API that triggers re-render (synced with attributes)
  static get properties() {
    return {
      foo: String,
      whales: Number
    }
  }

  constructor() {
    super();
    this.foo = 'foo';

    this.renderComplete.then(()=>{
      var btn = this._root.querySelector('#btn');
      console.log(btn);

      btn.addEventListener('click', async (e) => {
        //  this.whales++;
        console.log("click");
        await this.renderComplete;
        //  this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))

      //  let request = ironAjaxElement.generateRequest();
      let request = this._root.querySelector('#requeteTest').generateRequest();
        request.completes.then(function(req) {
          // succesful request, argument is iron-request element
          //  ...
          console.log("ok")
        }, function(rejected) {
          // failed request, argument is an object
          let req = rejected.request;
          let error = rejected.error;
          //...
          console.log("error")
        }
      )
    });
  })


}

// Render method should return a `TemplateResult` using the provided lit-html `html` tag function
_render({foo, whales}) {
  return html`
  <style>
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }
  </style>
  <h4>SPARQL: ${foo}</h4>
  <div>whales: ${'🐳'.repeat(whales)}</div>
  <slot></slot>

  <paper-input label="Requete"></paper-input>
  <paper-button id="btn" raised>Valider</paper-button>
  <iron-ajax
  id="requeteTest"
  url="http://127.0.0.1"
  params='{"part":"snippet", "q":"polymer", "key": "YOUTUBE_API_KEY", "type": "video"}'
  handle-as="json"
  on-response="handleResponse"
  debounce-duration="300"></iron-ajax>

  `;


}

}
customElements.define('spoggy-sparql', SpoggySparql);
