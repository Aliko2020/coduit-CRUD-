import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Feed() {

  
  const [feeds, setFeeds] = useState([])
  const [likes, setLikes] = useState(62);
  const [showComment, setShowComment] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const { feedId } = useParams(); 


  //Fetching vans from backend
  useEffect(()=>{
    fetch('"http://localhost:8080/feeds/"')
    .then(res => res.json())
    .then(data =>  setFeeds(data))
  },[])
console.log(feeds);

  const handleLikeClick = () => {
    if(!isLiked){
      setLikes(likes + 1)
      setLiked(true)
    }
    
  };

  const handleCommentClick = () => {
    setShowComment(!showComment);
  };

  return (
    <div className='flex flex-col gap-2 mb-8'>
      <div className=''>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <img width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png" alt="circled-user-male-skin-type-6--v1" />
            <div>
              <p>Aliko Amos</p>
              <p>Augest 21,2024</p>
            </div>
          </div>
          <span onClick={handleLikeClick} className='flex items-center gap-1 cursor-pointer'>
            <img width="18" height="18" src="https://img.icons8.com/color/48/like--v1.png" alt="like--v1" />
            <span>{likes}</span>
          </span>
        </div>
        <div className='py-2'>
          <h3 className='font-semibold text-lg'>Lorem, ipsum dolor sit amet consectetur.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dicta hic voluptas debitis excepturi necessitatibus aut ipsum placeat fuga facere earum illum nobis soluta sapiente mollitia, odio veritatis pariatur laborum.</p>
        </div>
        <div className='flex justify-between items-center'>
          <Link to={`/feed/${feedId}`}>Read more</Link>  {/* Pass feed ID to postdetail */}
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
  );
}

export default Feed;