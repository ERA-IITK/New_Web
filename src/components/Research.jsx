import React, { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { Link } from 'react-router-dom';
import { services } from '../constants';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { Particles } from '../components/Particles';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
// import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import Navbar1 from './Navbar1';
// import CustomButton2 from './Button_Research';

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

const Research = () => {
  const initialActiveProjectId = 'project-2'; // Change this to the actual ID of the IITK project
  const [activeProject, setActiveProject] = useState(initialActiveProjectId);

  // const initialActiveSponsorId = 'project-6'; // Change this to the actual ID of the IITK sponsor
  // const [activeSponsor, setActiveSponsor] = useState(initialActiveSponsorId);

  useEffect(() => {
    // Scroll to the top when the component mounts or the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const setActiveProjectCard = (projectId) => {
    setActiveProject(projectId);
  };

  // const setActiveSponsorCard = (sponsorId) => {
  //   setActiveSponsor(sponsorId);
  // };

  return (
    <>
    <Particles/>
    {/* Projects Section */}
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <Navbar1 />
    </div>
    {/* <div className="absolute top-10 left-5 z-50">
      <Link to="/" style={{ position: 'fixed', top: '4.5vh', left: '7.4vw', zIndex: '1000000' }}>
        <ArrowBackIosSharpIcon style={{ color: 'white' }} />
      </Link>
    </div> */}
    <div id='projects' style={{ position: 'relative', width: '80vw', marginLeft: '0vw', marginTop: '5vh' }}>
        <motion.div variants={textVariant()} className={`${styles.textCenter} flex-col`}>

          {/* <p className={`${styles.sectionSubText} `}>Accomplishments</p> */}
          <h2 className={`${styles.sectionHeadTextLight}`}>Research</h2>
          <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className={`sm:text-[18px] text-[16px] text-taupe  tracking-wider font-poppins ml-2 ${styles.textCenter}`}>
            The team was founded under Prof. Laxmidhar Behera, currently the director of IIT Mandi, in 2018. We continue to work with faculty, our current advisor being Prof. Indranil Saha. Since our inception, we have grown in number and ability, undertaking various projects, participating in competitions, and demonstrating our research. To get to know the amazing people involved, &nbsp;
            <a
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
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#6194fb';
                e.target.style.transform = 'scale(1)';
              }}
              >
                click here.
            </a>
          </motion.p>
        </motion.div>
      <div className="mt-200 flex flex-wrap gap-10" style={{marginTop: '10vh', width: '80vw'}}>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* <motion.div className={`${styles.textCenter} flex-col`}>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className={`sm:text-[18px] text-[16px] text-taupe  tracking-wider font-poppins ml-2 ${styles.textCenter}`} style={{marginTop: '10vh' }}>
          1.  <b>Innovative R&D Hub</b>: Dive into an exceptional pool of talent. Immerse yourself in our team's expertise, fostering dynamic collaborations to pioneer groundbreaking solutions and drive mutual growth.<br/>
          2.  <b>Branding Brilliance</b>: Flaunt your brand on robots, banners, and uniforms, capturing attention through thrilling competitions, widespread media coverage, and the power of word-of-mouth buzz.<br/>
          3.  <b>Empowering Future Leaders</b>: Empower gifted students through invaluable guidance and mentorship, all while increasing your company's visibility among budding professionals.<br/>
          4.  <b>Digital Dominance</b>: Amplify your online presence across our website and social media channels, magnifying your outreach and forging connections with a broader audience, all through the influential network of Team ERA.
        </motion.p>
      </motion.div> */}
    </div>
    
    </>
  );
};

export default SectionWrapper(Research, 'research');

