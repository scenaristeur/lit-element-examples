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
      whales: Number,
      options: Object,
      query: String,
      url: String
    }
  }

  constructor() {
    super();
      var app = this;
    this.foo = 'foo';

    this.url = "http://127.0.0.1:3030/ds/sparql";
    this.query = "SELECT ?subject ?predicate ?object WHERE {   ?subject ?predicate ?object } LIMIT 25";
    let output = "json";
    this.options = {query: this.query, output: output};

    this.renderComplete.then(()=>{
      var btn = this._root.querySelector('#btn');
        btn.addEventListener('click', async (e) => {

        console.log("click");
        await this.renderComplete;
        //  this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))

        console.log(this.options);
        let requeteTest = this._root.querySelector('#requeteTest');
        requeteTest.params = this.options;
        requeteTest.url = this.url;
        console.log(requeteTest);
        //  let request = ironAjaxElement.generateRequest();
        let request = requeteTest.generateRequest();
        console.log(requeteTest);
        request.completes.then(function(req, resp) {
          // succesful request, argument is iron-request element
          //  ...
          console.log("ok");
          console.log(resp);
          var data = req.response;
          console.log(data);
          let response = JSON.parse(data);
          console.log(response)
          console.log("exp")
          //app.exploreFuseki(endpoint)
          console.log("exp2")
        }, function(rejected) {
          // failed request, argument is an object
          let req = rejected.request;
          let error = rejected.error;
          //...
          console.log(rejected);
          console.log("error");
          console.log(req);
          console.log(error);
        }
      )
    });
  })


}

// Render method should return a `TemplateResult` using the provided lit-html `html` tag function
_render({foo, whales, options, query, url}) {
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

  <paper-input label="Requete" value="${query}"></paper-input>
  <paper-button id="btn" raised>Valider</paper-button>

  <!--  params='{"part":"snippet", "q":"polymer", "key": "YOUTUBE_API_KEY", "type": "video"}'-->
  <!--on-response="handleResponse"
  params=${options}-->
  <iron-ajax
  id="requeteTest"
  url=""
  handle-as="json"
  debounce-duration="300"
  crossorigin>
  </iron-ajax>
  <!--/sparql-->
  `;


}

}
customElements.define('spoggy-sparql', SpoggySparql);
