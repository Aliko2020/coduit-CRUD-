import React, { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

const initialState = {
  feeds: [],
  likes: 62,
  showComment: false,
  isLiked: false,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FEEDS":
      return { ...state, feeds: action.payload };
    case "UPDATE_LIKES":
      return {
        ...state,
        likes: state.likes + (action.payload ? 1 : -1),
        isLiked: action.payload,
      };
    case "TOGGLE_COMMENT":
      return { ...state, showComment: !state.showComment };
    case "SET_LOADING":
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};

function Feed() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true }); // Set loading state

    fetch("http://localhost:8080/feeds")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_FEEDS", payload: data }))
      .catch((error) => {
        console.error("Error fetching feeds:", error);
        dispatch({ type: "SET_LOADING", payload: false }); // Reset loading state on error
      });
  }, []);

  const handleLikeClick = () => {
    dispatch({ type: "UPDATE_LIKES", payload: !state.isLiked });
  };

  const handleCommentClick = () => {
    dispatch({ type: "TOGGLE_COMMENT" });
  };
console.log(state.feeds);

  const FeedsElement = state.feeds.map((feed) => {
    const isoString = feed.date;
    const formattedDate = new Date(isoString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return (
      <div key={feed._id} className="flex flex-col gap-2 mb-8">
        <div className="">
          <div className="">
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
            <div className="flex justify-between items-center">
              <Link className="font-semibold" to={`/feeds/${feed._id}`}>
                Read more
              </Link>{" "}
              {/* Pass feed ID to postdetail */}
              <div
                onClick={handleCommentClick}
                className="flex items-center gap-2 cursor-pointer"
              >
                {!state.showComment && (
                  <div className="flex gap-2">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ios/50/comments--v1.png"
                      alt="comments--v1"
                    />
                    Reply
                  </div>
                )}
              </div>
            </div>
            {state.showComment && (
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength="100"
                  className="mt-4 appearance-none focus:outline-none w-full h-10 sm:flex-grow border rounded p-1 border-gray-300"
                  placeholder="Enter your reply"
                />
                <button
                  onClick={handleCommentClick}
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
