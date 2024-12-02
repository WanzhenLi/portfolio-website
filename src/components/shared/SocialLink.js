import { LitElement, html, css } from 'lit';

export class SocialLink extends LitElement {
  static properties = {
    href: { type: String },
    icon: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
    
    .social-link {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    .social-icon {
      width: 26px;
      height: 26px;
      transition: opacity 0.3s;
    }

    .social-link:hover .social-icon {
      opacity: 0.8;
    }
  `;

  render() {
    return html`
      <a href="${this.href}" target="_blank" class="social-link">
        <img src="${this.icon}" alt="" class="social-icon">
      </a>
    `;
  }
}

customElements.define('social-link', SocialLink); 