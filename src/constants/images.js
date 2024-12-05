// Import SVG icons
import logo from '../assets/icons/logo.svg';
import handWave from '../assets/icons/wave-hand-icon.svg';
import linkedin from '../assets/icons/linkedin-icon.svg';
import instagram from '../assets/icons/instagram-icon.svg';
import facebook from '../assets/icons/facebook-icon.svg';
import twitter from '../assets/icons/twitter-icon.svg';

// Big images
const PUBLIC_IMAGES = '/assets/images';

export const images = {
  logo,
  icons: {
    handWave,
    social: {
      linkedin,
      instagram,
      facebook,
      twitter,
    }
  },
  hero: {
    mainImage: `${PUBLIC_IMAGES}/hero-image.jpg`,
    textRounded: `${PUBLIC_IMAGES}/hero-text-rounded.png`,
    arrowDown: `${PUBLIC_IMAGES}/arrow-down.svg`,
  }
};
