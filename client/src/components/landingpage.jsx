import React from "react";
import { motion } from "motion/react";
const landingpage = () => {
  return (
    <>
      <motion.main
        initial={{ top: [1000] }}
        animate={{ top: [0, -5000] }}
        transition={{ delay: 1, duration: 12 }}
        className="min-w-screen absolute min-h-lvh z-10 bg-black text-white items-center flex justify-items-center"
      >
        <spline-viewer
          className="absolute z-20 min-w-screen min-h-screen "
          url="https://prod.spline.design/4p7yOMjhWUczDEnm/scene.splinecode"
        ></spline-viewer>
        <motion.h1 className=" z-20 w-full text-center text-3xl md:text-9xl">
          Welcome to Our Page
        </motion.h1>
      </motion.main>
    </>
  );
};

export default landingpage;
