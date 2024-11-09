import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Username is required").min(3),
      email: yup.string().required("Email is required").email("Invalid email format"),
      password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    }),
    onSubmit: async (values) => {
      const { username, email, password } = values;
      try {
       const response = await axios.post('http://localhost:8080/createuser', { username, email, password });
       console.log(response.data);
       
        window.location.href = '/signin';
      } catch (error) {
        console.error("Error signing up:", error);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 justify-center items-center py-20"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-400 font-semibold">Sign up</h1>
        <Link to="/signin" className="text-Primary cursor-pointer">
          Have an account?
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col relative">
          <input
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="appearance-none focus:outline-none w-60 h-10 border px-2 rounded border-gray-300"
            type="text"
            placeholder="Username"
          />
          <FaUser className="absolute right-2 top-2.5 text-gray-400" />
          <div className="text-sm text-red-500">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </div>
        </div>
        <div className="flex flex-col relative">
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="appearance-none focus:outline-none w-60 h-10 border px-2 rounded border-gray-300"
            type="text"
            placeholder="Email"
          />
          <FaEnvelope className="absolute right-2 top-2.5 text-gray-400" />
          <div className="text-sm text-red-500">
            {formik.errors.email &&
              formik.touched.email &&
              formik.errors.email}
          </div>
        </div>
        <div className="flex flex-col relative">
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="appearance-none focus:outline-none w-60 h-10 border px-2 rounded border-gray-300"
            type="password"
            placeholder="Password"
          />
          <FaLock className="absolute right-2 top-2.5 text-gray-400" />
          <div className="text-sm text-red-500">
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>
        </div>
      </div>
      <button
        className="px-4 py-3 rounded-sm bg-Primary text-white font-semibold"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
};

export default Signup;
