import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/shayan-j-925a93217/', '_blank');
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an ambitious student attending the University of Waterloo with hopes to create software that will 
        one day be impactful to people's lives. Ever since I attended my first hackathon in 2019, 
        I have been exposed to the world of programming and learned about the limitless possibilities of 
        writing code. This urged me to pursue a Bachelor's of Computer Science by combining my creativity 
        and logical thinking abilities, as well as expand on my current set of skills.

        <button
          onClick={handleConnectClick}
          className="flex items-center gap-2 mt-4 py-2 px-4 text-white bg-primary rounded-md text-lg font-bold"
          style={{ marginLeft: '-15px' }}
          >
          <img src="src\assets\linkedin.png" alt="Icon" className="w-8 h-8" />
          Connect with me on LinkedIn! <span>&rarr;</span>
        </button>

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
