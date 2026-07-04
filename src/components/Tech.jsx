import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Technologies</p>
        <h2 className={styles.sectionHeadTextLight}>Our TechStack</h2>
      </motion.div>

      
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <a href= "https://www.youtube.com" ><div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div></a>
        ))}
      </div>
      
      

    </>
  );
};

export default SectionWrapper(Tech, '');
