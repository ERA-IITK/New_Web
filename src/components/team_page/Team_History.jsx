import React, { Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { Link } from 'react-router-dom';
import InstaHandle from '../home_page/InstaHandle';
import Particles from '../Particles';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import CustomButton3 from '../Button_TeamHistory';
import Navbar1 from '../Navbar1';
import TeamHeadsSection from './TeamHeadSection';
import PastHeadsSection from './PastHeadsSection';
import JTMSection from './JTMSection';
import '../home_page/InstaHandle.css'

const Team_history = () => {
  const initialActiveProjectId = 'project-2'; // Change this to the actual ID of the IITK project

  useEffect(() => {
    // Scroll to the top when the component mounts or the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <Navbar1 />
    </div>
    <Particles/>
    <Fragment>
      
      <div id='team_history' style={{position: 'absolute', width: '80vw',marginLeft: '-40vw' ,marginTop: '-30vh' }}>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadTextLight} ${styles.textCenter}`}>Meet Our Team</h2>
            <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.textCenter} ml-2 text-taupe sm:text-[18px] text-[16px] tracking-wider`}>
              The team was founded under Prof. Laxmidhar Behera, currently the director of IIT Mandi, in 2018. We continue to work with faculty, our current advisor being Prof. Indranil Saha. Since our inception, we have grown in number and ability, undertaking various projects, participating in competitions, and demonstrating our research.
            </motion.p>
          </motion.div>
          <TeamHeadsSection />
          <JTMSection />
          <PastHeadsSection />
        <div className='InstaHandle'>
          <InstaHandle/>
        </div>
      </div>
    </Fragment>
    </>
  );
};

export default SectionWrapper(Team_history, 'team_history');
