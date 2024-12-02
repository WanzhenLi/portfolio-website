import { LitElement, html, css } from 'lit';
import { images } from '../../constants/images';

export class Hero extends LitElement {
  static properties = {
    title: { type: String },
    subtitle: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      color: #291953;
      padding-top: 200px;
      padding-bottom: 130px;
      position: relative;
      overflow: hidden;
    }

    .grid-hero {
      display: grid;
      grid-template-columns: 1fr 0.7fr 0.75fr;
      gap: 50px;
      align-items: start;
      padding: 0 30px;
      
      @media (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }
      
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }

    .hero-split-content-wrap {
      display: flex;
      flex-direction: column;
      padding-left: 30px;
      
      @media (max-width: 767px) {
        align-items: center;
        padding-left: 0;
      }
    }

    .hero-pre-title-inline {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      
      @media (max-width: 767px) {
        justify-content: center;
      }
    }

    .hero-pre-title-icon {
      height: 30px;
    }

    .hero-title {
      font-size: 8vw;
      line-height: 1em;
      font-family: Cardo, sans-serif;
      font-weight: 700;
      color: #291953;
      margin-bottom: 10px;
      
      @media (max-width: 991px) {
        font-size: 60px;
      }
    }

    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 200px;
      
      @media (max-width: 991px) {
        height: 500px;
        object-position: 50% 35%;
      }
      
      @media (max-width: 767px) {
        height: 400px;
        border-radius: 150px;
      }
    }

    .hero-social-wrap {
      display: flex;
      gap: 50px;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 30px;
      
      @media (max-width: 767px) {
        justify-content: center;
        gap: 30px;
      }
    }

    .hero-social-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-social-link-icon {
      width: 26px;
      height: 26px;
    }

    .hero-description {
      margin-bottom: 5px;
      font-size: 52px;
      font-family: Cardo, sans-serif;
      font-weight: 700;
      
      @media (max-width: 991px) {
        font-size: 42px;
      }
      
      @media (max-width: 767px) {
        font-size: 36px;
      }
    }

    .title-decoration {
      position: relative;
      display: inline-block;
    }

    .title-decoration::after {
      content: '';
      position: absolute;
      left: -10%;
      right: -10%;
      bottom: -10px;
      height: 31px;
      background-image: url("data:image/svg+xml,%3Csvg width='240' height='31' viewBox='0 0 240 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15.5C20 15.5 20 0.5 40 0.5C60 0.5 60 15.5 80 15.5C100 15.5 100 0.5 120 0.5C140 0.5 140 15.5 160 15.5C180 15.5 180 0.5 200 0.5C220 0.5 220 15.5 240 15.5' stroke='%23FDDB3A' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      z-index: -1;
    }
  `;

  render() {
    return html`
      <div class="grid-hero">
        <div class="hero-split-content-wrap">
          <div class="hero-pre-title-inline">
            <img src="${images.hero.handWave}" alt="" class="hero-pre-title-icon">
            <div>Hey, My name is</div>
          </div>
          <h1 class="hero-title">${this.title}</h1>
          
        </div>

        <div>
          <img src="${images.hero.heroImage}" alt="" class="hero-image">
        </div>

        <div>
          <p>I am a</p>
          <h2 class="hero-description">Web <span class="title-decoration">developer</span></h2>
          <p class="margin-bottom-36">${this.subtitle}</p>
          <p>Bringing together emotion and form creating something that looks good.</p>
          <div class="hero-social-wrap">
            <slot name="social-links"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-section', Hero); 