import React from 'react';
import { ReactSectionTitle, ReactSkillCategory } from '../shared';

const skillsData = [
  {
    title: "Programming Languages",
    icon: "👩‍💻",
    description: "JavaScript, Python, MATLAB/Simulink, R, SQL"
  },
  {
    title: "Web Development",
    icon: "🌐",
    description: "React, LitElement, Node.js, Next.js"
  },
  {
    title: "Cloud Computing",
    icon: "☁️",
    description: "AWS, Serverless, Microservices, GCP"
  },
  {
    title: "Certification",
    icon: "🏆",
    description: "AWS Certified Solutions Architect - Associate"
  },
  {
    title: "DevOps",
    icon: "🚀",
    description: "Docker, Git, GitHub Actions, Jira, Confluence, CI/CD"
  },
  {
    title: "Data",
    icon: "💾",
    description: "MongoDB, DynamoDB, MySQL, PostgreSQL, Power BI, Tableau, Spark, DBMS Design"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-16 scroll-mt-20">
      <div className="section-container">
        <ReactSectionTitle title="My Skills" />
        
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
      </div>
    </section>
  );
} 