import React from "react";
import Feed from "./Feed";

const Home = () => {
  return (
    <div className="flex flex-col p-4 sm:px-32">
      <div>
        <h1>Popular topics</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi
            possimus exercitationem? Inventore animi iste voluptatum quisquam,
            id nostrum quo ipsam! Asperiores optio, repellat quod repellendus
            suscipit iure voluptatum omnis?
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
          <Feed />
          <Feed />
          <Feed />
        </div>
      </div>
      {/* <div className="fixed bottom-10 right-5 flex justify-end">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/plus--v1.png"
          alt="plus--v1"
        />
      </div> */}
    </div>
  );
};

export default Home;
