import { LitElement, html, css } from 'lit';

export class NavItem extends LitElement {
  static properties = {
    href: { type: String },
    active: { type: Boolean },
    label: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
    
    .nav-link {
      display: inline-block;
      padding: 20px;
      color: var(--color-primary, #1a1b1f);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.5px;
      transition: color 0.2s;
    }

    .nav-link:hover {
      color: var(--color-accent, #0050bd);
    }

    .active {
      color: var(--color-accent, #0050bd);
    }
  `;

  render() {
    return html`
      <a 
        href=${this.href} 
        class="nav-link ${this.active ? 'active' : ''}"
      >
        ${this.label}
      </a>
    `;
  }
}

customElements.define('nav-item', NavItem); 