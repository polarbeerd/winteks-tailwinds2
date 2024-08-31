import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Welcome to Winteks
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          voluptatibus pariatur enim architecto repellat odio qui. Incidunt
          alias veritatis ratione. Quia minima mollitia atque totam laborum!
          Minus iste aperiam in!{" "}
        </p>
        <Link
          to="/works"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
        >
          View My Work
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Curtains</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            neque veniam voluptas, eius nemo quae obcaecati consequuntur
            tenetur, provident sit expedita, placeat est quam minus quibusdam
            fugiat enim nihil error!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Provide solution</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
            inventore ducimus quaerat et velit illo? Distinctio corrupti itaque
            debitis id deleniti aliquid tenetur, officia vitae autem
            exercitationem. Dolor, quis est.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Hotel Sheets</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            aut quod perferendis facere dolorum deleniti ratione hic. Quis, sunt
            ab id obcaecati corporis reiciendis consequatur suscipit! Ullam
            aspernatur reprehenderit in.{" "}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
