import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';
import { styles } from '../styles';
import { Particles } from './Particles';
import { fadeIn, textVariant } from '../utils/motion';
import Navbar1 from './Navbar1';

const ServiceCard = ({ index, title, icon, expandedCard, setExpandedCard }) => {
  const isExpanded = expandedCard === index;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className={`xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:brightness-110`}
      onClick={() => setExpandedCard(isExpanded ? null : index)}
      style={{
        flex: '0 0 auto', // prevents flex from stretching all cards
        alignSelf: 'flex-start', // keeps cards aligned at top
      }}
    >
      <motion.div
        initial={false}
        animate={{ minHeight: isExpanded ? 400 : 280 }}
        transition={{ duration: 0.3 }}
        className="bg-jetLight rounded-[20px] py-5 px-12 flex flex-col items-center justify-evenly"
      >
        <img src={icon} alt={title} className="w-30 h-30 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">{title}</h3>

        {isExpanded && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-center text-silver text-sm"
          >
            This is extra information about <b>{title}</b>.  
            Replace this with your own detailed content, images, or links.
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

const Learning = () => {
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

      <div id="projects" style={{ position: 'relative', width: '80vw', marginTop: '5vh' }}>
        <motion.div variants={textVariant()} className={`${styles.textCenter} flex-col`}>
          <h2 className={`${styles.sectionHeadTextLight}`}>Learning</h2>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`sm:text-[18px] text-[16px] text-taupe tracking-wider font-poppins ml-2 ${styles.textCenter}`}
          >
            The team was founded under Prof. Laxmidhar Behera, currently the director of IIT Mandi...
          </motion.p>
        </motion.div>

        <div className="mt-200 flex flex-wrap gap-10" style={{ marginTop: '10vh', width: '80vw' }}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Learning, 'learning');
