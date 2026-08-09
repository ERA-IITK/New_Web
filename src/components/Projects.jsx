import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import Particles from '../components/Particles';
import Navbar1 from './Navbar1';

const ProjectCard = ({
  id,
  name,
  image,
  index,
  active,
  handleAction,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.25, 0.5)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow transition-[flex] duration-500`}
      onMouseEnter={() => handleAction(id)}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0  rounded-[24px]" />

      {/* Project Name */}
      <motion.div
        initial={false}
        animate={{
          opacity: active === id ? 1 : 0,
          y: active === id ? 0 : 20,
        }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 rounded-b-[24px] p-6"
      >
        <h2
          className="font-bold text-[30px] text-timberWolf uppercase font-beckman"
        >
          {name}
        </h2>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const initialActiveProjectId = 'project-2';
  const [activeProject, setActiveProject] = useState(initialActiveProjectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Particles />

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Navbar1 />
      </div>

      <div id="projects" style={{ width: '100%', marginTop: '-15vh' }}>
        <motion.div
          variants={textVariant()}
          className={`${styles.textCenter} flex-col`}
        >
          <h2 className={styles.sectionHeadTextLight}>Projects</h2>

          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`sm:text-[18px] text-[16px] text-taupe tracking-wider font-poppins ml-2 ${styles.textCenter}`}
          >
            Before the RoboCup MSL, we worked on many self-projects and
            government-funded projects. We have also participated in
            international competitions and conferences that made us what we are
            today. Below are some notable projects and competitions we have
            undertaken and excelled at.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={activeProject}
                handleAction={setActiveProject}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');