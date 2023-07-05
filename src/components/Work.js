import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div>
          <div>
            <div>
              <div>
                <motion.div
                  variants={fadeIn('down', 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}>
                  <h2 className='leading-tight text-accent font-bold text-4xl h2'>My latest work/Projects</h2>
                  <p>lorem dvvnos sjdan oasncnos asncoisd sancco asdei oawefin oidasvo ncvkom asjjn lorem dvvnos sjdan oasncnos asncoisd sancco asdei oawefin oidasvo ncvkom asjjn lorem dvvnos sjdan oasncnos asncoisd sancco asdei oawefin oidasvo ncvkom asjjn
                  </p>
                  <button id='project' className='btn btn-sm mt-8 mb-8'>View all projects</button>
                </motion.div>
              </div>
              <div className='grid lg:grid-cols-2 justify-center gap-x-4 gap-y-20' id='project'>
                <motion.div
                  variants={fadeIn('right', 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-[500px]'>
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                  </div>
                  <img className='group-hover:scale-125 transition-all' src={img1}></img>
                  <div className='absolute -bottom-full left-12 lg:group-hover:bottom-32 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient '>project 1</span>
                  </div>
                  <div className='absolute -bottom-full left-12 lg:group-hover:bottom-16 group-hover:bottom-8 transition-all duration-300 z-50'>
                    <span className='text-3xl text-white'>Chef Corner</span>
                    <p></p>
                    <div>
                      <a className='btn btn-sm p-2' href='https://chef-corner-site.web.app/'>Live link</a>
                      <a className='mx-4 btn btn-sm p-2' href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-nafim191119'>Github link</a>
                      <a className='btn btn-sm p-2' href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-nafim191119'>Server link</a>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn('left', 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-[500px]'>
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                  </div>
                  <img className='group-hover:scale-125 transition-all' src={img1}></img>
                  <div className='absolute -bottom-full left-12 lg:group-hover:bottom-32 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient '>project 2</span>
                  </div>
                  <div className='absolute -bottom-full left-12 lg:group-hover:bottom-16 group-hover:bottom-8 transition-all duration-300 z-50'>
                    <span className='text-3xl text-white'>Sports Mastary</span>
                    <p></p>
                    <div>
                      <a className='btn btn-sm p-2' href='https://summer-school-project-735bc.web.app/'>Live link</a>
                      <a className='mx-4 btn btn-sm p-2' href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-nafim191119'>Github link</a>
                      <a className='btn btn-sm p-2' href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-nafim191119/tree/master'>Server link</a>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn('right', 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-[500px]'>
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                  </div>
                  <img className='group-hover:scale-125 transition-all' src={img1}></img>
                  <div className='absolute -bottom-full left-12 lg:group-hover:bottom-32 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient '>project 3</span>
                  </div>
                  <div className='absolute -bottom-full left-12 lg:group-hover:bottom-16 group-hover:bottom-8 transition-all duration-300 z-50'>
                    <span className='text-3xl text-white'>Build your career</span>
                    <p></p>
                    <div>
                      <a className='btn btn-sm p-2' href='https://gregarious-eclair-d0a98f.netlify.app/'>Live link</a>
                      <a className='mx-4 btn btn-sm p-2' href='https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-nafim191119'>Github link</a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
