import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion, transform } from "framer-motion"


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,  
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}} 
         className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}  
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(1.5)}
              initial="initial"
              animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4 ">
              <RiReactjsLine className="text-7xl text-cyan-400 "/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4 ">
              <FaPython className="text-7xl "/>
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4 ">
              <FaJava className="text-7xl text-blue-400 "/>
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4 ">
              <TbBrandCpp className="text-7xl text-red-400 "/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4 ">
              <FaNodeJs className="text-7xl text-green-400 "/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4 ">
              <BiLogoPostgresql className="text-7xl text-sky-700 "/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
