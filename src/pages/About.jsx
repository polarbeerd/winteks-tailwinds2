import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-8"
          />
          <div className="max-w-lg">
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              facilis in ipsum a, repellendus perspiciatis. Voluptatibus, quidem
              officia quam eos voluptatum reiciendis amet laboriosam doloremque
              itaque explicabo repudiandae labore aperiam?
            </p>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi
              dolores fugiat voluptates fugit odio itaque maxime tempora,
              necessitatibus et deleniti ipsa quos dolorum. Sequi laudantium
              officiis natus amet ea?
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Download CV
              </a>
              <a
                href="#"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
