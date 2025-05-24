import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="container mx-auto mt-12 flex flex-col p-4 border-dotted border-1 border-red-500">
      <div className="w-fit flex ml-auto gap-4 p-4 ">
        <a
          href="mailto:dhaivat28@gmail.com"
          className="font-nunito font-semibold text-gray-600 hover:text-blue-600 flex items-center gap-2"
        >
          <FaEnvelope /> dhaivat28@gmail.com
        </a>

        <a
          href="tel:+61469729216"
          className="font-nunito font-semibold text-gray-700 hover:text-green-600 flex items-center gap-2"
        >
          <FaPhone />
          +61 469 729 216
        </a>
      </div>

      <div className="flex items-center justify-between p-4 border-t-2 border-gray-200">
        <h4 className="font-nunito font-semibold">Dhaivat Parikh</h4>
        <p className="text-gray-500 text-sm">
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
