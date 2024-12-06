import { LitElement, html, css } from 'lit';

export class CustomButton extends LitElement {
  static properties = {
    variant: { type: String },
    label: { type: String },
    disabled: { type: Boolean },
    href: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
    
    a {
      text-decoration: none;
    }

    .button-primary-2 {
      display: flex;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      color: #291953;
      text-align: center;
      background-color: #fddb3a;
      border: 1px solid #291953;
      border-radius: 50px;
      justify-content: center;
      align-items: center;
      padding: 10px 40px;
      font-family: Cardo, serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.5em;
      text-decoration: none;
      transition: background-color 0.3s ease-in-out;
      cursor: pointer;
    }

    .button-primary-2:hover {
      background-color: #fff;
      border-color: #291953;
    }

    .button-primary-2.nav-button {
      padding: 8px 30px;
    }
  `;

  render() {
    const buttonContent = html`
      <button
        class="button-primary-2 ${this.variant === 'nav' ? 'nav-button' : ''}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        ${this.label}
      </button>
    `;

    return this.href
      ? html`<a href=${this.href}>${buttonContent}</a>`
      : buttonContent;
  }

  _handleClick(e) {
    this.dispatchEvent(new CustomEvent('button-click', {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('custom-button', CustomButton); 