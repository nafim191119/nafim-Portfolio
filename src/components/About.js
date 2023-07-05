import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,

  })
  return <section id='about' className='section px-20'>
    <div className='container mx-auto'>
      <div className='lg:flex lg:flex-cols-2 gap-y-10 lg:gap-x-16 lg:gap-y-0 h-screen lg:items-center lg:flex-row'>
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          <h2 className='h2 text-accent font-bold'>About me</h2>
          <h3 className='h3 mb-4'>I'm a Web Developer</h3>
          <p className='mb-6'>
            lorem ifsldksjah ljksavljsd lasdkjhflasdjk lkjasblckjc asdkhasl ashalas halfabdlfk ljaflsjkdas ajsflakjsasl
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12 justify-evenly items-center mt-20'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                <CountUp start={0} end={12} duration={5}></CountUp>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                projects<br></br>completed.
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                <CountUp start={0} end={9} duration={4}></CountUp>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                skill <br></br> have learn.
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                <CountUp start={0} end={329} duration={5}></CountUp>+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                user<br></br>visited.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </section>;
};

export default About;
