import { LitElement, html, css } from 'lit';

export class StatCard extends LitElement {
  static properties = {
    number: { type: String },
    label: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
    
    .stat-card {
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: center;
    }

    .number {
      font-family: 'Cardo', serif;
      font-size: 32px;
      font-weight: 700;
      line-height: 1;
      color: var(--tw-color-primary);
    }

    .label {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      color: var(--tw-color-secondary-light);
      line-height: 24px;
      max-width: 150px;
    }

    @media (min-width: 1024px) {
      .number {
        font-size: 48px;
      }

      .label {
        font-size: 18px;
      }
    }
  `;

  render() {
    return html`
      <div class="stat-card">
        <div class="number">${this.number}</div>
        <div class="label">${this.label}</div>
      </div>
    `;
  }
}

customElements.define('stat-card', StatCard); 