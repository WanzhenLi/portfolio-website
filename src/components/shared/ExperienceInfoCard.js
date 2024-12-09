import { LitElement, html, css } from 'lit';

export class ExperienceInfoCard extends LitElement {
  static properties = {
    icon: { type: String },
    title: { type: String },
    subtitle: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      max-width: 230px;
    }
    
    .info-card {
      display: flex;
      gap: 1.25rem;
      align-items: flex-start;
    }

    .icon {
      width: 32px;
      height: 32px;
      padding: 8px;
      background-color: var(--tw-color-primary);
      border-radius: 8px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .title {
      font-family: 'Cardo', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--tw-color-primary);
    }

    .subtitle {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      color: var(--tw-color-secondary);
    }
  `;

  render() {
    return html`
      <div class="info-card">
        <img src=${this.icon} alt="" class="icon" />
        <div class="content">
          <div class="title">${this.title}</div>
          <div class="subtitle">${this.subtitle}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('experience-info-card', ExperienceInfoCard); 