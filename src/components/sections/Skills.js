import React from 'react';
import { ReactSectionTitle, ReactSkillCategory } from '../shared';

const skillsData = [
  {
    title: "Programming Languages",
    icon: "👩‍💻",
    description: "Python · JavaScript · R · SQL"
  },
  {
    title: "Machine Learning",
    icon: "🤖",
    description: "PyTorch · TensorFlow · scikit-learn · Prophet"
  },
  {
    title: "LLM & NLP",
    icon: "🧠",
    description: "RAG · LangChain/LangGraph · HuggingFace · ChromaDB · Dify"
  },
  {
    title: "Data Engineering & Databases",
    icon: "💾",
    description: "ETL · PostgreSQL · MongoDB · Data Modeling · DBMS Design · Spark"
  },
  {
    title: "Web/API & Serving:",
    icon: "🌐",
    description: "Node.js · Next.js · FastAPI · Flask · Streamlit"
  },
  {
    title: "Front-end & Platforms",
    icon: "🎨",
    description: "React · LitElement · HTML5/CSS · TailwindCSS · Framer Motion · Shopify · WordPress · Figma"
  },
  {
    title: "Cloud & Hosting",
    icon: "☁️",
    description: "AWS (S3, EC2) · GCP · Vercel · Render · Supabase · Hostinger"
  },
  {
    title: "DevOps",
    icon: "🚀",
    description: "Docker · Git/GitHub Actions · CI/CD · Microservices · Serverless · Jira"
  },
  {
    title: "Analytics & BI",
    icon: "📊",
    description: "Tableau · Power BI"
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Advanced Data Analytics",
  "Stanford & DeepLearning.AI – Machine Learning"
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-16 scroll-mt-20">
      <div className="section-container">
        <ReactSectionTitle title="My Skills" />
        
        {/* Skills Grid - 9 skills in 3x3 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 pt-10">
          {skillsData.map((skill, index) => (
            <ReactSkillCategory
              key={index}
              title={skill.title}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-10">
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-8 border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🏆</span>
              <h3 className="font-cardo text-2xl font-semibold text-primary">Certifications</h3>
            </div>
            <div className="space-y-1">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 text-secondary text-base font-poppins leading-relaxed"
                >
                  <span className="text-primary mt-0.5">•</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 