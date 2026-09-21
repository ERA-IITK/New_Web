import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { research } from '../constants';
import { styles } from '../styles';
import Particles from './Particles';
import { fadeIn, textVariant } from '../utils/motion';
import Navbar1 from './Navbar1';

const ResearchCard = ({ index, title, icon, year, type, description, link, expandedCard, setExpandedCard }) => {
  const isExpanded = expandedCard === index;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.25, 0.5)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer 
      transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:brightness-110"
      onClick={() => setExpandedCard(isExpanded ? null : index)}
      style={{
        flex: '0 0 auto',
        alignSelf: 'flex-start',
      }}
    >
      <motion.div
        initial={false}
        animate={{ minHeight: isExpanded ? 400 : 280 }}
        transition={{ duration: 0.3 }}
        className="bg-jetLight rounded-[20px] py-5 px-12 flex flex-col items-center justify-evenly"
      >
        <img src={icon} alt={title} className="w-30 h-30 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>

        <p className="text-silver text-sm mt-1">
          {type} • {year}
        </p>

        {isExpanded && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-center text-silver text-sm"
          >
            <>
              {description}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(link, "_blank");
                }}
                className="
    mt-5
    px-4 py-2
    rounded-xl
    bg-white/10
    border border-white/20
    backdrop-blur-md
    text-timberWolf
    hover:bg-white/20
    transition
  "
              >
                Read Publication
              </button>
            </>
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

const Research = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Particles />
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Navbar1 />
      </div>

      <div className="relative w-[80vw] pt-24 mx-auto z-10">
        <motion.div variants={textVariant()} className={`${styles.textCenter} flex-col`}>
          <h2 className={`${styles.sectionHeadTextLight}`}>Research</h2>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`sm:text-[18px] text-[16px] text-taupe tracking-wider font-poppins ml-2 ${styles.textCenter}`}
          >
            ERA actively contributes to robotics research through conference publications, technical posters, and symposium papers. Our work spans autonomous systems, robot-human interaction, multi-agent robotics, and intelligent decision-making.
          </motion.p>
        </motion.div>

        <div className="mt-200 flex flex-wrap gap-10" style={{ marginTop: '10vh', width: '80vw' }}>
          {research.map((researchItem, index) => (
            <ResearchCard
              key={researchItem.title}
              index={index}
              {...researchItem}
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Research, 'research');
