import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-white mb-8 sm:mb-0">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pretium orci.</p>
          </div>
          <div className="text-white mb-8 sm:mb-0">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="#">Service 1</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="#">Service 2</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="#">Service 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
