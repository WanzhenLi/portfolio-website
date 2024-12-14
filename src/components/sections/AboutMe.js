import React from 'react';
import { motion } from 'framer-motion';
import { ReactButton, ReactInfoItem, ReactStatCard, ReactSectionTitle } from '../shared';
import { images } from '../../constants/images';
import styles from './AboutMe.module.css';

const InfiniteLogoScroll = ({ companies }) => {
  const [width, setWidth] = React.useState(0);
  const scrollRef = React.useRef();

  React.useEffect(() => {
    const calculateWidth = () => {
      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const offsetWidth = scrollRef.current?.offsetWidth || 0;
      setWidth(scrollWidth - offsetWidth);
    };

    calculateWidth();

    window.addEventListener('resize', calculateWidth);

    const timer = setTimeout(calculateWidth, 500);

    return () => {
      window.removeEventListener('resize', calculateWidth);
      clearTimeout(timer);
    };
  }, []);

  const duration = window.innerWidth < 768 ? 35 : 30;

  return (
    <div className="overflow-hidden relative" ref={scrollRef}>
      <motion.div
        className="flex gap-8 items-center"
        initial={{ x: 0 }}
        animate={{ x: -width }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {companies.map((company, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-[50px] pointer-events-none"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-full w-auto object-contain grayscale opacity-80"
              draggable="false"
            />
          </div>
        ))}
        {companies.map((company, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-[50px] pointer-events-none"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-full w-auto object-contain grayscale opacity-80"
              draggable="false"
            />
          </div>
        ))}
      </motion.div>

      <div className="absolute top-0 left-0 w-12 md:w-20 h-full bg-gradient-to-r from-[#fdf4ee] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-12 md:w-20 h-full bg-gradient-to-l from-[#fdf4ee] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default function AboutMe() {
  const companies = [
    { name: 'Mercedes Benz', logo: images.mercedesLogo },
    { name: 'Volkswagen', logo: images.volkswagenLogo },
    { name: "FoxConn", logo: images.foxconnLogo },
    { name: 'weber Shandwick', logo: images.wsLogo },
    { name: 'BMW', logo: images.bmwLogo },
    { name: 'Geely', logo: images.geelyLogo },
    { name: 'synergies', logo: images.synergiesLogo },
  ];

  return (
    <section id="about" className="py-5 sm:py-10 scroll-mt-20">
      <div className="section-container">
        <ReactSectionTitle title="Biography" />
        <div className="pt-6 sm:pt-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-start">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Biography */}
            <div className="space-y-6">

              <div className="space-y-4 text-lg sm:text-xl text-secondary text-justify">
                <p>
                  Believe it or not, my journey into tech started far from anything remotely technical. My undergraduate days were spent diving into Chomsky and The Magic Mountain as a German Language and Literature major. After graduation, I followed a traditional path into market research and PR consultancy at German companies. Yet, as I delved deeper into my work, I felt an ever-growing desire to sharpen my skills in data processing and analysis—to uncover deeper insights and drive real impact. That realization led me to Boston University, where I embarked on a new chapter—a journey that marked my first step into the world of tech.
                </p>
                <p>
                  After graduating from BU in 2023, I joined an AI startup as a data analyst. Working there completely reshaped my path. Initially focused on data analysis and predictive modeling, I was soon drawn into the dynamic world of front-end component development, back-end microservices, and algorithm design—essentially taking on the role of a full-stack software engineer. Along the way, I discovered my passion for software engineering, front-end development, and cutting-edge AI technologies. My natural curiosity, love for learning new tools, and problem-solving mindset fueled my growth, and I feel incredibly fortunate to have found a career that I’m deeply passionate about and excited to explore further.
                </p>
                <p>
                  If you're a potential employer intrigued by my story, feel free to download my resume to learn more. And if you’re curious about my project, have feedback, or want to collaborate, just send me an email—I’d love to hear from you!
                </p>
              </div>
            </div>


          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src={images.about}
              alt=""
              className="w-full max-w-[400px] mx-auto aspect-[3/4] object-cover rounded-[2rem]"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 pt-10 md:grid-cols-2 md:gap-12">
          {/* Contact Info - 1 */}
          <div className="space-y-4">
            <ReactInfoItem label="Name:" value="Wanzhen Li" />
            <ReactInfoItem label="Preferred Name:" value="Phoenix" />
            <ReactInfoItem label="Email:" value="phinneyisamazing@gmail.com" />
          </div>

          {/* Contact Info - 2 */}
          <div className="space-y-4 mt-4 md:mt-0">
            <ReactInfoItem label="Location:" value="Boston, MA" />
            <ReactInfoItem label="Employment Status:" value="Open to work" />
          </div>
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
          <ReactButton
            variant="primary"
            label="Download Resume"
            href="/assets/documents/Wanzhen_Li_Resume.pdf"
            download="Wanzhen_Li_Resume.pdf"
          />
        </div>

        {/* Trusted By Section */}
        <div className="pb-10 md:pb-0 mt-10 md:mt-20">
          {/* Title */}
          <div className="md:text-left text-center md:pl-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              <span className={styles.highlightedText}>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-[80%] h-[0.6em] w-full fill-accent-light"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Trusted By</span>
              </span>
            </h2>
          </div>

          {/* Logos */}
          <div className="mt-8">
            <InfiniteLogoScroll companies={companies} />
          </div>
        </div>
      </div>
    </section>
  );
} 