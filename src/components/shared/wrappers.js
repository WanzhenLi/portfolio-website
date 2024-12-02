import React from 'react';
import { createComponent } from '@lit/react';
import { NavItem } from './NavItem';
import { CustomButton } from './Button';
import { Hero } from '../sections/Hero';
import { SocialLink } from './SocialLink';

// 包装 NavItem
export const ReactNavItem = createComponent({
  tagName: 'nav-item',
  elementClass: NavItem,
  react: React
});

// 包装 Button
export const Button = createComponent({
  tagName: 'custom-button',
  elementClass: CustomButton,
  react: React
});

// 包装 Hero
export const ReactHero = createComponent({
  tagName: 'hero-section',
  elementClass: Hero,
  react: React
});

// 包装 SocialLink
export const ReactSocialLink = createComponent({
  tagName: 'social-link',
  elementClass: SocialLink,
  react: React
}); 