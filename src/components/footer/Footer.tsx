import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col p-4">
      <div className="w-full flex flex-col gap-2 xl:gap-6 items-center xl:flex-row xl:justify-end p-4">
        <a
          href="mailto:dhaivat28@gmail.com"
          className="w-fit font-nunito font-semibold text-gray-600 flex items-center gap-2"
        >
          <FaEnvelope /> dhaivat28@gmail.com
        </a>

        <a
          href="tel:+61469729216"
          className="w-fit font-nunito font-semibold text-gray-700  flex items-center gap-2"
        >
          <FaPhone />
          +61 469 729 216
        </a>
      </div>

      <div className="flex flex-col items-center gap-2 xl:flex-row xl:gap-0 xl:justify-between p-4 border-t-2 border-gray-200">
        <h4 className="font-nunito font-semibold text-gray-800">
          Dhaivat Parikh
        </h4>

        <p className="text-gray-500 text-sm order-last xl:order-none">
          © {new Date().getFullYear()} Dhaivat Parikh. All rights reserved.
        </p>

        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/dhaivat28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:text-blue-800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dhaivat28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-2xl hover:text-black"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
