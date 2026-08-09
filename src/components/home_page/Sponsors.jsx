import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { sponsorData } from "../../constants";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import CustomButton from "../Button_Brochure";
import CustomButton1 from "../Button_Pitch_deck";

const SponsorCard = ({ sponsor }) => {
  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-[200px] w-full overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-[#6194fb]/20 bg-jetLight shadow-card transition-all duration-500 group-hover:border-[#6194fb]/60 group-hover:shadow-[0_0_30px_rgba(97,148,251,0.2)]">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-h-[65%] max-w-[65%] object-contain transition-all duration-500 group-hover:scale-90 group-hover:opacity-20"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <h3 className="px-6 text-center font-beckman text-[28px] font-bold uppercase tracking-[2px] text-timberWolf">
            {sponsor.name}
          </h3>
        </div>
      </div>
    </a>
  );
};


const Sponsors = () => {
  return (
    <section id="sponsors" className="mt-20 mb-28">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >

        <h2 className={styles.sectionHeadTextLight}>
          Our Sponsors
        </h2>

        <p
          variants={fadeIn("", "", 0.15, 1)}
          className="mt-6 max-w-4xl mx-auto text-taupe text-[18px] leading-8"
        >
          Team ERA is grateful to our sponsors for supporting our research,
          competitions, and student-led innovation. Their contributions enable
          us to design, build, and deploy autonomous robotic systems while
          representing IIT Kanpur on international platforms.
        </p>

        <div className="flex justify-center gap-5 mt-8">
          <CustomButton />
          <CustomButton1 />
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.innerWidth} mx-auto mt-16`}
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {sponsorData.map((sponsor, index) => (
            <SponsorCard
              key={sponsor.id}
              sponsor={sponsor}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// export default SectionWrapper(Sponsors, "sponsors");
export default Sponsors;