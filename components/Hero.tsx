"use client";
import Image from "next/image";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { SiLeetcode } from "react-icons/si";
import { FaArrowDown, FaSquareXTwitter } from "react-icons/fa6";

export default function Hero() {
  const arrowControls = useAnimationControls();

  const handleScrollDown = async () => {
    window.scrollBy({ top: 360, behavior: "smooth" });

    await arrowControls.start("clicked");
    arrowControls.set("initial");
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const arrowVariants: Variants = {
    initial: {
      y: 0,
      opacity: 1,
    },
    clicked: {
      y: 100, 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div
      id="home"
      className="flex items-center justify-center min-h-screen p-6 bg-white"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center text-center gap-12 md:text-left md:space-x-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4"
        >
          <a
            href="https://github.com/JuberQureshi01"
            className="text-black text-2xl md:text-3xl bg-white hover:text-blue-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Juberq_01"
            className="text-black text-2xl md:text-3xl bg-white hover:text-blue-500 transition-colors"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/JuberQureshi/"
            className="text-black text-2xl md:text-3xl bg-white hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/juber001/"
            className="text-black text-2xl md:text-3xl bg-white hover:text-blue-500 transition-colors"
          >
            <SiLeetcode />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="relative mt-6 md:mt-0">
          <Image
            src="/juber.jpg"
            alt="Juber Qureshi"
            width={150}
            height={150}
            quality={100}
            className="rounded-full object-cover w-[150px] h-[150px] md:w-60 md:h-60 border-4 border-gray-300 dark:border-gray-600"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-6 md:mt-0 md:ml-6 flex flex-col items-center md:items-start"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Juber Qureshi
          </h1>
          <p className="mt-2 text-gray-500 text-sm md:text-base">
            ___Full Stack Software Developer
          </p>
          <p className="mt-4 text-sm text-gray-600 max-w-md text-center md:text-left">
            Building scalable web applications with React, Next.js, Node.js,
            TypeScript, PostgreSQL, MongoDB, and cloud technologies.
          </p>
          <p className="mt-2 text-xs text-gray-400 max-w-md text-center md:text-left">
            Currently working as a Full Stack Developer at Waplia Digital Solutions.
          </p>
          <a
            href="https://wa.me/916376816181?text=Hi%20Juber!%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
          >
            Say Hello <HiOutlineArrowUpRight />
          </a>
        </motion.div>
      </motion.div>
      <div className="home__scroll hidden md:flex absolute md:bottom-18 md:left-62 text-black">
        <button
          onClick={handleScrollDown}
          className="home__scroll-button button-flex flex items-center"
        >
          <svg
            width="32px"
            height="32px"
            className="home__scroll-mouse"
            viewBox="0 0 247 390"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 1.5,
            }}
          >
            <path
              className="wheel"
              d="M123.359,79.775l0,72.843"
              style={{ fill: "none", stroke: "currentColor", strokeWidth: 20 }}
            ></path>
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{ fill: "none", stroke: "currentColor", strokeWidth: 20 }}
            ></path>
          </svg>
          <span className="home__scroll-name text-sm mt-1 flex items-center gap-2.5">
            <span className="border-r-2 pr-2">Scroll Down</span>{" "}
            <motion.div
              className="relative"
              animate={arrowControls}
              initial="initial"
              variants={arrowVariants}
            >
              <FaArrowDown className="cursor-pointer animate-bounce " />
            </motion.div>
          </span>
        </button>
      </div>
    </div>
  );
}
