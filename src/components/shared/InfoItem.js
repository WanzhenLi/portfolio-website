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
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0.5rem;
      word-wrap: break-word;
      overflow-wrap: break-word;
      max-width: 100%;
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
      word-break: break-all;
      flex: 1;
      min-width: 0;
    }

    @media (max-width: 768px) {
      .info-item {
        flex-direction: column;
      }
      
      .label {
        font-size: 22px;
      }
      
      .value {
        font-size: 18px;
      }
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