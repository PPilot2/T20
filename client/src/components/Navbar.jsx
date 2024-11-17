// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 flex items-center justify-between">
      <div className="text-white font-semibold text-xl ml-4"><a href='/dashboard'>Top 20</a></div>
      <ul className="flex space-x-6 text-white">
        <li><a href="/plan" className='hover:text-secondary'>Plan</a></li>
        <li><a href="/counselor" className='hover:text-secondary'>Counselor</a></li>
        <li><a href="/prep" className='hover:text-secondary'>Prep</a></li>
        <li><a href="/essay" className='hover:text-secondary'>Essay</a></li>
        <li><a href="/forums" className='hover:text-secondary'>Forums</a></li>
      </ul>
      <div className="relative">
        <a href='/profile'>
          <img 
            src="/default-user-icon.png" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover" 
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
