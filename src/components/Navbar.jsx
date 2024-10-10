import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <span className='text-lg text-[#5cb95d] font-bold'>Conduit</span>
      <ul className="flex gap-4 items-center">
        <Link to='/' className='font-semibold cursor-pointer'> Home</Link>
        <Link to='/signin' className='font-semibold cursor-pointer'>Sign in</Link>
      </ul>
    </nav>
  );
}

export default Navbar;