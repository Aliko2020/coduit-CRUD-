import React, { useEffect, useReducer, useState, useRef } from "react";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import { FcComments } from "react-icons/fc";

const initialState = {
  feeds: [],
  likes: 62,
  isLiked: false,
  isLoading: false,
  showReplyInput: null, // New state for showing reply input
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FEEDS":
      return { ...state, feeds: action.payload, isLoading: false };
    case "UPDATE_LIKES":
      return {
        ...state,
        likes: state.likes + (action.payload ? 1 : -1),
        isLiked: action.payload,
      };
    case "TOGGLE_COMMENT":
      return {
        ...state,
        feeds: state.feeds.map((feed) =>
          feed._id === action.payload
            ? { ...feed, showComment: !feed.showComment }
            : feed
        ),
      };
    case "SHOW_REPLY_INPUT":
      return { ...state, showReplyInput: action.payload }; // Show reply input for specific feed
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

function Feed() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [reply, setReply] = useState({ feedId: "", comment: "", author: "" });
  const inputRef = useRef(null);

  useEffect(() => {
    fetchFeeds();

    // Add event listener for clicks outside of the input field
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        dispatch({ type: "SHOW_REPLY_INPUT", payload: null });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchFeeds = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    fetch("https://coduit-backend.onrender.com/feeds")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        dispatch({
          type: "SET_FEEDS",
          payload: data.map((feed) => ({ ...feed, showComment: true })), // Replies visible
        });
      })
      .catch((error) => {
        console.error("Error fetching feeds:", error);
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

  const handleLikeClick = () => {
    dispatch({ type: "UPDATE_LIKES", payload: !state.isLiked });
  };

  const handleCommentClick = (id) => {
    dispatch({ type: "SHOW_REPLY_INPUT", payload: id });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReply((prevReply) => ({ ...prevReply, [name]: value }));
  };

  const handleReplySubmit = (id) => {
    if (reply.comment.trim() === "" || reply.author.trim() === "") {
      return; // Prevent empty replies
    }

    fetch(`https://coduit-backend.onrender.com/feeds/${id}/reply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: reply.author, comment: reply.comment }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Reply submitted:", data);
        setReply({ feedId: "", comment: "", author: "" });
        fetchFeeds(); // Re-fetch feeds after reply submission
      })
      .catch((error) => console.error("Error submitting reply:", error));
  };

  const FeedsElement = state.feeds.map((feed) => {
    const isoString = feed.date;
    const formattedDate = new Date(isoString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return (
      <div key={feed._id} className="flex flex-col gap-2 mb-8">
        <div>
          <div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png"
                  alt="circled-user-male-skin-type-6--v1"
                />
                <div>
                  <p>{feed.author}</p>
                  <p>{formattedDate}</p>
                </div>
              </div>
              <span
                onClick={handleLikeClick}
                className="flex items-center gap-1 cursor-pointer"
              >
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/color/48/like--v1.png"
                  alt="like--v1"
                />
                <span>{feed.votes}</span>
              </span>
            </div>
            <div className="py-2">
              <h3 className="font-semibold text-lg">{feed.title}</h3>
              <p>{feed.body}</p>
            </div>
            <div className="flex justify-between items-center text-[#5cb95d] font-semibold mt-2">
              <Link className="font-semibold" to={`/feeds/${feed._id}`}>
                Read more
              </Link>
              <div
                onClick={() => handleCommentClick(feed._id)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="flex gap-2 items-center ">
                  <FcComments size={30} />
                  Reply
                </div>
              </div>
            </div>
            {feed.replies &&
              feed.replies.map((reply, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded-md mt-2">
                  <p className="text-sm">
                    <span className="font-semibold">{reply.author}</span>: {reply.comment}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(reply.date).toLocaleDateString("en-US")}
                  </p>
                </div>
              ))}
            {state.showReplyInput === feed._id && ( // Show reply input only when reply is clicked
              <div className="flex flex-col gap-2" ref={inputRef}>
                <input
                  type="text"
                  name="author"
                  value={reply.author}
                  onChange={handleInputChange}
                  maxLength="100"
                  className="mt-4 appearance-none focus:outline-none w-full h-10 sm:flex-grow border rounded p-1 border-gray-300"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  name="comment"
                  value={reply.comment}
                  onChange={handleInputChange}
                  maxLength="100"
                  className="appearance-none focus:outline-none w-full h-10 sm:flex-grow border rounded p-1 border-gray-300"
                  placeholder="Enter your reply"
                />
                <button
                  onClick={() => handleReplySubmit(feed._id)}
                  className="bg-[#5cb95d] rounded-md px-4 py-0 mt-4 text-white"
                >
                  Reply
                </button>
              </div>
            )}
          </div>
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-2 mb-8">
      {state.isLoading ? <BarLoader /> : FeedsElement}
      <hr />
    </div>
  );
}

export default Feed;
