import { LitElement, html, css } from 'lit';

export class TimelineItem extends LitElement {
  static properties = {
    school: { type: String },
    degree: { type: String },
    period: { type: String },
    description: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    
    .timeline-item {
      display: grid;
      gap: 16px;
      min-width: 280px;
    }

    .school {
      font-family: 'Cardo', serif;
      font-size: 32px;
      font-weight: 700;
      color: var(--tw-color-primary);
    }

    .period {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: var(--tw-color-secondary);
    }

    .degree {
      font-family: 'Cardo', serif;
      font-size: 26px;
      font-weight: 700;
      color: var(--tw-color-primary);
      white-space: pre-line;
      max-width: 600px;
    }

    .description {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      color: var(--tw-color-secondary-light);
      line-height: 1.6;
    }

    @media (max-width: 767px) {
      .timeline-item {
        min-width: 240px;
      }
      
      .degree {
        max-width: 300px;
      }
    }
  `;

  render() {
    return html`
      <div class="timeline-item">
        <div class="school">${this.school}</div>
        <div class="period">${this.period}</div>
        <div class="degree">${this.degree}</div>
        <div class="description">${this.description}</div>
      </div>
    `;
  }
}

customElements.define('timeline-item', TimelineItem); 