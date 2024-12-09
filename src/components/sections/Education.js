import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactTimelineItem, ReactSectionTitle, ReactSectionContent } from '../shared';
import styles from './Education.module.css';

/**
 * Configuration object for the timeline animation and styling
 * 
 * @property {Object} scroll - Scroll animation configuration
 * @property {number} scroll.start - Starting scroll progress value (0-1)
 * @property {number} scroll.end - Ending scroll progress value (0-1)
 * 
 * @property {Object} line - Timeline line style configuration
 * @property {string} line.startHeight - Initial height of the timeline line
 * @property {string} line.endHeight - Final height of the timeline line
 * @property {string} line.topPosition - Top position of the timeline line
 */
const TIMELINE_CONFIG = {
  scroll: {
    start: 0,
    end: {
        desktop: 0.7,
        tablet: 0.7,
        mobile: 0.8
    }
  },
  line: {
    startHeight: "0%",
    endHeight: {
        mobile: "60%",
        tablet: "62%",
        desktop: "62%"
    },
    topPosition: {
      mobile: "5%",    // Mobile position
      tablet: "7%",    // Tablet position
      desktop: "7%"    // Desktop position
    }
  }
};

const educationData = [
  {
    school: "Boston University",
    degree: "Master of Science in Applied Business Analytics",
    period: "2021-2023",
    description: ""
  },
  {
    school: "Beihang University",
    degree: "Bachelors of Arts in German Literature",
    period: "2013-2017",
    description: ""
  }
];

export default function Education() {
  const containerRef = React.useRef(null);
  const [screenSize, setScreenSize] = React.useState('desktop');
  
  React.useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [TIMELINE_CONFIG.scroll.start, TIMELINE_CONFIG.scroll.end[screenSize]],
    [TIMELINE_CONFIG.line.startHeight, TIMELINE_CONFIG.line.endHeight[screenSize]]
  );

  return (
    <ReactSectionContent id="education">
      <ReactSectionTitle slot="title" title="Education" />
      <div className="relative w-full overflow-hidden" ref={containerRef}>
        {/* Timeline Line */}
        <motion.div 
          className={styles.timelineLine}
          style={{ 
            height: lineHeight,
            top: TIMELINE_CONFIG.line.topPosition[screenSize],
          }}
          initial={{ height: TIMELINE_CONFIG.line.startHeight }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Timeline Items Container */}
        <div className={`${styles.timelineContainer} relative w-full z-[1]`}>
          {educationData.map((item, index) => (
            <div
              key={item.school}
              className={`${styles.timelineItem}`}
            >
              <ReactTimelineItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </ReactSectionContent>
  );
} 