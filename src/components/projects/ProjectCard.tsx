import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import type { ProjectItem } from "./util";

export const ProjectCard = ({
  image,
  title,
  description,
  githubLink,
  previewUrl,
}: ProjectItem) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="cursor-pointer mb-10 sm:mb-0 max-w-[330px] border border-[#d0d0d0] text-charcoal rounded-xl">
        <div>
          <img
            src={image}
            className="rounded-t-xl border-none"
            alt={`Project: ${title}`}
          />
        </div>
        <div className="py-6 px-6">
          <p className="font-nunito font-semibold text-center text-lg md:text-xl mb-2">
            {title}
          </p>

          <p
            className="font-nunito text-charcoal text-md min-h-[240px]"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />

          <div className="flex justify-center gap-6 items-center mt-6">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-1 cursor-pointer"
            >
              <span>Github</span> <FaGithub />
            </a>

            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-1 cursor-pointer"
            >
              <span>Live Preview</span> <LiaExternalLinkSquareAltSolid />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
