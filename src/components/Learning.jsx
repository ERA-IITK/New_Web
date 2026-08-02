import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { learning } from '../constants';
import { BallCanvas } from './canvas';
import { styles } from '../styles';
import Particles from './Particles';
import { textVariant } from '../utils/motion';
import Navbar1 from './Navbar1';
import Navbar from './Navbar';

const Learning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Particles />

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, }}>
        <Navbar1 />
      </div>

      <div className="relative w-[80vw] pt-24 mx-auto z-10">
        <motion.div variants={textVariant()} className={`${styles.textCenter} flex-col`}>

          <h2 className={styles.sectionHeadTextLight}>Learn with ERA</h2>

          <p className="sm:text-[18px] text-[16px] text-taupe tracking-wider font-poppins mt-4">
            Explore technologies, tutorials, and curated resources prepared by the ERA team to help you begin your robotics and AI journey.
          </p>
          <p className={`${styles.sectionSubTextLight} mt-10`}>
            Learning Resources
          </p>
        </motion.div>

        {/* Option 1 plain */}
        {/* <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 mt-14 max-w-10xl mx-auto">
          {learning.map((resource) => (
            <a
              key={resource.name}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="w-28 h-28">
                <BallCanvas icon={resource.icon} />
              </div>

              <p className="mt-4 text-center text-taupe font-medium">
                {resource.name}
              </p>
            </a>
          ))}
        </div> */}

        {/* Option 2 with hover description effect */}
        {/* <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 mt-14 max-w-7xl mx-auto">
          {learning.map((resource) => (
            <a
              key={resource.name}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center w-60"
            >
              <div className="w-28 h-28 transition-transform duration-300 group-hover:scale-110">
                <BallCanvas icon={resource.icon} />
              </div>

              <p className="mt-4 text-center text-taupe font-semibold text-lg">
                {resource.name}
              </p>

              <p className="mt-2 px-2 text-center text-sm text-silver opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-24">
                {resource.description}
              </p>
            </a>
          ))}
        </div> */}

        {/* Option 3 with upper hover description effect on balls */}
        {/* <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 mt-14 max-w-7xl mx-auto">
          {learning.map((resource) => (
            <a
              key={resource.name}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center w-56"
            >
              <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-4 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1 z-20"
              >
                <h4 className="text-white font-bold text-base mb-2">
                  {resource.name}
                </h4>

                <p className="text-silver text-sm leading-6">
                  {resource.description}
                </p>

                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 rotate-45 bg-white/10 border-r border-b border-white/20"
                />
              </div>

              <div className="w-28 h-28 transition-transform duration-300 group-hover:scale-110">
                <BallCanvas icon={resource.icon} />
              </div>

              <p className="mt-4 text-center text-taupe font-semibold text-lg">
                {resource.name}
              </p>
            </a>
          ))}
        </div> */}

        {/* Option 4 with lower hover description effect on balls */}
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 mt-14 max-w-7xl mx-auto">
          {learning.map((resource) => (
            <a
              key={resource.name}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center w-56 relative"
            >
              {/* Ball */}
              <div className="w-28 h-28">
                <BallCanvas icon={resource.icon} />
              </div>

              {/* Name */}
              <p className="mt-4 text-center text-taupe font-semibold text-lg">
                {resource.name}
              </p>

              {/* Hover Box */}
              <div
                className="
          absolute
          top-40
          w-64
          p-4
          rounded-xl
          bg-black/70
          backdrop-blur-md
          border border-white/20
          text-center
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-200
          pointer-events-none
          z-20
        "
              >
                <p className="text-silver text-sm leading-6">
                  {resource.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-40">
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(Learning, 'learning');