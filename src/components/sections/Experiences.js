import React from 'react';
import { ReactSectionTitle, ReactExperienceInfoCard, ReactExperienceAccordionItem } from '../shared';
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
      title: "20+",
      subtitle: "Projects completed"
    },
    {
      icon: images.icons.experience.webdev,
      title: "10+",
      subtitle: "Satisfied Clients/Employers"
    },
    {
      icon: images.icons.experience.support,
      title: "Collaboration",
      subtitle: "Cross-functional teams"
    }
  ],
  experiences: [
    {
      title: "Data Scientist",
      company: "Arctura AI",
      period: "Jan 2026 - Present",
      description: "H1B Sponsored",
      bulletPoints: [
        "Designed and shipped end-to-end AI product MVPs at speed,from market research and product ideation to UI design, web app development, and DevOps deployment,covering the full product lifecycle with hands-on ownership of front-end, back-end, and cloud infrastructure.",
        "Evaluated LLMs and vision models; engineered prompts and built RAG pipelines to optimize accuracy and cost; automated image-processing workflows using n8n to reduce manual effort and accelerate delivery.",
        "Leveraged Vercel, Supabase, and WordPress to rapidly prototype and deploy production-ready MVPs, enabling fast iteration cycles and measurable outcomes for clients.",
        "Collaborated closely with clients and cross-functional stakeholders to translate business requirements into technical solutions, ensuring alignment from discovery through delivery."
      ]
    },
    {
      title: "Data Scientist",
      company: "Synergies Intelligent Systems, Inc.",
      period: "Mar 2024 - Jan 2026",
      description: "",
      bulletPoints: [
        "Worked with product and client stakeholders to frame AI problems, Reviewed papers and open-source repos, tested candidate models, and chose cost-effective, quick-to-deploy solutions; shipped week-scale MVPs to prove feasibility before full builds.",
        "Delivered multiple AI features: For a furniture e-commerce site, integrated a open-source LLM chatbot for customer support and built a “try in your space” AI image inpainting feature using Stable Diffusion; For a machined parts platform, created an auto-quotation model and explored a machining drawing→3D CAD feature to streamline quoting and design review.",
        "Collaborated with engineers to deliver Python services (FastAPI/Flask) with logging and metrics; deployed prototypes on Vercel/Hostinger as appropriate, coordinated API contracts, and supported smooth handoffs for iteration."
      ]
    },
    {
      title: "Data Analyst",
      company: "Synergies Intelligent Systems, Inc.",
      period: "September 2023 - Mar 2024",
      description: "",
      bulletPoints: [
        "Combined production and financial data from several systems into clean, standardized datasets; built executive KPI dashboards to track margin, inventory turns, and anomaly alerts for decision-making.",
        "Developed time-series forecasting & anomaly detection (SARIMA/Prophet/LSTM in Python) to support planning and working-capital optimization; briefed Finance and Operations on insights and suggested actions for their decision-making.",
        "Automated ETL with SQL (Athena/S3) and Python; added data-quality checks (freshness, completeness), reducing manual reporting effort and improving reliability of leadership reporting."
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "CraftZone Studio",
      period: "September 2022 - March 2023",
      description: "",
      bulletPoints: [
        "Data Engineering and Processing: Retrieved data using SQL with Amazon Athena from AWS S3, established ETL pipelines with AWS Glue, and preprocessed data  for enhanced data management.",
        "Data Visualization and Analysis: Conducted Exploratory Data Analysis (EDA) using Python, and developed interactive Tableau dashboards to enable management to discern customer preferences and behavior patterns.",
        "Marketing Optimization: Executed A/B testing using Google Optimize and Google Analytics by launching email campaigns with Mailchimp featuring varied content and designs. Collected user engagement data, conducted Hypothesis Testing to determine significance, and identified the most effective marketing strategies and web designs, improving monthly KPIs by 5\%.",
        "Customer Insight and Revenue Growth: Analyzed customer data using K-Means clustering and performed conjoint and basket analysis, contributing to a 6\% upsurge in revenue."
      ]
    },
    {
      title: "Product Strategy Analyst",
      company: "Volkswagen Group China",
      period: "April 2020 - April 2021",
      description: "",
      bulletPoints: [
        "Data Analysis and Visualization: Analyzed customer and distributor data using SQL and developed Power BI dashboards, effectively visualizing core business KPIs and sales performance, which enhanced marketing strategies and budget allocation.",
        "Product Strategy and Communication: Developed annual Go-To-Market Strategy plans for new car models, focusing on sales goals and market positioning, leading to improved cross-departmental collaboration and stakeholder engagement.",
        "Marketing Research and Data Storytelling: Conducted qualitative marketing research using CRM tools, translating complex data into compelling narratives for competitive and customer product analyses, aiding strategic decision-making."
      ]
    },
    {
      title: "Market Analyst",
      company: "Mercedes-Benz Group, Weber Shandwick",
      period: "March 2018 - February 2019",
      description: "",
      bulletPoints: [
        "Automated Analytics and Tool Development: Utilized Python for web scraping and text mining to analyze public opinion, and employed Gephi for visualizing network strategies, aiding clients in understanding press relations and formulating new strategies.",
        "Strategy Development for PR and Marketing: Crafted GTM strategies for the launch of new car models and Auto Show conferences, including briefing books, debriefing reports, and creative copywriting, alongside monitoring media big data to evaluate brand influence.",
        "Brand Monitoring and Data Analysis: Continuously tracked media data, and visualized brand volume and influence with Tableau, providing vital insights for crisis PR and marketing strategies."
      ]
    }
  ]
};

export default function Experiences() {
  return (
    <section id="experience" className="py-5 sm:py-10">
      <div className="section-container">
        <ReactSectionTitle title="Work Experience" />

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
      </div>
    </section>
  );
} 