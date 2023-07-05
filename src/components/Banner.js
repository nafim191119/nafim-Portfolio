import React from 'react';
import image from '../assets/nafim.png'
import { FaGithub, FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import resume from '../assets/resumeOfNafim.pdf'

const Banner = () => {
  return <div id='home' className='min-h-[85vh] lg-min-h-[78vh] flex items-center mt-28 mb-32 px-16'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[50px] font-bold leading-[0.8] lg:text-[60px]'>Hi I'm <br></br> <span className='font-bold'>Md. Ahasanul Islam Nafim</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[30px] lg:text-[60px] font-secondary font-bold uppercase leading-[1]'>
            <span className='mr-4 text-[30px] text-white'>I am a</span> <TypeAnimation sequence={['FRONT-END DEVELOPER.', 2000, 'MERN STACK DEVELOPER.', 2000, 'WEB DEVELOPER.', 2000,
            ]}
              speed={50}
              className='text-accent text-[50px]'
              wrapper='span'
              repeat={Infinity}
            >
            </TypeAnimation>
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem kjhsbl fgfjs dlfjg df lskjd flk jhgld sfjhf lmcvz xlcnl sjgsd jn;sjn fsdf fkjs df
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href={resume} className='btn btn-lg py-2' download='resume'><FaFileDownload></FaFileDownload>Resume</a >
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.youtube.com/channel/UCL_6nBFdiswpB8Ncc9ma4RQ'> <FaYoutube></FaYoutube> </a>
            <a href='https://www.facebook.com/afim.nafim'> <FaFacebook></FaFacebook> </a>
            <a href='https://github.com/nafim191119'> <FaGithub></FaGithub> </a>
            <a href='https://www.linkedin.com/in/nafim-islam-b30901281/'> <FaLinkedin></FaLinkedin> </a>
            <a href='https://www.instagram.com/nafim0805/'> <FaInstagram></FaInstagram> </a>
          </motion.div>
          <p className='font-bold'>Gmail: nafim191119@gmail.com</p>
        </div>
        {/* social */}

        <motion.div
          variants={fadeIn('down', 0.5)}
          initial="hidden"
          whileInView={'show'}
          className='lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={image}></img>
        </motion.div>
      </div>
    </div>
  </div >;
};

export default Banner;
