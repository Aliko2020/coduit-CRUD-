import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <Link to='/' className='text-lg text-Primary font-bold'>Conduit</Link>
      <ul className="flex gap-4 items-center">
        <Link to='/' className='font-semibold cursor-pointer'> Home</Link>
        <Link to='/signin' className='font-semibold cursor-pointer'>Sign in</Link>
      </ul>
    </nav>
  );
}

export default Navbar;