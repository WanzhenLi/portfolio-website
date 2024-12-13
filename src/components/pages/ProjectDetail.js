import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../../constants/images';

// Specify the projects data
const projectsData = {
  "ai-chat-application": {
    title: "AI-Powered Chat Application",
    imageUrl: images.projects.project1,
    techStack: ["React", "Node.js", "OpenAI API"],
    // content is an array of strings, each representing a section of the project
    content: [
      `<h2>Project Overview</h2>
      <p>This AI-powered chat application represents a cutting-edge solution in the field of conversational AI. Built with modern web technologies, it provides users with an intuitive interface for interacting with OpenAI's advanced language models.</p>`,
      
      `<h2>Key Features</h2>
      <ul>
        <li>Real-time conversation with AI</li>
        <li>Conversation history management</li>
        <li>Intelligent context understanding</li>
        <li>Responsive design for all devices</li>
        <li>Secure API integration</li>
      </ul>`,
      
      `<h2>Technical Details</h2>
      <p>The application is built using React for the frontend, with Node.js powering the backend. It integrates seamlessly with OpenAI's GPT-4 API to provide intelligent responses. The architecture ensures scalability and maintainability while delivering a smooth user experience.</p>`,
      
      `<h2>Challenges & Solutions</h2>
      <p>One of the main challenges was implementing an efficient conversation memory system that could maintain context without overwhelming the API limits. This was solved through careful optimization of the context window and intelligent message pruning.</p>`
    ]
  },
  "simulink-model-design": {
    title: "Simulink Model Design",
    imageUrl: images.projects.project1,
    techStack: ["Simulink", "MATLAB"],
    content: [
        `<h2>Project Overview</h2>
        <p>This project focuses on designing a Simulink model for a specific system. The model is built using MATLAB's Simulink tool, and it aims to simulate the behavior of the system under different conditions.</p>`
    ]
  }
};

// HTML Rendering Function
const createMarkup = (html) => {
  return { __html: html };
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen">
        <div className="section-container pt-28">
          <h1 className="text-3xl font-bold text-center">Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with Full-width Background */}
      <div className="w-full bg-gradient-to-b from-secondary-light/30 to-transparent">
        <div className="section-container pt-28 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: 'rgba(41, 25, 83, 0.1)', color: 'var(--tw-color-primary)' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section with Styled Elements */}
      <div className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <style>
            {`
              .project-content h2 {
                font-size: 1.875rem;
                font-weight: 700;
                margin-bottom: 1.5rem;
                margin-top: 0;
                color: var(--tw-color-primary);
              }
              
              .project-content p {
                font-size: 1.125rem;
                line-height: 1.75;
                margin-bottom: 2rem;
                color: var(--tw-color-secondary);
              }
              
              .project-content ul {
                list-style-type: none;
                padding-left: 0;
                margin-bottom: 2rem;
              }
              
              .project-content li {
                display: flex;
                align-items: flex-start;
                margin-bottom: 0.75rem;
                color: var(--tw-color-secondary);
              }
              
              .project-content li:before {
                content: "•";
                color: var(--tw-color-accent);
                margin-right: 0.75rem;
                margin-top: 0.25rem;
              }
              
              .project-content iframe {
                width: 100%;
                border-radius: 0.5rem;
                margin-bottom: 2rem;
              }
              
              .project-content section {
                margin-bottom: 3rem;
              }
              
              .project-content a {
                color: var(--tw-color-accent);
                text-decoration: none;
                transition: color 0.2s;
              }
              
              .project-content a:hover {
                color: var(--tw-color-accent-light);
              }
            `}
          </style>
          
          <div className="project-content prose prose-lg max-w-none">
            {project.content.map((section, index) => (
              <div 
                key={index}
                dangerouslySetInnerHTML={createMarkup(section)}
                className="mb-12 last:mb-0"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 