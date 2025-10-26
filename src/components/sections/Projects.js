import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSectionTitle, ReactProjectCard } from '../shared';
import { images } from '../../constants/images';

// Projects Data: each element is a project object, which contains the project's title, description, image, tech stack, and slug
const projectsData = [
  {
    id: 1,
    title: "FinDocs RAG System",
    description: "Building a Financial Document Q&A System with RAG - My Journey with LangGraph and LLMs",
    imageUrl: images.projects.findocsRag,
    techStack: ["LangChain", "LangGraph", "ChromaDB", "Streamlit", "Python"],
    slug: "findocs-rag-system"
  },
  {
    id: 2,
    title: "PicToMerch: AI-Powered Photo Restyle Web App",
    description: "Turning a user's photo into merch-ready art in one click. ",
    imageUrl: images.projects.pictomercHero,
    techStack: ["React", "Next.js", "Node.js", "Typescript", "Vercel", "Supabase", "OpenAI API"],
    slug: "pic-to-merch-web-app"
  },
  {
    id: 3,
    title: "AI-Powered Chat Application",
    description: "A real-time chat application built with React and OpenAI's GPT-4o API, featuring intelligent response generation and conversation memory.",
    imageUrl: images.projects.project1,
    techStack: ["React", "Node.js", "OpenAI API"],
    slug: "ai-chat-application-3"
  },
  {
    id: 4,
    title: "AI-Powered Chat Application",
    description: "A real-time chat application built with React and OpenAI's GPT-4o API, featuring intelligent response generation and conversation memory.",
    imageUrl: images.projects.project1,
    techStack: ["React", "Node.js", "OpenAI API"],
    slug: "ai-chat-application-4"
  },
];

export default function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (slug) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <section id="projects" className="py-10 sm:py-16 scroll-mt-20">
      <div className="section-container">
        <ReactSectionTitle title="Projects" />
        
        <div className="mx-auto grid max-w-2xl pt-10 grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              onClick={() => handleProjectClick(project.slug)}
              className="cursor-pointer"
            >
              <ReactProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 