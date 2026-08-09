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
      className="group block h-[200px]"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative h-full w-full duration-700"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s",
        }}
      >
        {/* Rotate on hover */}
        <div
          className="group-hover:[transform:rotateY(180deg)] absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.7s",
          }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden border border-[#6194fb]/20 bg-jetLight shadow-card flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-24 max-w-[70%] object-contain"
            />
          </div>

          {/* BACK */}
<div
  className="absolute inset-0 rounded-3xl border border-[#6194fb]/20 bg-jetLight shadow-card p-6 flex flex-col justify-center items-center text-center"
  style={{
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
  }}
>
            <h3 className="text-2xl font-bold text-timberWolf">
              {sponsor.name}
            </h3>

            <p className="mt-3 text-silver text-sm leading-6">
              {sponsor.description}
            </p>
          </div>
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
        <p className={styles.sectionSubTextLight}>
          Partners
        </p>

        <h2 className={styles.sectionHeadTextLight}>
          Our Sponsors
        </h2>

        <motion.p
          variants={fadeIn("", "", 0.15, 1)}
          className="mt-6 max-w-4xl mx-auto text-taupe text-[18px] leading-8"
        >
          Team ERA is grateful to our sponsors for supporting our research,
          competitions, and student-led innovation. Their contributions enable
          us to design, build, and deploy autonomous robotic systems while
          representing IIT Kanpur on international platforms.
        </motion.p>

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

export default SectionWrapper(Sponsors, "sponsors");