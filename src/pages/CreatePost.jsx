import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup'

const initialState = {
  isLoading: false,
  postStatus: false,
  feed: {
    title: "",
    body: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_POST_STATUS':
      return { ...state, postStatus: action.payload };
    case 'UPDATE_FEED':
      return { ...state, feed: { ...state.feed, [action.name]: action.value } };
    default:
      return state;
  }
};

const CreatePost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validationSchema = yup.object({
    title: yup.string().required('Title is required').min(3,'Title too short!').max(100, 'Title must be less than 100 characters'),
    body: yup.string().required('Body is required').min(10, 'Body must be at least 10 characters'),
  });

  const formik = useFormik({
    initialValues: state.feed,
    validationSchema,
    onSubmit: async (values) => {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        const response = await fetch("http://localhost:8080/feeds/addfeed", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values), // Use values directly from Formik
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        dispatch({ type: 'SET_POST_STATUS', payload: true });
        console.log("Success:", data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        dispatch({ type: 'UPDATE_FEED', name: 'title', value: '' });
        dispatch({ type: 'UPDATE_FEED', name: 'body', value: '' });
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
  });

  return (
    <div>
      {state.postStatus ? (
        <div className="flex flex-col justify-center items-center mt-60">
          <h1 className="text-2xl">Post created</h1>
          <Link className="py-1 px-3 text-white mt-4 bg-[#5cb95d]" to="/">
            Back Home
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-2 p-8 max-w-xl m-auto">
          <h1 className="text-2xl">Create Post</h1>
          <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}> {/* Use formik.handleSubmit */}
            <div className="">
              <input
                name="title"
                value={formik.values.title} 
                onChange={formik.handleChange}
                type="text"
                placeholder="Title"
                className="mt-4 appearance-none focus:outline-none w-full h-12 sm:flex-grow border rounded-xl p-1 border-gray-300"
                maxLength="100"
              />
              {formik.touched.title && formik.errors.title && ( // Display error conditionally
                <p className="text-red-500">{formik.errors.title}</p>
              )}
            </div>
            <div className="flex flex-col">
              <textarea
                name="body"
                value={formik.values.body}
                onChange={formik.handleChange}
                placeholder="Body"
                className="appearance-none focus:outline-none w-full h-24 sm:flex-grow border rounded-xl p-1 border-gray-300"
              ></textarea>
              {formik.touched.body && formik.errors.body && ( // Display error conditionally
                <p className="text-red-500">{formik.errors.body}</p>
              )}
            </div>
            <div className="flex gap-2 justify-end items-end">
          <button className="px-2 py-1 text-gray-400 bg-gray-200 rounded-md cursor-pointer hover:bg-slate-400 hover:text-gray-100">
            Save Draft
          </button>
          <button
            type="submit"
            disabled={state.isLoading}
            className="px-2 py-1 text-gray-400 bg-gray-200 rounded-md cursor-pointer hover:bg-slate-400 hover:text-gray-100"
          >
            {state.isLoading ? "Submitting..." : "Post"}
          </button>
        </div>

          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePost;