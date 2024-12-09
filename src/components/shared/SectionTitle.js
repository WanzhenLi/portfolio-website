import { LitElement, html, css } from 'lit';

export class SectionTitle extends LitElement {
  static properties = {
    title: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }
    
    .section-title {
      font-family: 'Cardo', serif;
      font-size: 3.5rem;
      font-weight: 700;
      color: var(--tw-color-primary);
      line-height: 1.1;
      margin: 1.5rem 0;
    }

    @media (min-width: 640px) {
      .section-title {
        font-size: 4rem;
      }
    }
  `;

  render() {
    return html`
      <h2 class="section-title">
        ${this.title}
      </h2>
    `;
  }
}

customElements.define('section-title', SectionTitle); 