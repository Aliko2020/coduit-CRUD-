import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoReorderFour } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { GrLineChart } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { GoGift } from "react-icons/go";
import { FaBook } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div
            className="w-[100px] sidebar hidden sm:flex items-center justify-center duration-1000
        p-4  overflow-y-auto text-center bg-[#352E2E] shadow h-screen"
        >
            <div className="text-gray-100">
                <div className="flex flex-col gap-2 items-center">
                    <div className="p-2 mt-2 flex  rounded-lg duration-300 cursor-pointer  bg-[#B5A7A7]">
                        <IoHome />
                    </div>
                    <div className="p-2 mt-2 flex rounded-md duration-300 cursor-pointer  bg-[#B5A7A7]">
                        <IoReorderFour />
                    </div>

                    <div className="p-2 mt-2 flex rounded-md duration-300 cursor-pointer  bg-[#B5A7A7]">
                        <FiShoppingBag />
                    </div>
                    <div className="p-2 mt-2 flex rounded-md duration-300 cursor-pointer  bg-[#B5A7A7]">
                        <FiUser />
                    </div>
                    <div className="p-2 mt-2 flex rounded-md duration-300 cursor-pointer  bg-[#B5A7A7]">
                        <GrLineChart />
                    </div>
                    <div className="p-2 mt-2 flex rounded-md duration-300 cursor-pointer  bg-[#B5A7A7]">
                        <GoSearch />
                    </div>
                    <div className="p-2 mt-2 flex rounded-md duration-300 cursor-pointer  bg-[#B5A7A7]">
                        <FaBook />
                    </div>
                    <div className="p-2 mt-2 flex rounded-md duration-300 cursor-pointer  bg-[#B5A7A7]">
                        <GoGift />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar