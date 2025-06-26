import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <section id="home" className=" mx-10 flex h-screen   pt-15">
        <div className="flex-1  text-white flex flex-col justify-center items-center">
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
            className=" text-5xl text-red-700"> Yogesh Priyadarshi </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            className=" text-4xl"> Full Stack Developer </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            className="flex">
              <a href="https://www.linkedin.com/in/yogesh-priyadarshi-067b9b362/" target="_blank">
                {" "}
                <img
                  src="assets/Contacts/LinkedIN.webp"
                  className="h-15 w-15 rounded-full"
                />{" "}
              </a>
              <a href="https://github.com/yogeshpriyadarshi" target="_blank">
                {" "}
                <img
                  src="assets/Contacts/Github.png"
                  className="h-15 w-15 rounded-full"
                />{" "}
              </a>
              <a>
                {" "}
                <img
                  src="assets/Contacts/LinkedIN.webp"
                  className="h-15 w-15 rounded-full"
                />{" "}
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, -5, 5, -5, 5, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
        className="flex-1 flex justify-center  items-center ">
          <img
            src="assets\profile pic.jpeg"
            alt="Profile Pic"
            className="rounded-full h-125 w-125"
          />
        </motion.div>
      </section>
    </>
  );
}
