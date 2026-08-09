// import React, { useRef, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import { achievements } from "../../constants";
// import { styles } from "../../styles";
// import { fadeIn, textVariant } from "../../utils/motion";

// gsap.registerPlugin(ScrollTrigger);

// function Timeline() {
//   const container = useRef(null);
//   const slider = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const totalWidth =
//         slider.current.scrollWidth - window.innerWidth + 250;

//       gsap.to(slider.current, {
//         x: -totalWidth,
//         ease: "none",
//         scrollTrigger: {
//           trigger: container.current,
//           start: "top top",
//           end: `+=${totalWidth}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={container}
//       className="relative h-screen overflow-hidden bg-transparent"
//     >
//       <motion.div
//         variants={textVariant()}
//         initial="hidden"
//         whileInView="show"
//         className="absolute top-16 inset-x-0 z-20 flex flex-col items-center justify-center text-center"
//       >
//         <p className={styles.sectionSubTextLight}>
//           Achievements
//         </p>

//         <h2 className={styles.sectionHeadTextLight}>
//           Our Journey
//         </h2>
//       </motion.div>

//       <div
//         ref={slider}
//         className="absolute left-32 top-1/2 -translate-y-1/2 flex items-center gap-36"
//       >
//         {achievements.map((item, index) => (
//           <motion.div
//             key={index}
//             variants={fadeIn("up", "spring", index * 0.15, 0.75)}
//             className="relative flex flex-col items-center text-center w-[360px]"
//           >
//             {/* Connecting Line */}
//             {index !== achievements.length - 1 && (
//               <div className="absolute top-4 left-8 w-[380px] h-[3px] bg-gradient-to-r from-[#6194fb] to-[#9bc1ff]" />
//             )}

//             {/* Timeline Dot */}
//             <div className="relative z-20 w-8 h-8 rounded-full bg-[#6194fb] border-4 border-[#0f172a] shadow-[0_0_20px_rgba(97,148,251,0.8)]" />

//             {/* Card */}
//             <div
//               className="
//       mt-10
//       w-full
//       rounded-[24px]
//       bg-jetLight
//       border border-[#6194fb]/30
//       shadow-card
//       backdrop-blur-sm
//       p-8
//       transition-all
//       duration-300
//       hover:-translate-y-2
//       hover:border-[#6194fb]
//     "
//             >
//               <h1 className="text-[54px] font-black text-[#6194fb] font-beckman text-center">
//                 {item.year}
//               </h1>

//               <h2 className="mt-3 text-[22px] font-bold text-timberWolf text-center">
//                 {item.title}
//               </h2>

//               <p className="mt-5 text-silver leading-7 font-poppins text-center">
//                 {item.text}
//               </p>
//             </div>
//           </motion.div>
//         ))}

//         <div className="w-40" />
//       </div>

//       {/* Bottom Hint */}
//       <div className="absolute bottom-10 w-full flex justify-center">
//         <p className="text-taupe tracking-widest uppercase text-sm">
//           Scroll to explore →
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Timeline;

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { achievements } from "../../constants";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const CARD_WIDTH = 340;
const GAP = 90;

function Timeline() {
  const container = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollLength =
        slider.current.scrollWidth - window.innerWidth + 200;

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
    <section
      ref={container}
      className="relative h-screen overflow-hidden bg-transparent"
    >
      {/* Heading */}

      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        className="absolute inset-x-0 top-16 z-20 flex flex-col items-center text-center"
      >

        <h2 className={styles.sectionHeadTextLight}>
          Our Journey
        </h2>
      </motion.div>

      {/* <div className="mt-20" /> */}

      {/* Timeline */}

      <div
        ref={slider}
        className="absolute left-32 top-[60%] -translate-y-1/2 flex items-start"
      >
        {/* Continuous Line */}

        <div
          className="absolute top-[16px] left-0 h-[3px] rounded-full"
          style={{
            width:
              achievements.length * CARD_WIDTH +
              (achievements.length - 1) * GAP,
            background:
              "linear-gradient(90deg,#3b82f6,#6194fb,#3b82f6)",
          }}
        />

        {achievements.map((item, index) => (
          <div
            key={index}
            style={{
              width: CARD_WIDTH,
              marginRight:
                index === achievements.length - 1 ? 0 : GAP,
            }}
            className="relative flex flex-col items-center"
          >
            {/* Dot */}

            <div
              className="
                relative
                z-10
                w-9
                h-9
                rounded-full
                border-4
                border-jetLight
                bg-[#6194fb]
                shadow-[0_0_18px_rgba(97,148,251,0.8)]
              "
            />

            {/* Card */}

            <div
              className="
                mt-10
                w-full
                h-[380px]
                rounded-[24px]
                bg-jetLight
                border
                border-[#6194fb]/20
                backdrop-blur-md
                shadow-card
                p-8

                transition-all
                duration-300

                hover:-translate-y-3
                hover:scale-[1.02]
                hover:border-[#6194fb]
                hover:shadow-[0_0_30px_rgba(97,148,251,0.35)]
              "
            >
              <span
                className="
                  inline-block
                  text-xs
                  uppercase
                  tracking-widest
                  text-[#6194fb]
                  bg-[#6194fb]/10
                  px-3
                  py-1
                  rounded-full
                "
              >
                {item.category}
              </span>

              <h1 className="mt-5 text-[54px] leading-none font-black font-beckman text-[#6194fb]">
                {item.year}
              </h1>

              <h2 className="mt-4 text-[22px] font-bold text-timberWolf">
                {item.title}
              </h2>

              <p className="mt-1 text-sm text-[#7aa6ff]">
                {item.location}
              </p>

              <div className="mt-5 h-px w-full bg-white/10" />

              <p className="mt-5 text-silver leading-7 font-poppins text-[15px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        <div className="w-40" />
      </div>
    </section>
  );
}

export default Timeline;