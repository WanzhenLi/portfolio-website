import { LitElement, html, css } from 'lit';

export class SkillCategory extends LitElement {
  static properties = {
    title: { type: String },
    icon: { type: String },
    description: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }

    .skill-card {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      padding: 1.5rem;
      height: 210px;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
      border: 1px solid rgba(41, 25, 83, 0.1);
    }

    .skill-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(41, 25, 83, 0.05);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 1;
    }

    .icon {
      font-size: 1.5rem;
      color: var(--tw-color-primary);
      flex-shrink: 0;
    }

    .title {
      font-family: 'Cardo', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--tw-color-primary);
      line-height: 1;
    }

    .description {
      color: var(--tw-color-secondary);
      font-size: 1.25rem;
      line-height: 1.5;
      font-family: 'Poppins', serif;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      margin-top: 0.5rem;
    }

    @media (max-width: 640px) {
      .skill-card {
        padding: 1.25rem;
        height: 180px;
      }

      .title {
        font-size: 1.35rem;
      }

      .description {
        font-size: 1.1rem;
        line-height: 1.5;
      }
    }
  `;

  render() {
    return html`
      <div class="skill-card">
        <div class="header">
          <div class="icon">${this.icon}</div>
          <h3 class="title">${this.title}</h3>
        </div>
        <p class="description">${this.description}</p>
      </div>
    `;
  }
}

customElements.define('skill-category', SkillCategory); 