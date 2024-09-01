import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

const OutputPage = ({ ocrText }) => {
  const textRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(ocrText);
    alert("Text copied to clipboard!");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([ocrText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "ocr_result.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="h-dvh w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto px-4 py-8 min-h-screen  text-white ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-gray-100 "
        >
          OCR Result
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter  backdrop-blur-sm"
        >
          <div
            ref={textRef}
            className="bg-gray-900 bg-opacity-50 p-4 rounded-lg mb-4 h-64 overflow-auto text-gray-300 backdrop-filter backdrop-blur-sm"
          >
            {ocrText}
          </div>
          <div className="flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="bg-black hover:bg-white text-white hover:text-black border border-white font-bold py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Copy Text
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="bg-black hover:bg-white text-white hover:text-black border border-white font-bold py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Download as TXT
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            to="/"
            // className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Back to input page
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OutputPage;
