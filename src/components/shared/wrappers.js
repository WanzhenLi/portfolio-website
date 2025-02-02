import React from 'react';
import { createComponent } from '@lit/react';
import { NavItem } from './NavItem';
import { CustomButton } from './Button';
import { SocialLink } from './SocialLink';
import { InfoItem } from './InfoItem';
import { StatCard } from './StatCard';
import { TimelineItem } from './TimelineItem';
import { SectionTitle } from './SectionTitle';
import { ExperienceInfoCard } from './ExperienceInfoCard';
import { ExperienceAccordionItem } from './ExperienceAccordionItem';
import { SkillCategory } from './SkillCategory';

// Wrap NavItem
export const ReactNavItem = createComponent({
  tagName: 'nav-item',
  elementClass: NavItem,
  react: React
});

// Wrap Button
export const ReactButton = createComponent({
  tagName: 'custom-button',
  elementClass: CustomButton,
  react: React
});

// Wrap SocialLink
export const ReactSocialLink = createComponent({
  tagName: 'social-link',
  elementClass: SocialLink,
  react: React
});

// Wrap InfoItem
export const ReactInfoItem = createComponent({
  tagName: 'info-item',
  elementClass: InfoItem,
  react: React
});

// Wrap StatCard
export const ReactStatCard = createComponent({
  tagName: 'stat-card',
  elementClass: StatCard,
  react: React
});

// Wrap TimelineItem
export const ReactTimelineItem = createComponent({
  tagName: 'timeline-item',
  elementClass: TimelineItem,
  react: React
});

// Wrap SectionTitle
export const ReactSectionTitle = createComponent({
  tagName: 'section-title',
  elementClass: SectionTitle,
  react: React
});

// Wrap ExperienceInfoCard
export const ReactExperienceInfoCard = createComponent({
  tagName: 'experience-info-card',
  elementClass: ExperienceInfoCard,
  react: React
});

// Wrap ExperienceAccordionItem
export const ReactExperienceAccordionItem = createComponent({
  tagName: 'experience-accordion-item',
  elementClass: ExperienceAccordionItem,
  react: React
});

// Wrap SkillCategory
export const ReactSkillCategory = createComponent({
  tagName: 'skill-category',
  elementClass: SkillCategory,
  react: React
});

// Project Card wrapper
export const ReactProjectCard = ({ title, description, imageUrl, techStack, demoLink, githubLink }) => {
  React.useEffect(() => {
    // Ensure the custom element is defined
    import('./ProjectCard');
  }, []);

  return React.createElement('project-card', {
    title,
    description,
    imageUrl,
    techStack: JSON.stringify(techStack),
    demoLink,
    githubLink
  });
}; 