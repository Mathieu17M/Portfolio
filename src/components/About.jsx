import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/3 flex justify-center">
        <FaReact className="text-9xl text-accent" />
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 mb-4">
          Hello, my name is Mathieu Mayard and I am a passionate computer science student currently in my 3rd year at Epitech Bordeaux.
        </p>
        <p className="text-gray-300 mb-4">
          Developer with experience in web development, system programming, and software architecture, I am offering my services for a 4 or 5-month internship starting in April 2025.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Mathieu17M"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mathieu-mayard-ba5a85240/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
