import React, { useState } from "react"; // Only import necessary hooks
import { Link } from "react-router-dom";

const CreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postStatus, setPostStatus] = useState(false)
  const [feed, setFeed] = useState({
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeed({ ...feed, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/feeds/addfeed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feed),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPostStatus(true)
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
    setFeed({
      title: "",
      body: "",
    });
    setIsLoading(false)
  };

  return (
    <div>
    {postStatus ? <div className="flex flex-col justify-center items-center mt-60"><h1 className="text-2xl">Post created</h1> <Link className="py-1 px-3 text-white mt-4 bg-[#5cb95d]" to='/'>Back Home</Link></div> : <div className="flex flex-col gap-2 p-8 max-w-xl m-auto">
      <h1 className="text-2xl">Create Post</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div>
            <h3>Text</h3>
            <div className="flex items-center">
              <div className="w-8 h-1 bg-[#5cb95d]"></div>
            </div>
          </div>
          <div>
            <h3>Image/Video</h3>
            <div className="flex items-center">
              <div className="hidden w-24 h-1 bg-[#5cb95d]"></div>
            </div>
          </div>
        </div>
        <div className="">
          <input
            name="title"
            value={feed.title}
            onChange={handleChange}
            type="text"
            placeholder="Title"
            className="mt-4 appearance-none focus:outline-none w-full h-12 sm:flex-grow border rounded-xl p-1 border-gray-300"
            maxLength="100"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            name="body"
            value={feed.body}
            onChange={handleChange}
            placeholder="Body"
            className="appearance-none focus:outline-none w-full h-24 sm:flex-grow border rounded-xl p-1 border-gray-300"
          ></textarea>
        </div>
        <div className="flex gap-2 justify-end items-end">
          <button className="px-2 py-1 text-gray-400 bg-gray-200 rounded-md cursor-pointer hover:bg-slate-400 hover:text-gray-100">
            Save Draft
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-2 py-1 text-gray-400 bg-gray-200 rounded-md cursor-pointer hover:bg-slate-400 hover:text-gray-100"
          >
            {isLoading ? "Submitting..." : "Post"}
          </button>
        </div>
      </form>
    </div>}
    </div>
  );
};

export default CreatePost;
