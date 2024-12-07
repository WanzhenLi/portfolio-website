import React from 'react';
import { createComponent } from '@lit/react';
import { NavItem } from './NavItem';
import { CustomButton } from './Button';
import { SocialLink } from './SocialLink';
import { InfoItem } from './InfoItem';
import { StatCard } from './StatCard';

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