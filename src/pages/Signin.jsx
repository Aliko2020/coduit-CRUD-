import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <form className='flex flex-col gap-4 justify-center items-center py-20'>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-gray-400 font-semibold'>Sign in</h1>
        <Link to='/signup' className='text-[#5cb95d] cursor-pointer'>Need an account?</Link>
        </div>
        <div className='flex flex-col gap-4'>
          <input className="appearance-none focus:outline-none w-60 h-10 border px-2 rounded border-gray-300" type="text" placeholder='Email'/>
          <input className="appearance-none focus:outline-none w-60 h-10 border px-2 rounded border-gray-300" type="text" placeholder='Password'/>
        </div>
        <button className='px-4 py-3 rounded-sm bg-[#5cb95d] text-white font-semibold' type="button">Sign in</button>
    </form>
  )
}

export default Signin