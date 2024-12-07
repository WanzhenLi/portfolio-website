import { LitElement, html, css } from 'lit';

export class InfoItem extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    
    .info-item {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
    }

    .label {
      font-family: 'Cardo', serif;
      font-size: 26px;
      font-weight: 700;
      color: var(--tw-color-primary);
    }

    .value {
      font-family: 'Poppins', sans-serif;
      font-size: 22px;
      color: var(--tw-color-secondary-light);
    }
  `;

  render() {
    return html`
      <div class="info-item">
        <span class="label">${this.label}</span>
        <span class="value">${this.value}</span>
      </div>
    `;
  }
}

customElements.define('info-item', InfoItem); 