import { motion } from "motion/react";
import SocialMedia from "./SocialMedia";

export default function Home() {
  return (
    <>
      <section id="home" className=" mx-10 md:flex h-screen pt-15 ">
        <div className="flex-1  text-white flex flex-col justify-center items-center m-5">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl"
            >
              {" "}
              Hello, I'm{" "}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className=" text-5xl text-red-700"
            >
              {" "}
              Yogesh Priyadarshi{" "}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className=" text-4xl"
            >
              {" "}
              Full Stack Developer{" "}
            </motion.div>
            <SocialMedia />

            <div className="my-5">
              <a
                href="Yogesh.pdf"
                download="Yogesh.pdf"
                className="px-6 py-3 m-5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -5, 5, -5, 5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex-1 flex justify-center  items-center m-5 "
        >
          <img
            src="assets\profile pic.jpeg"
            alt="Profile Pic"
            className="rounded-full md:h-100 md:w-100 h-75 w-75 xl:w-125 xl:h-125 "
          />
        </motion.div>
      </section>
    </>
  );
}
