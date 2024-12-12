import React from 'react';
import { ReactSectionTitle, ReactProjectCard } from '../shared';
import { images } from '../../constants/images';

const projectsData = [
  {
    id: 1,
    title: "AI-Powered Chat Application",
    description: "A real-time chat application built with React and OpenAI's GPT-4o API, featuring intelligent response generation and conversation memory.",
    imageUrl: images.projects.project1,
    techStack: ["React", "Node.js", "OpenAI API"],
    slug: "ai-chat-application"
  },
  {
    id: 2,
    title: "AI-Powered Chat Application",
    description: "A real-time chat application built with React and OpenAI's GPT-4o API, featuring intelligent response generation and conversation memory.",
    imageUrl: images.projects.project1,
    techStack: ["React", "Node.js", "OpenAI API"],
    slug: "ai-chat-application"
  },
  {
    id: 3,
    title: "AI-Powered Chat Application",
    description: "A real-time chat application built with React and OpenAI's GPT-4o API, featuring intelligent response generation and conversation memory.",
    imageUrl: images.projects.project1,
    techStack: ["React", "Node.js", "OpenAI API"],
    slug: "ai-chat-application"
  },
  {
    id: 4,
    title: "AI-Powered Chat Application",
    description: "A real-time chat application built with React and OpenAI's GPT-4o API, featuring intelligent response generation and conversation memory.",
    imageUrl: images.projects.project1,
    techStack: ["React", "Node.js", "OpenAI API"],
    slug: "ai-chat-application"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-16 scroll-mt-20">
      <div className="section-container">
        <ReactSectionTitle title="Projects" />
        
        <div className="mx-auto grid max-w-2xl pt-10 grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
          {projectsData.map((project) => (
            <ReactProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 