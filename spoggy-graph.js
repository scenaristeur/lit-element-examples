import {LitElement, html} from '@polymer/lit-element';
import { DataSet, Network } from 'vis/index-network';
import '@polymer/paper-button/paper-button.js';
/*import 'vis/dist/vis-network.min.css';*/

class SpoggyGraph extends LitElement {

  // Public property API that triggers re-render (synced with attributes)
  static get properties() {
    return {
      nodes: Object,
      edges: Object
    }
  }

  constructor() {
    super();
    var app = this;
    var root = this._root;
    /*this.nodes = new DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

  // create an array with edges
  this.edges = new DataSet([
  {from: 1, to: 3},
  {from: 1, to: 2},
  {from: 2, to: 4},
  {from: 2, to: 5},
  {from: 3, to: 3}
]);*/

// create an array with nodes
var nodes = new DataSet([
  {id: 1, label: 'Node 1'},
  {id: 2, label: 'Node 2'},
  {id: 3, label: 'Node 3'},
  {id: 4, label: 'Node 4'},
  {id: 5, label: 'Node 5'}
]);

// create an array with edges
var edges = new DataSet([
  {from: 1, to: 3},
  {from: 1, to: 2},
  {from: 2, to: 4},
  {from: 2, to: 5},
  {from: 3, to: 3}
]);




/*var myStylesheets = ['/node_modules/vis/dist/vis.css'];

async function loadStyles(stylesheets) {
  let arr = await Promise.all(stylesheets.map(url => fetch(url)))
  arr = await Promise.all(arr.map(url => url.text()))
  const style = document.createElement('style')
  style.textContent = arr.reduce(
    (prev, fileContents) => prev + fileContents, ''
  )
  document.head.appendChild(style);
  // Do whatever now
  console.log("charge");
}*/


this.renderComplete.then(()=>{
  var con = document.getElementById('mynetwork');

  var container = this._root.querySelector('#mynetwork');

  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    interaction: {
      navigationButtons: true
    },
    manipulation: {
      enabled: true,
      initiallyActive: true,
    }
  };

  var network = new Network(container, data, options);



  //loadStyles(myStylesheets);

  // create a network
  //
  //


})


}

// Render method should return a `TemplateResult` using the provided lit-html `html` tag function
_render({nodes, edges}) {
  return html`
  <style>
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }
  </style>
  <style>
  #mynetwork {
    width: 600px;
    height: 400px;
    border: 1px solid lightgray;
  }
  </style>
  <h4>GRAPH: ${this.nodes}</h4>
  <div id="mynetwork"></div>

  <slot></slot>

  `;


}

}
customElements.define('spoggy-graph', SpoggyGraph);
