import React from 'react'
import { CONTACT } from '../constants'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'


const Contact=()=> {
  return (
    <section id='contact'>
        <div className='border-b border-neutral-900 pb-200'>
         <motion.h1            
         whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:0.5}}
           className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
         <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='text-center tracking-tighter'>
            {/* <p className="my-4">Feel free to reach out to me via email</p> */}
              <div className="flex gap-4 text-center justify-center my-10">

                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-sky-500">
                   <FaLinkedin size={40} />
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex justify-center items-center">
                   <FcGoogle size={40} />
                 </a>
                  <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center ">
                     <FaGithub size={40} />
                  </a>
            </div>  
        </motion.div>
        </div>
    </section>
  )
}

export default Contact;