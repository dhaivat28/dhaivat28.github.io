import { motion } from "framer-motion";
import Profile from "../../assets/Profile.jpg";

const AppBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex container mx-auto"
    >
      <div className="flex-3/5  flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-start">
          <motion.h1
            className="uppercase self-start text-3xl font-nunito font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
          >
            Hi, I am Dhaivat Parikh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.2,
            }}
            className="mt-4 text-gray-500 text-lg max-w-[600px]"
          >
            Software engineer with 5+ years of experience in developing web and
            mobile apps, with a strong focus on building efficient and scalable
            solutions. Experienced in contributing to a range of internal and
            customer-facing projects across industries such as fintech,
            environmental services, and marketing technology.
          </motion.p>
        </div>
      </div>
      <motion.div
        className="flex-2/5 p-4"
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      >
        <img
          src={Profile}
          alt="Developer"
          className="w-120 h-120 object-cover rounded-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
