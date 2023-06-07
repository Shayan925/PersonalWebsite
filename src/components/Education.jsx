import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { education } from "../constants";

const EducationCard = ({ education }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black-100 rounded-3xl p-6 xs:w-[350px] w-full"
    >
      <div className="mt-1">
        <img
          src={education.icon}
          alt={education.company_name}
          className="w-16 h-16 rounded-full object-cover mx-auto"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-white text-lg font-bold">{education.title}</h3>
        <p className="text-secondary text-sm font-semibold">
          {education.company_name}
        </p>
      </div>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        {education.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white text-sm">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Education = () => {
    return (
      <div className="mt-0 rounded-20px">
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText} mt-0 mb-6`}>Education.</h2>
          </motion.div>
          <div className="overflow-y-auto">

            <div className="flex flex-wrap gap-7">
              {education.map((educationItem, index) => (
                <EducationCard key={index} education={educationItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SectionWrapper(Education, "education");
  
