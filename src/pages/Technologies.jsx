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
import { useState } from "react";


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



const tabData = {
  Frontend: [
    { icon: <RiReactjsLine className="text-7xl text-cyan-500" />, duration: 2.5 },
    { icon: <SiTailwindcss className="text-7xl text-sky-400" />, duration: 4 },
    { icon: <IoLogoJavascript className="text-7xl text-yellow-400" />, duration: 7 },
    { icon: <SiBootstrap className="text-7xl text-purple-600" />, duration: 9 },
    { icon: <FaCss3Alt className="text-7xl text-blue-600" />, duration: 2.5 },
  ],
  "Tech Tools": [
    { icon: <SiFirebase className="text-7xl text-yellow-600" />, duration: 2.5 },
    { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, duration: 5 },
    { icon: <FaGithub className="text-7xl text-white" />, duration: 7 },
    { icon: <SiVercel className="text-7xl text-white" />, duration: 4 },
    { icon: <SiGooglesearchconsole className="text-7xl text-green-500" />, duration: 9 },
  ],
  "Other Skills": [
    { icon: <SiCplusplus className="text-7xl text-blue-500" />, duration:2.5 },
    { icon: <FaPython className="text-7xl text-yellow-400" />, duration: 4 },
    { icon: <FaRegFileWord className="text-7xl text-blue-700" />, duration: 7 },
    { icon: <GiGears className="text-7xl text-gray-400" />, duration: 4 },
    { icon: <FaDraftingCompass className="text-7xl text-rose-400" />, duration: 2.5 },
  ],
};



const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  return (
    <section id='technogies'>
      <div className='border-b border-neutral-800 pb-24  pt-[25px]'>
        <motion.h2
                   whileInView={{opacity:1,y:0}}
                   initial={{opacity:0,y:-100}}
                   transition={{duration:0.5}}
                    className='my-20 text-center text-4xl'>
        Technologies
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`md:px-6 py-2 rounded-lg border px-1 md:text-xl text-sm ${
                activeTab === tab
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-400 text-black border-cyan-600"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Icons */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {tabData[activeTab].map((item, index) => (
            <motion.div
              key={index}
              variants={iconVariants(item.duration)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies