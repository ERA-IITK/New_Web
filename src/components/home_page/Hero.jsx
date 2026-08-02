import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { shaq, robobg } from '../../assets';
import SocialMenu from '../socialMenu';
import Typewriter from '../Typewriter';

const Hero = () => {
  return (
    <section id="hero" className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={robobg}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div>
            <Typewriter styles={styles} />
            <section  className="footer-follow" style={{ fontSize: 48, display: 'flex', gap: '20px', marginLeft:'25px' }}>
            <SocialMenu />
            </section>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4">
          </div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
        <img
            className="mt-[26vh] ml-[25.5vw] 
            lg:ml-[44vw] md:ml-[33vw] xmd:ml-[33vw] 2xl:ml-[52vw]
            sm:h-[80vh] md:h-[60vh] xl:h-[70vh]"
            src={shaq}
            alt="ROBO"
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
