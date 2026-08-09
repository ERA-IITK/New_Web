import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { achievements } from "../../constants";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const CARD_WIDTH = 320;
const GAP = 80;

const AchievementCard = ({ achievement }) => {
  return (
    <div className="group block w-full h-[210px]" style={{ perspective: "1000px" }}>
      <div
        className="relative h-full w-full duration-700" style={{ transformStyle: "preserve-3d", transition: "transform 0.7s", }}>
        <div className="absolute inset-0 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: "preserve-3d", transition: "transform 0.7s", }}>
          <div className="absolute inset-0 rounded-[22px] overflow-hidden bg-jetLight border border-white/10 shadow-card flex flex-col justify-center px-7" style={{ backfaceVisibility: "hidden", }}>
            <p className="text-[11px] uppercase tracking-[3px] text-[#6194fb] font-semibold">
              {achievement.category}
            </p>

            <h1 className="mt-2 text-[52px] leading-none font-black font-beckman text-timberWolf">
              {achievement.year}
            </h1>

            <h2 className="mt-2 text-[20px] leading-tight font-bold text-timberWolf">
              {achievement.title}
            </h2>
          </div>

          <div className="absolute inset-0 rounded-[22px] overflow-hidden bg-[#15171c] border border-[#6194fb]/40 shadow-[0_0_25px_rgba(97,148,251,0.18)] px-7 py-6 flex flex-col justify-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", }}>
            <h2 className="text-[20px] leading-tight font-bold text-timberWolf">
              {achievement.title}
            </h2>
            <p className="mt-2 text-[12px] font-medium text-[#6194fb]">
              {achievement.location}
            </p>
            <p className="mt-4 text-[13px] leading-[1.45rem] text-silver font-poppins">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Timeline() {
  const container = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollLength = slider.current.scrollWidth - window.innerWidth + 200;

      gsap.to(slider.current, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen overflow-hidden bg-transparent">

      <motion.div variants={textVariant()} initial="hidden" whileInView="show" className="absolute inset-x-0 top-16 z-20 flex flex-col items-center justify-center text-center">
        <p className={styles.sectionSubTextLight}>
          Achievements
        </p>
        <h2 className={styles.sectionHeadTextLight}>
          Our Journey
        </h2>
      </motion.div>

      <div ref={slider} className="absolute left-32 top-[60%] -translate-y-1/2 flex items-start">
        <div className="absolute top-[16px] left-0 h-[3px] rounded-full"
          style={{
            width: achievements.length * CARD_WIDTH + (achievements.length - 1) * GAP,
            background: "linear-gradient(90deg,#3b82f6,#6194fb,#3b82f6)",
          }}
        />
        {achievements.map((achievement, index) => (
          <div
            key={index}
            style={{
              width: CARD_WIDTH,
              marginRight: index === achievements.length - 1 ? 0 : GAP,
            }}
            className="relative flex flex-col items-center"
          >
            <div className="relative z-10 w-9 h-9 rounded-full border-4 border-jetLight bg-[#6194fb] shadow-[0_0_18px_rgba(97,148,251,0.8)]"/>
            <AchievementCard achievement={achievement}/>
          </div>

        ))}
        <div className="w-40" />
      </div>
    </section>
  );
}

export default Timeline;