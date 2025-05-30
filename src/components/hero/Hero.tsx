import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Profile from "../../assets/Profile.jpg";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex container mx-auto p-4 "
    >
      <div className="flex-3/5 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-5xl font-mono font-medium tracking-wider">
                Hi, I’m
              </h1>
              <h1 className="text-5xl font-mono font-medium tracking-wider">
                Dhaivat Parikh
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-md max-w-[600px] mt-4">
            Software engineer with 5+ years of experience in developing web and
            mobile apps, with a strong focus on building efficient and scalable
            solutions. Experienced in contributing to a range of internal and
            customer-facing projects across industries such as fintech,
            environmental services, and marketing technology.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <a
              href={"https://github.com/dhaivat28"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-2xl hover:text-black cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dhaivat28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-2xl hover:text-blue-500 cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <motion.div
        className="flex-2/5 p-4"
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      >
        <img
          src={Profile}
          alt="Developer"
          className="w-120 h-120 object-cover rounded-3xl"
        />
      </motion.div>
    </motion.section>
  );
};
