import { LitElement, html, css } from 'lit';

export class ProjectCard extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    techStack: { type: Array },
    slug: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      font-family: 'Poppins', sans-serif;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      border-radius: 1.5rem;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      cursor: pointer;
    }

    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    }

    .image-container {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .project-image {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image {
      transform: scale(1.05);
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 1.25rem;
      flex-grow: 1;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .tech-tag {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      background-color: var(--tw-color-primary-light, rgba(41, 25, 83, 0.1));
      color: var(--tw-color-primary);
      font-size: 0.75rem;
      font-weight: 500;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--tw-color-primary);
      margin-bottom: 0.5rem;
    }

    .description {
      font-size: 0.875rem;
      line-height: 1.6;
      color: var(--tw-color-secondary);
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;

  handleClick() {
    if (this.slug) {
      window.location.href = `/projects/${this.slug}`;
    }
  }

  render() {
    const technologies = Array.isArray(this.techStack) 
      ? this.techStack 
      : JSON.parse(this.techStack || '[]');

    return html`
      <article class="project-card" @click=${this.handleClick}>
        <div class="image-container">
          <img
            src=${this.imageUrl}
            alt=${this.title}
            class="project-image"
          />
        </div>

        <div class="content">
          <div class="tech-stack">
            ${technologies.map(
              tech => html`<span class="tech-tag">${tech}</span>`
            )}
          </div>

          <h3 class="title">${this.title}</h3>
          <p class="description">${this.description}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('project-card', ProjectCard); 