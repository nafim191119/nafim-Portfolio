import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Footer from './Footer';


const Contact = () => {
  return (
    <div>
      <section id='contact' className='section py-16 mt-60'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <motion.div
                variants={fadeIn('right', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
              >
                <h4 className='text-6xl uppercase text-accent font-bold mb-2 tracking-wide'>Get in touch</h4>
                <h2 className='text-[45px] uppercase lg:text-[90px] leading-none mb-12 font-bold'>Let's work <br></br> together !</h2>
                <div>
                  <div className='bg-white/30 mx-8 rounded-lg text-black px-10 py-8 font-bold'>
                    <h1>My Contact Details.</h1>
                    <h2>Email: nafim191119@gmail.com</h2>
                    <h2>Phone No: +8801844662344</h2>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.form
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex-1 border rounded-lg flex flex-col p-10'>
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all text-xl font-semibold'
                placeholder='Your email'
                type='text'>
              </input>
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all text-xl font-semibold'
                placeholder='Your name'
                type='text'>
              </input>
              <textarea
                className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all text-xl font-semibold resize-none mb-12'
                placeholder='Your message'
                type='text'>
              </textarea>
              <button className='btn btn-lg'>Send message</button>
            </motion.form>
          </div>
        </div>
      </section>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
