import {LitElement, html} from '@polymer/lit-element';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';

import '@polymer/paper-input/paper-input.js';


class SpoggyInput extends LitElement {

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
    this.addEventListener('click', async (e) => {
      this.whales++;
      await this.renderComplete;
      this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
    });
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
    <h4>Input: ${foo}</h4>
    <div>whales: ${'🐳'.repeat(whales)}</div>
    <slot></slot>

    <paper-input label="3 mots, une virgule et Entrée"></paper-input>
    <paper-button raised>Valider</paper-button>
    <!--<paper-textarea label="autoresizing textarea input"></paper-textarea>-->

    <!--
    <paper-button>link</paper-button>
    <paper-button raised>raised</paper-button>
    <paper-button toggles raised>toggles</paper-button>
    <paper-button disabled>disabled</paper-button>

    <hr>

    <paper-button><iron-icon icon="check"></iron-icon>link</paper-button>
    <paper-button raised><iron-icon icon="file-download"></iron-icon>raised</paper-button>
    <paper-button toggles raised><iron-icon icon="favorite"></iron-icon>toggles</paper-button>
    <paper-button disabled><iron-icon icon="block"></iron-icon>disabled</paper-button>

    <hr>

    <paper-button noink>link</paper-button>
    <paper-button raised noink>raised</paper-button>
    <paper-button toggles raised noink>toggles</paper-button>
    <paper-button disabled raised noink>disabled</paper-button>

    <hr>

    <paper-button class="custom pink">link</paper-button>
    <paper-button raised class="custom indigo">raised</paper-button>
    <paper-button toggles raised class="custom green">toggles</paper-button>
    <paper-button disabled class="custom disabled">disabled</paper-button>

    <hr>

    <paper-input label="text input"></paper-input>
    <paper-input label="text input" value="pre-filled"></paper-input>
    <paper-textarea label="autoresizing textarea input"></paper-textarea>
    <paper-input label="password input" type="password"></paper-input>
    <paper-input label="disabled input" disabled value="batman"></paper-input>

    <hr>

    <paper-input label="total" type="number">
    <div slot="prefix">$</div>
    </paper-input>

    <paper-input label="username" id="inputWithButton">
    <iron-icon icon="mail" slot="prefix"></iron-icon>
    <div slot="suffix">@email.com</div>
    <paper-icon-button slot="suffix" onclick="clearInput()" icon="clear" alt="clear" title="clear">
    </paper-icon-button>
    </paper-input>

    <hr>

    <paper-input-container always-float-label auto-validate attr-for-value="value">
    <label slot="label">Social Security Number</label>
    <ssn-input class="paper-input-input" slot="input"></ssn-input>
    <paper-input-error slot="add-on">SSN invalid!</paper-input-error>
    </paper-input-container>

    <hr>

    <paper-input-container>
    <label slot="label">This is a label</label>
    <iron-input slot="input">
    <input class="my-input">
    </iron-input>
    </paper-input-container>
    -->

    `;
  }

}
customElements.define('spoggy-input', SpoggyInput);
