import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().email('email not valid'),
      password: yup.string().required().min(8, 'Password must be at least 8 characters'),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        const response = await axios.post('http://localhost:8080/login', { email, password });
        localStorage.setItem('token', response.data.token);
        // Redirect to a protected route or perform other actions
        window.location.href = '/home';
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 justify-center items-center py-20"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-400 font-semibold">Sign in</h1>
        <Link to="/signup" className="text-Primary cursor-pointer">
          Need an account?
        </Link>
      </div>
      <div className="flex flex-col gap-4">
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
          <div className="text-sm text-red-600">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
        </div>
        <div className="flex flex-col relative">
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="appearance-none focus:outline-none w-60 h-10 border px-2 rounded border-gray-300"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <div
            className="absolute right-2 top-2.5 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash className="text-gray-400"/> : <FaEye className="text-gray-400"/>}
          </div>
          <div className="text-sm text-red-600">
            {formik.errors.password && formik.touched.password && formik.errors.password}
          </div>
        </div>
      </div>
      <button
        className="px-4 py-3 rounded-sm bg-Primary text-white font-semibold"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default Signin;
