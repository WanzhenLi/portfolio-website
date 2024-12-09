import React from 'react';
import { 
  ReactSectionTitle, 
  ReactExperienceInfoCard, 
  ReactExperienceAccordionItem,
  ReactSectionContent 
} from '../shared';
import { images } from '../../constants/images';

const experienceData = {
  infoCards: [
    {
      icon: images.icons.experience.award,
      title: "5+ years",
      subtitle: "Work experience"
    },
    {
      icon: images.icons.experience.projects,
      title: "200+",
      subtitle: "Projects completed"
    },
    {
      icon: images.icons.experience.webdev,
      title: "Web",
      subtitle: "Design & Development"
    },
    {
      icon: images.icons.experience.support,
      title: "Collaboration",
      subtitle: "Cross-functional teams"
    }
  ],
  experiences: [
    {
      title: "Software Engineer",
      company: "Synergies Intelligent Systems, Inc.",
      period: "September 2024 - Present",
      description: "Working as a software engineer at Synergies Intelligent Systems, I've been involved in developing and maintaining their flagship product.",
      bulletPoints: [
        "Experience bulletpoint",
        "Experience bulletpoint"
      ]
    },
    {
      title: "Data Analyst",
      company: "Synergies Intelligent Systems, Inc.",
      period: "September 2023 - August 2024",
      description: "Great data analyst experience",
      bulletPoints: []
    },
    {
      title: "Data Analyst Intern",
      company: "CraftZone Studio",
      period: "September 2022 - March 2023",
      description: "",
      bulletPoints: []
    },
    {
      title: "Market Analyst",
      company: "Volkswagen Group of China",
      period: "September 2017 - March 2021",
      description: "",
      bulletPoints: []
    }
  ]
};

export default function Experiences() {
  return (
    <ReactSectionContent id="experience">
      <ReactSectionTitle slot="title" title="Work Experience" />
      
      <div className="pt-10 grid grid-cols-1 xl:grid-cols-[1fr_1.8fr] lg:grid-cols-1 gap-6 lg:gap-8 xl:gap-16">
        {/* Left Column - Info Cards */}
        <div className="grid grid-cols-1 sm:pt-6 sm:grid-cols-2 gap-8 sm:gap-10 h-fit pl-2 sm:pl-0">
          {experienceData.infoCards.map((card, index) => (
            <ReactExperienceInfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>

        {/* Right Column - Experience Accordion */}
        <div className="space-y-1">
          {experienceData.experiences.map((exp, index) => (
            <ReactExperienceAccordionItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              bulletPoints={exp.bulletPoints}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </ReactSectionContent>
  );
} 