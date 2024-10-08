import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <span className='text-lg text-[#5cb95d] font-bold'>Conduit</span>
      <ul className="flex gap-4 items-center">
        <li><a className='font-semibold cursor-pointer' href="/">Home</a></li>
        <li><a className='font-semibold cursor-pointer' href="/about">Signin</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;