import React from "react";
import { motion } from "framer-motion";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      image: "https://via.placeholder.com/300x200",
      description:
        "A fully functional e-commerce platform built with React and Node.js",
    },
    {
      id: 2,
      title: "Weather App",
      image: "https://via.placeholder.com/300x200",
      description: "A weather application using OpenWeatherMap API and React",
    },
    {
      id: 3,
      title: "Task Manager",
      image: "https://via.placeholder.com/300x200",
      description:
        "A productivity app built with React Native for iOS and Android",
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: "https://via.placeholder.com/300x200",
      description: "A responsive portfolio website using Gatsby and GraphQL",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
