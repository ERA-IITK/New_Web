import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { dribble } from '../../assets'
import CustomButton2 from '../Button_Qualification';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-30 h-30 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <div className="-mt-[8rem] flex justify-between">
        <div className="flex flex-col">
          <div className="-mt-[-2rem]">
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>About Us</h2>
            </motion.div>
            <motion.p
              variants={fadeIn('', '', 0.2, 1)}
              className="mt-4 text-taupe text-[1.250rem] max-w-3xl leading-[1.875rem]">
                {/* We are a team of <b>undergraduates</b> actively working with faculty and are dedicated to developing solutions to challenges in <b>autonomous robotics</b> and related domains. We develop cutting-edge robots aided by <b>research</b> and represent our university and nation in <b>international competitions</b> that see participants from prestigious colleges worldwide. We are working towards our first participation in the upcoming <b>(2025)</b> edition of the &nbsp;
                <a href='https://msl.robocup.org/'
                  style={{ fontWeight: 'bold', color: '#6194fb', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s', display: 'inline-block' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) => {
                    e.target.style.color = 'black';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#6194fb';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  RoboCup MSL.
                </a> */}
                We are the <b>Equipe de Robotic Autonome (ERA)</b> team at IIT Kanpur, a multidisciplinary group of <b>undergraduate students</b> passionate about building <b>intelligent autonomous robotic systems.</b> Working closely with faculty members, we combine mechanical design, electronics, embedded systems, computer vision, machine learning, localisation, motion planning, and decision-making algorithms to develop robots capable of operating in <b>complex real-world environments.</b>
            </motion.p>
            <motion.p
              variants={fadeIn('', '', 0.2, 1)}
              className="mt-4 text-taupe text-[1.250rem] max-w-3xl leading-[1.875rem]">
              Our work spans <b>research, government-funded projects, and international robotics competitions,</b> providing members with hands-on experience in tackling challenging engineering problems. Beyond competitions, we aim to cultivate a <b>strong robotics community, especially on autonomous robotics and contributing to the advancement of autonomous robotics in India.</b> 
              <br />
              <br />
              <b>(28/02/26)</b> <b style={{ fontWeight: 'bold', color: '#000000' }}>: We just sent in our submission for the 2026 edition of RoboCup MSL!</b>
              <br />
              <br />
              <CustomButton2 />
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <motion.img
            src={dribble}
            alt="Robo2"
            style={{ width: '40.83vw', height: 'auto', marginTop: '18.29vh', marginLeft: '-10vw' }} // Adjust the size as needed
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
          />
        </div>

      </div>
      <br />
    </>
  );
};

export default SectionWrapper(About, 'about');
