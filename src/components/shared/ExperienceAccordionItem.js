import { LitElement, html, css } from 'lit';
import { images } from '../../constants/images';

export class ExperienceAccordionItem extends LitElement {
  static properties = {
    title: { type: String },
    company: { type: String },
    period: { type: String },
    description: { type: String },
    bulletPoints: { type: Array },
    isOpen: { type: Boolean, state: true },
    isFirst: { 
      type: Boolean,
    }
  };

  constructor() {
    super();
    this.isFirst = false;
    this.isOpen = false;
  }

  updated(changedProperties) {
    if (changedProperties.has('isFirst') && this.isFirst) {
      this.isOpen = true;
    }
  }

  static styles = css`
    :host {
      display: block;
      padding: 1rem 0;
    }

    .divider {
      height: 1px;
      background-color: rgba(41, 25, 83, 0.3);
      margin: 1rem 0;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0 0;
      cursor: pointer;
    }

    .header-content {
      flex: 1;
    }

    .title {
      font-family: 'Cardo', serif;
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--tw-color-primary);
      margin-bottom: 0.5rem;
    }

    .company {
      font-family: 'Poppins', sans-serif;
      font-size: 1.125rem;
      font-style: italic;
      color: var(--tw-color-secondary);
      margin-bottom: 0.25rem;
    }

    .period {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      color: var(--tw-color-secondary);
    }

    .toggle-icon {
      width: 24px;
      height: 24px;
      margin-left: 1rem;
      margin-top: 0.75rem;
      transition: transform 0.3s ease;
    }

    .toggle-icon.open {
      transform: rotate(45deg);
    }

    .content {
      padding-top: 0.5rem;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out;
    }

    .content.open {
      max-height: 500px;
      padding-top: 1rem;
    }

    .description {
      font-family: 'Poppins', sans-serif;
      font-size: 1.125rem;
      line-height: 1.75;
      color: var(--tw-color-secondary);
      margin-bottom: 1rem;
    }

    .bullet-points {
      list-style-type: disc;
      padding-left: 1.5rem;
      font-size: 1.125rem;
      line-height: 1.75;
      color: var(--tw-color-secondary);
    }

    .bullet-points li {
      margin-bottom: 0.75rem;
    }

    .bullet-points li:last-child {
      margin-bottom: 0;
    }
  `;

  render() {
    return html`
      <div>
        <div class="header" @click=${() => this.isOpen = !this.isOpen}>
          <div class="header-content">
            <div class="title">${this.title}</div>
            <div class="company">${this.company}</div>
            <div class="period">${this.period}</div>
          </div>
          <img 
            src=${images.icons.experience.accordion}
            alt=""
            class="toggle-icon ${this.isOpen ? 'open' : ''}"
          />
        </div>
        <div class="content ${this.isOpen ? 'open' : ''}">
          <p class="description">${this.description}</p>
          <ul class="bullet-points">
            ${this.bulletPoints?.map(point => html`<li>${point}</li>`)}
          </ul>
        </div>
        <div class="divider"></div>
      </div>
    `;
  }
}

customElements.define('experience-accordion-item', ExperienceAccordionItem); 