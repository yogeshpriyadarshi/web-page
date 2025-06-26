import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <section id="about" className="text-white flex ">
        <div className="flex-1 h-screen flex flex-col justify-center items-center">
          <motion.div 
           initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
          className=" m-2 text-4xl text-center">
            {" "}
            About <span className="text-red-500"> Me </span>
          </motion.div>
          <motion.p 
           initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
          className="mx-2 mt-5 text-2xl">
            {" "}
            I’m a Full Stack Developer with a strong foundation in HTML, CSS,
            JavaScript, Tailwind, SQL, MongoDB, Node.js, Express.js, ReactJS,
            and Figma. I’m passionate about using these skills to develop
            innovative web applications that are user-friendly. I’m always eager
            to learn more about web development and Coding. I enjoy the
            challenge of coding and solving real-world problems. Currently, I’m
            looking for opportunities to join a team that values innovation and
            shares my enthusiasm for technology.{" "}
          </motion.p>
        </div>
      </section>
    </>
  );
}
