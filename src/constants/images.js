// Common icons
import logo from '../assets/icons/common/logo.png';
import handWave from '../assets/icons/common/wave-hand.svg';

// Social icons
import linkedin from '../assets/icons/social/linkedin.svg';
import github from '../assets/icons/social/github.svg';

// Experience icons
import awardIcon from '../assets/icons/experience/award.svg';
import projectsIcon from '../assets/icons/experience/projects.svg';
import webdevIcon from '../assets/icons/experience/webdev.svg';
import supportIcon from '../assets/icons/experience/support.svg';
import accordionIcon from '../assets/icons/experience/accordion.svg';

// Images - import directly from src/assets
import heroMain from '../assets/images/hero/main.jpg';
import aboutProfile from '../assets/images/about/profile.jpeg';

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
    mainImage: heroMain,
  },
  about: aboutProfile,
};
