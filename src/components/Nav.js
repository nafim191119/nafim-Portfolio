import React from 'react';
import { BiHomeAlt, BiUser, BiSolidContact } from 'react-icons/bi';
import { BsClipboard2Data, BsBriefcase } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link activeClass='active' smooth={true} spy={true} to='home' className='cursor-pointer w-[60px]' offset={-200}><BiHomeAlt></BiHomeAlt></Link>
        <Link activeClass='active' smooth={true} spy={true} to='about' className='cursor-pointer w-[60px]'><BiUser></BiUser></Link>
        <Link activeClass='active' smooth={true} spy={true} to='services' className='cursor-pointer w-[60px]'><BsClipboard2Data></BsClipboard2Data></Link>
        <Link activeClass='active' smooth={true} spy={true} to='work' className='cursor-pointer w-[60px]'><BsBriefcase></BsBriefcase></Link>
        <Link activeClass='active' smooth={true} spy={true} to='contact' className='cursor-pointer w-[60px]'><BiSolidContact></BiSolidContact></Link>
      </div>
    </div>
  </nav>
};

export default Nav;
