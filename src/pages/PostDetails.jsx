import React from "react";

const PostDetails = () => {
  return (
    <div className="flex flex-col gap-4 p-4 sm:px-32 ">
      <div className="flex flex-col gap-4">
        
        <div className="flex gap-4">
          <div className="flex">
            <div className="flex items-center gap-2">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png"
                alt="circled-user-male-skin-type-6--v1"
              />
              <div>
                <p>Aliko Amos</p>
                <p>Augest 21,2024</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end">
              <span className="flex gap-2">
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/color/48/like--v1.png"
                  alt="like--v1"
                />
                favourite
              </span>
            </div>
          </div>
        </div>
        <h1 className="font-semibold text-lg">
          Lorem ipsum dolor sit amet consectetur,
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste velit reprehenderit molestias. Cupiditate maiores consectetur magnam, totam tempora, itaque placeat, excepturi libero ullam id voluptatem fugiat sapiente dolorem ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione aliquid, hic omnis molestiae, eligendi iusto obcaecati ullam repellendus eius accusantium amet quae facilis distinctio! Qui esse obcaecati quos error!</p>
      </div>
    </div>
  );
};

export default PostDetails;
