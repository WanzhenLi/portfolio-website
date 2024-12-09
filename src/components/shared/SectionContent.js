import { LitElement, html, css } from 'lit';

export class SectionContent extends LitElement {
  static properties = {
    id: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      padding: 10px 0;
      scroll-margin-top: 100px;
    }

    .section-container {
      max-width: 1500px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .section-content {
      padding-top: 20px;
    }

    @media (min-width: 640px) {
      :host {
        padding: 20px 0;
      }

      .section-container {
        padding: 0 40px;
      }
    }
  `;

  render() {
    return html`
      <section>
        <div class="section-container">
          <slot name="title"></slot>
          <div class="section-content">
            <slot></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('section-content', SectionContent, { extends: 'section' }); 