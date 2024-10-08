import React from 'react'
import Feed from '../pages/Feed'


const Home = () => {
  return (
    <div className='flex flex-col p-4 sm:px-32'>
        <div>
            <h1>Popular topics</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi possimus exercitationem? Inventore animi iste voluptatum quisquam, id nostrum quo ipsam! Asperiores optio, repellat quod repellendus suscipit iure voluptatum omnis?</p>
            </div>
        
        </div>
        <div className='mt-4'>
            <div>
                <h3 className='text-[#5cb95d]'>Global Feeds</h3>
                <div className='flex items-center'>
                    <div className='w-24 h-1 bg-[#5cb95d]'> 
                    </div>
                    <hr />
                </div>
            </div>
            <div className='py-8'>
                <Feed />
            </div>
        </div>
    </div>
  )
}

export default Home