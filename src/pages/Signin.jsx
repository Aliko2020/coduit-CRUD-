import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
    validationSchema: yup.object({
      email: yup.string().required().email('email not valid'),
      password: yup.string().required().min(8)
    })
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 justify-center items-center py-20"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-400 font-semibold">Sign in</h1>
        <Link to="/signup" className="text-[#5cb95d] cursor-pointer">
          Need an account?
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="appearance-none focus:outline-none w-60 h-10 border px-2 rounded border-gray-300"
            type="text"
            placeholder="Email"
          />
          <div className="text-sm text-red-600">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
        </div>
        <div className="flex flex-col">
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="appearance-none focus:outline-none w-60 h-10 border px-2 rounded border-gray-300"
            type="text"
            placeholder="Password"
          />
          <div className="text-sm text-red-600">
            {formik.errors.password && formik.touched.password && formik.errors.password}
          </div>
        </div>
      </div>
      <button
        className="px-4 py-3 rounded-sm bg-[#5cb95d] text-white font-semibold"
        type="button"
      >
        Sign in
      </button>
    </form>
  );
};

export default Signin;
