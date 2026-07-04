import React from 'react';
import { color, motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { dribble } from '../assets' 
import CustomButton2 from './Button_Qualification';

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-4 text-taupe text-[1.250rem] max-w-3xl leading-[1.875rem]">
          We are a team of <b>undergraduates</b> actively working with faculty and are dedicated to developing solutions to challenges in <b>autonomous robotics</b> and related domains. We develop cutting-edge robots aided by <b>research</b> and represent our university and nation in <b>international competitions</b> that see participants from prestigious colleges worldwide. We are working towards our first participation in the upcoming <b style={{ fontWeight: 'bold', color: '#6194fb' }}>(2025)</b> edition of the &nbsp; <a
            href='https://msl.robocup.org/'
            style={{
            fontWeight: 'bold',
            color: '#6194fb',
            textDecoration: 'none',
            transition: 'color 0.3s, transform 0.3s',
            display: 'inline-block'
          }}
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
        </a>
        {/* We are a team of undergraduates spanning from various majors and dedicated towards developing intelligent solutions for implementing autonomous robotics.  */}
{/* <br/>What We <b>Offer</b>:<br/> */}
      </motion.p>


      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div> */}

        
      {/* <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        1.  <b>Innovative R&D Hub</b>: Dive into an exceptional pool of talent. Immerse yourself in our team's expertise, fostering dynamic collaborations to pioneer groundbreaking solutions and drive mutual growth.<br/>
        2.  <b>Branding Brilliance</b>: Flaunt your brand on robots, banners, and uniforms, capturing attention through thrilling competitions, widespread media coverage, and the power of word-of-mouth buzz.<br/>
        3.  <b>Empowering Future Leaders</b>: Empower gifted students through invaluable guidance and mentorship, all while increasing your company's visibility among budding professionals.<br/>
        4.  <b>Digital Dominance</b>: Amplify your online presence across our website and social media channels, magnifying your outreach and forging connections with a broader audience, all through the influential network of Team ERA.
      </motion.p> */}

      <br/>
    <div className="-mt-[-2rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={`${styles.sectionHeadText1 }`} style={{fontSize: '30px'}}>RoboCup MSL</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-4 text-taupe text-[1.250rem] max-w-3xl leading-[1.875rem]">
          RoboCup Middle Size League (MSL) is an international competition where teams of 5 fully autonomous robots play soccer with a regular-size FIFA soccer ball. The vision of the competition is to reach a level in autonomous robots where a team of fully autonomous robots can win against the most recent FIFA World Cup winner by the year 2050. We aim to be among the first entrants from India and not only compete but win! <br/><br/> <b style={{ fontWeight: 'bold', color: '#6194fb' }}>(28/02/26)</b> <b style={{ fontWeight: 'bold', color: '#000000' }}>: We just sent in our submission for the 2026 edition!</b><CustomButton2/>
          {/* <a
          href="https://www.dropbox.com/scl/fi/165w2ovsfg4wlif3zone6/Brochure.pdf?rlkey=wjhej532ayequjvny56ggnpjt&dl=0"
          style={{
            fontWeight: 'bold',
            color: '#6194fb',
            textDecoration: 'none',
            transition: 'color 0.3s, transform 0.3s',
            display: 'inline-block'
          }}
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
             click here.
        </a> */}
        {/* We are a team of undergraduates spanning from various majors and dedicated towards developing intelligent solutions for implementing autonomous robotics.  */}
{/* <br/>What We <b>Offer</b>:<br/> */}
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div> */}
      {/* <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        1.  <b>Innovative R&D Hub</b>: Dive into an exceptional pool of talent. Immerse yourself in our team's expertise, fostering dynamic collaborations to pioneer groundbreaking solutions and drive mutual growth.<br/>
        2.  <b>Branding Brilliance</b>: Flaunt your brand on robots, banners, and uniforms, capturing attention through thrilling competitions, widespread media coverage, and the power of word-of-mouth buzz.<br/>
        3.  <b>Empowering Future Leaders</b>: Empower gifted students through invaluable guidance and mentorship, all while increasing your company's visibility among budding professionals.<br/>
        4.  <b>Digital Dominance</b>: Amplify your online presence across our website and social media channels, magnifying your outreach and forging connections with a broader audience, all through the influential network of Team ERA.
      </motion.p> */}
      {/* <img src="/src/assets/projects/Robo2.png" alt="Robo2" class="w-20px h-auto"/> */}
    </div>
    </div>
    <div className="flex flex-col items-end">
        <motion.img
          src={dribble}
          alt="Robo2"
          style={{ width: '40.83vw', height: 'auto',  marginTop: '18.29vh', marginLeft: '-10vw' }} // Adjust the size as needed
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
        />
      </div>
      
    </div>
    <br/>
  </>
  );
};

export default SectionWrapper(About, 'about');
