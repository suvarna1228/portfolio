import { RiReactjsLine } from "react-icons/ri"
import { SiTailwindcss } from "react-icons/si"; 
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io"; 
import { SiBootstrap } from "react-icons/si";


import { SiFirebase } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";  
import { FaGithub } from "react-icons/fa"; 
import { SiVercel } from "react-icons/si"; 

import { SiGooglesearchconsole } from "react-icons/si"; 
import { SiCplusplus } from "react-icons/si"; 
import { FaPython } from "react-icons/fa"; 

import { FaRegFileWord } from "react-icons/fa";
import { GiGears } from "react-icons/gi"; 
import { FaDraftingCompass } from "react-icons/fa"; 

import { motion} from "framer-motion";

const iconVariants =(duration)=>({
  initial:{y:-10},
  animate: {
    y:[10, -10],
    transition:{duration: duration, 
      ease:"linear",
      repeat:Infinity,
      repeatType: "reverse",

    },
  },
})

const Technologies = () => {
  return (
    <section id='technogies'>
      <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
                   whileInView={{opacity:1,y:0}}
                   initial={{opacity:0,y:-100}}
                   transition={{duration:0.5}}
                    className='my-20 text-center text-4xl'>
        Technogies
        </motion.h2>
        <motion.div 
                   whileInView={{opacity:1,x:0}}
                   initial={{opacity:0,x:-100}}
                   transition={{duration:1.5}}
                   className='flex flex-wrap items-center justify-center gap-4'>
          
          <motion.div
                  variants={iconVariants(2.5)}
                  initial="initial"
                  animate="animate"
                   className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className="text-7xl text-cyan-500"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(4)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTailwindcss className="text-7xl text-sky-400"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(7)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript className="text-7xl text-yellow-400"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(9)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiBootstrap className="text-7xl text-purple-600"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(2.5)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaCss3Alt className="text-7xl text-blue-600"/>
          </motion.div>


          <motion.div 
                  variants={iconVariants(9)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiFirebase className="text-7xl text-yellow-600"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(5)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className="text-7xl text-sky-700"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(2.5)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGithub className="text-7xl text-white"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(4)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiVercel className="text-7xl text-white"/>
          </motion.div>

          
          <motion.div 
                  variants={iconVariants(9)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiGooglesearchconsole className="text-7xl text-green-500"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(11)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiCplusplus className="text-7xl text-blue-500"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(3)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaPython className="text-7xl text-yellow-400"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(7)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaRegFileWord className="text-7xl text-blue-700"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(4)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <GiGears className="text-7xl text-gray-400"/>
          </motion.div>
          <motion.div 
                  variants={iconVariants(2.5)}
                  initial="initial"
                  animate="animate"
                  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaDraftingCompass className="text-7xl text-rose-400"/>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Technologies