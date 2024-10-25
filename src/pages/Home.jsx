import React from "react";
import Feed from "./Feeds/Feed";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col p-4 sm:px-32">
      <div>
        <h1 className="font-semibold">Popular topics</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi
            possimus exercitationem? Inventore animi iste voluptatum quisquam.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <h3 className="text-[#5cb95d]">Global Feeds</h3>
          <div className="flex items-center">
            <div className="w-24 h-1 bg-[#5cb95d]"></div>
            <hr />
          </div>
        </div>
        <div className="py-8">
          <Feed />
        </div>
      </div>
      <Link to='/createPost'>
        <div className="bg-[#5cb95d] text-white py-1 px-2 rounded-md flex gap-1 justify-end items-center fixed bottom-10 right-5 ">

          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/plus--v1.png"
            alt="plus--v1"
          />
          Create
        </div>
      </Link>
    </div>
  );
};

export default Home;
