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
  const downloadResume = () => {
    // Replace 'resume.pdf' with the actual file name and path
    const resumeFile =
      "http://drive.google.com/file/d/1xYBFeFxKqs17ycyDuxpyBeXQKQLYpsIm/view?usp=sharing";

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = resumeFile;

    // Set the anchor's attributes for downloading
    anchor.download = "Manvendra_Pratap_Singh_Resume.pdf";
    anchor.target = "_blank";

    // Trigger a click event on the anchor element
    anchor.click();
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        🚀 Hello! I'm Manvendra Pratap Singh, frontend developer
        currently contributing to the success of Advanced Structures India. With
        a rich background in crafting exceptional user experiences, like integrating QR code scanning into search pages and
        implementing performance optimizations such as lazy loading and
        server-side pagination. My freelance endeavors, such as projects at
        Anedya, have further fortified my expertise in secure, feature-rich
        solutions like single-page web apps with JWT authentication and
        real-time data analysis. With a proven track record of problem-solving
        and a knack for pushing boundaries, I thrive in collaborative
        environments and am excited to bring my skills to your team. Let's
        connect and explore how we can continue creating impactful solutions
        together!
        <br />
        <button
          className="bg-tertiary m-2 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          onClick={downloadResume}
        >
          Resume
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
