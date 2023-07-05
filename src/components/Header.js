import React from 'react';
import logo from '../assets/logo.svg'

const Header = () => {
  return <header className='p-10'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center px-8'>
        <a href='#'>
          <img src={logo}></img>
        </a>
        <a href='#'>
          <button className='btn btn-sm'>Work with me</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;
