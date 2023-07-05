import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const services = [
  {
    name: 'HTML',
    image: 'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
  },
  {
    name: 'CSS',
    image: 'https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo',
  },
  {
    name: 'Tailwind',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png',
  },
  {
    name: 'Javascript',
    image: 'https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png',
  },
  {
    name: 'React',
    image: 'https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp',
  },
  {
    name: 'Firebase',
    image: 'https://yt3.googleusercontent.com/GsP5Yvc5jOSop4SJf_75wdOYaEbO-7ZyYhnARodAGRnEMh-OQjGPGzUz2ZtzsHPtqFyHGvmbEtI=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    name: 'Mongodb',
    image: 'https://www.nurulfikri.com/wp-content/uploads/2020/02/MongoDB-mdb.png',
  },
  {
    name: 'Node',
    image: 'https://hopetutors.com/wp-content/uploads/2017/03/nodejs-logo-1.png',
  },
  {
    name: 'Next',
    image: 'https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp',
  }
]

const Services = () => {
  return (
    <section id='services' className='section mt-[500px] lg:mt-40 mb-80'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Skills</h2>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* service */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1'>
            <div className='grid lg:grid-cols-4 mx-auto grid-cols-3 gap-y-4 gap-x-4'>
              {services.map((service) => {
                return (
                  <div>
                    <div>
                      <img className='w-40 h-44 rounded-lg' src={service.image}></img>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
