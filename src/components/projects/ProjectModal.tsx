import { AnimatePresence, motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import Carousel from "./Carousel";

interface ProjectModalProps {
  setShowNewProjectModal: (show: boolean) => void;
}

export const ProjectModal = ({ setShowNewProjectModal }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
        onClick={() => setShowNewProjectModal(false)}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="relative bg-white rounded-2xl w-full max-w-4xl p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowNewProjectModal(false)}
            className="absolute top-8 right-8 text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <IoCloseCircleOutline className="h-8 w-8 cursor-pointer" />
          </button>

          <h2 className="text-3xl font-semibold mb-6">Simply Fi</h2>

          <Carousel />

          <p className="mt-6 text-gray-700">
            Back in late December 2023, my partner and I were managing our
            finances using conventional spreadsheets. While spreadsheets gave us
            a basic structure to log income and expenses, they quickly became
            limiting. To improve this, I tried setting up a system using
            Notion.so. It offered a bit more flexibility and a better user
            interface, but it still lacked dynamic features like analytics,
            robust filtering or summarization. It was more visual than Excel but
            still didn’t feel like a true solution.
          </p>
          <br />
          <p className="text-gray-700">
            That experience planted the seed for building my own budget tracker
            — one that was collaborative, customizable, and intuitive — tailored
            to real financial workflows, not just rows and columns.
          </p>
          <br />
          <p>
            To bring this idea to life, I built the budget tracker using a
            modern full-stack setup. The frontend is developed with{" "}
            <b>React (TypeScript)</b>, styled using <b>Tailwind CSS</b> and{" "}
            <b>ShadCN UI</b> for a clean, responsive experience. The backend is
            powered by <b>NestJS</b> with <b>GraphQL</b>, <b>Prisma</b>, and{" "}
            <b>PostgreSQL</b>. For authentication and authorization, I’ve
            integrated <b>PassportJS</b> and <b>CASL</b> to ensure secure,
            role-based access throughout the application.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
