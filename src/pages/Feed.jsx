import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";

function Feed() {

  
  const [feeds, setFeeds] = useState([])
  const [likes, setLikes] = useState(62);
  const [showComment, setShowComment] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const { feedId } = useParams(); 
  const [isLoading, setIsLoading] = useState(false);



  //Fetching vans from backend
  useEffect(() => {
    setIsLoading(true); 
    fetch("http://localhost:8080/feeds/")
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching feeds:", error);
        setIsLoading(false);
      });
  }, []);


  const handleLikeClick = () => {
    if(!isLiked){
      setLikes(likes + 1)
      setLiked(true)
    }
    
  };

  const handleCommentClick = () => {
    setShowComment(!showComment);
  };
  console.log(feeds);
  
  const FeedsElement = feeds.map(feed => {
    const isoString = feed.datetime 
    const formattedDate = new Date(isoString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    return(
      <div key={feed._id} className='flex flex-col gap-2 mb-8'>
      <div className=''>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <img width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png" alt="circled-user-male-skin-type-6--v1" />
            <div>
              <p>{feed.username}</p>
              <p>{formattedDate}</p>
            </div>
          </div>
          <span onClick={handleLikeClick} className='flex items-center gap-1 cursor-pointer'>
            <img width="18" height="18" src="https://img.icons8.com/color/48/like--v1.png" alt="like--v1" />
            <span>{feed.likes}</span>
          </span>
        </div>
        <div className='py-2'>
          <h3 className='font-semibold text-lg'>{feed.header}</h3>
          <p>{feed.message}</p>
        </div>
        <div className='flex justify-between items-center'>
          <Link to={`/feeds/${feed._id}`}>Read more</Link>  {/* Pass feed ID to postdetail */}
          <div onClick={handleCommentClick} className='flex items-center gap-2 cursor-pointer'>
            {!showComment && <div className='flex gap-2'><img width="24" height="24" src="https://img.icons8.com/ios/50/comments--v1.png" alt="comments--v1" />Reply</div>}
          </div>
        </div>
        {showComment && (
          <div className='flex gap-2'>
            <input
              type="text"
              maxLength="100"
              className='mt-4 appearance-none focus:outline-none w-full h-20 sm:flex-grow border rounded p-1 border-gray-300'
              placeholder="Enter your reply"
            />
            <button onClick={handleCommentClick} className='bg-[#5cb95d] rounded-md px-4 py-0 mt-4 text-white'>Reply</button>
          </div>
        )}
      </div>
      <hr />
    </div>
    )
  })

  return (
    <div className='flex flex-col gap-2 mb-8'>
      {isLoading? <BarLoader /> : FeedsElement}
      <hr />
    </div>
  );
}

export default Feed;