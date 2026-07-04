import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import CustomButton from './Button_Brochure';
import CustomButton1 from './Button_Pitch_deck';

const ProjectCard = ({
  id,
  name,
  Sponsor_logo,
  description,
  repo,
  image,
  link,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={Sponsor_logo}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(link, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
              Discover
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Sponsors = () => {
//   const initialActiveProjectId = 'project-2'; // Change this to the actual ID of the IITK project
//   const [activeProject, setActiveProject] = useState(initialActiveProjectId);

  const initialActiveSponsorId = 'project-6'; // Change this to the actual ID of the IITK sponsor
  const [activeSponsor, setActiveSponsor] = useState(initialActiveSponsorId);

//   const setActiveProjectCard = (projectId) => {
//     setActiveProject(projectId);
//   };

  const setActiveSponsorCard = (sponsorId) => {
    setActiveSponsor(sponsorId);
  };

  return (
    <>
    {/* Sponsors Section */}
    <div id='projects' className="-mt-[-2rem]" style={{ marginBottom: '-18.29vh' }} >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} ${styles.textCenter} `}>Why Us</p>
          <h2 className={`${styles.sectionHeadTextLight} ${styles.textCenter}`}>Our Sponsors</h2>
          <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className={`mt-4 text-taupe text-[18px] ${styles.textCenter}`}>
           We sincerely thank our sponsors for providing us with the facilities without which we would have been unable to continue doing what we love. We share a cordial partnership with our sponsors, and fostering these relations, which promote growth for<br/> all stakeholders, is our primary priority as a team. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <br/>
           <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
           <CustomButton/>&nbsp;&nbsp;&nbsp; <CustomButton1/> 
           </div>
      </motion.p>
        </motion.div>

        {/* Rest of your Projects section code */}
        {/* Use projectData for mapping */}
        <div className="w-full flex">
          {/* Your project descriptions */}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {projects.slice(4,7).map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={activeSponsor}
                handleClick={setActiveSponsorCard}
              />
            ))}
          </div>
      </motion.div>
    </div>
    </>
  );
};

export default SectionWrapper(Sponsors, 'sponsors');

