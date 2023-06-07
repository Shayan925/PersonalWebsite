import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const handleCardClick = () => {
    window.open(source_code_link, "_blank");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div
          className="relative w-full h-[230px]"
          onClick={handleCardClick} // Add click event handler here
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5" style={{ paddingTop: "20px" }}>
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  const handleConnectClick = () => {
    window.open('https://github.com/Shayan925', '_blank');
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore a diverse range of projects on my GitHub profile, showcasing my capabilities through real-world examples of my work. 
          Each project is presented with concise descriptions and links to their respective code repositories. These projects 
          demonstrate my proficiency in solving complex problems and highlight my adaptability in working with various technologies. 
          They also reflect my efficient project management skills, resulting in high-quality outcomes. By visiting my GitHub profile, 
          you can discover more of my projects and gain insights into my abilities, experience, and dedication to delivering exceptional 
          solutions.

          <button
          onClick={handleConnectClick}
          className="flex items-center gap-2 mt-4 py-2 px-4 text-white bg-primary rounded-md text-lg font-bold"
          style={{ marginLeft: '-15px' }}
          >
          <img src="src\assets\github.png" alt="Icon" className="w-8 h-8" />
          See more projects on GitHub! <span>&rarr;</span>
        </button>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
