import { motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Profile from "../../assets/Profile_img_round.png";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col-reverse xl:flex-row container mx-auto p-4 xl:-translate-y-10"
    >
      <div className="flex flex-1/2 flex-col items-center justify-center pt-8 xl:pt-0">
        <div className="flex flex-col justify-center gap-4 md:gap-6 xl:gap-7 pl-4 xl:pl-0">
          <div className="flex flex-col gap-1.5 xl:gap-4 text-3xl md:text-4xl xl:text-5xl font-mono font-medium tracking-normal text-gray-800">
            <h1>Hi, I’m</h1>
            <h1>Dhaivat Parikh</h1>
          </div>

          <p className="text-gray-600 text-lg max-w-[600px]">
            Software engineer with 5+ years of experience in developing web and
            mobile apps, with a strong focus on building efficient and scalable
            solutions. Experienced in contributing to a range of internal and
            customer-facing projects across industries such as fintech,
            environmental services, and marketing technology.
          </p>

          <div className="flex flex-row items-center gap-4 cursor-pointer text-2xl">
            <a
              href="https://www.linkedin.com/in/dhaivat28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href={"https://github.com/dhaivat28"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:dhaivat28@gmail.com"
              className="font-nunito font-semibold text-2xl text-gray-500 hover:text-blue-600 flex items-center gap-2"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <motion.div
        className="flex-1/2 flex flex-col justify-center items-center xl:-translate-y-7"
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      >
        <img
          src={Profile}
          alt="Dhaivat's Parikh's Image"
          className="w-75 h-75 md:w-120 md:h-120 xl:w-140 xl:h-140 object-cover"
        />
      </motion.div>
    </motion.section>
  );
};
