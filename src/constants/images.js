// Import icons
import logo from '../assets/icons/logo.png';
import handWave from '../assets/icons/wave-hand-icon.svg';
import linkedin from '../assets/icons/linkedin-icon.svg';
import github from '../assets/icons/github-icon.svg';

// Experience icons
import awardIcon from '../assets/icons/experience/experience-icon.svg';
import projectsIcon from '../assets/icons/experience/projects-icon.svg';
import webdevIcon from '../assets/icons/experience/available-icon.svg';
import supportIcon from '../assets/icons/experience/support-icon.svg';
import accordionIcon from '../assets/icons/experience/accordion-icon.svg';

// Big images
const PUBLIC_IMAGES = '/assets/images';

export const images = {
  logo,
  icons: {
    handWave,
    social: {
      linkedin,
      github,
    },
    experience: {
      award: awardIcon,
      projects: projectsIcon,
      webdev: webdevIcon,
      support: supportIcon,
      accordion: accordionIcon
    }
  },
  hero: {
    mainImage: `${PUBLIC_IMAGES}/hero-image.jpg`,
    textRounded: `${PUBLIC_IMAGES}/hero-text-rounded.png`,
    arrowDown: `${PUBLIC_IMAGES}/arrow-down.svg`,
  },
  about: `${PUBLIC_IMAGES}/about-image.jpeg`,
};
