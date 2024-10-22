import React from 'react'
import Sidebar from './Sidebar'
import { PiNumberSquareOneLight } from "react-icons/pi";
import { PiNumberSquareTwoLight } from "react-icons/pi";
import { PiNumberSquareThreeLight } from "react-icons/pi";
import { PiNumberSquareFourLight } from "react-icons/pi";



const NewCampaign = () => {
    return (
        <div className='flex gap-4 bg-gray-100'>
            <Sidebar />
            <main className='flex flex-col gap-4 p-4 py-4'>
                <h3 className='text-lg text-midnight px-4'>Create New Campaign</h3>
                {/* first half */}
                <div className='flex flex-col gap-4 p-4 rounded-md'>
                    <div className='flex text-midnight gap-2'>
                        <PiNumberSquareOneLight size={27} className="text-midnight" />
                        Campaign info
                    </div>


                    <div className='flex flex-col cs:flex-row gap-2 '>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="campaignname">Campaign name</label>
                            <input className='p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300' type="text" id='campaignname' placeholder='ex. Birthday Offer' />
                        </div>

                        <div className='flex gap-2 w-full'>
                            <div className='flex flex-col gap-1 w-full'>
                                <label htmlFor="brands">Brands/Outlets</label>
                                <input className="p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300" type="text" id='brands' placeholder='Hard Rock cafe, Koregaon park' />
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <label htmlFor="channels">Channels</label>
                                <input className="p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300" type="text" id='channels' placeholder='Email/SMS' />
                            </div>
                        </div>
                    </div>


                    <div className='flex text-midnight gap-2 mt-2 '>
                        <PiNumberSquareTwoLight size={27} className="text-midnight" />
                        Audience
                    </div>

                    <div className='flex flex-col cs:flex-row gap-2 '>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="check">Check</label>
                                <input className="p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300 md:w-64" type="text" id='timerage' placeholder='Hard Rock cafe, Koregaon park' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="timerage">Time rage</label>
                                <input className="p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300 md:w-64" type="text" id='check' placeholder='Today' />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="brands">Brands/Outlets</label>
                                <input className="p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300 md:w-64" type="text" id='brands' placeholder='Hard Rock cafe, Koregaon park' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="channels">Channels</label>
                                <input className="p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300 md:w-64" type="text" id='channels' placeholder='Email/SMS' />
                            </div>
                        </div>
                    </div>

                    <div className='flex text-midnight gap-2 mt-2 '>
                        <PiNumberSquareThreeLight size={27} className="text-midnight" />
                        Time Manage
                    </div>

                    <div className='flex flex-col cs:flex-row gap-2 '>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="check">Check</label>
                                <input className="p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300 md:w-64" type="text" id='timerage' placeholder='Hard Rock cafe, Koregaon park' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="timerage">Time rage</label>
                                <input className="p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300 md:w-64" type="text" id='check' placeholder='Today' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="campaignname">Campaign name</label>
                            <input className='p-2 appearance-none focus:outline-none w-full h-8 border rounded-sm border-gray-300' type="text" id='campaignname' placeholder='ex. Birthday Offer' />
                        </div>
                    </div>




                </div>

                {/* second half  */}
                <div className='flex flex-col gap-4 p-4 rounded-md'>
                <div className='flex text-midnight gap-2 mt-6'>
                        <PiNumberSquareFourLight size={27} className="text-midnight" />
                        Create rules
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NewCampaign