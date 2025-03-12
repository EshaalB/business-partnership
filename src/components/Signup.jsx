import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import {
  FaBriefcase,
  FaCalendar,
  FaHome,
  FaInfoCircle,
  FaLock,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-darkBlue min-h-screen  flex justify-center items-center">
      <img></img>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 ml-48  rounded shadow-md  w-9/12  "
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-darkBlue">
          Sign Up
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <FaUser className="text-23235E mr-2 text-darkBlue" />
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required." })}
              className="w-full outline-none"
            />
          </div>
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <FaEnvelope className="text-23235E mr-2 text-darkBlue" />
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address.",
                },
              })}
              className="w-full outline-none"
            />
          </div>
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <FaLock className="text-23235E mr-2 text-darkBlue" />
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              })}
              className="w-full outline-none"
            />
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block mb-2">
            Role:
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <FaBriefcase className="text-23235E mr-2 text-darkBlue" />
            <select
              id="role"
              {...register("role", { required: "Role is required." })}
              className="w-full outline-none"
            >
              <option value="investor">Investor</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="skilled_person">Skilled Person</option>
            </select>
          </div>
          {errors.role && (
            <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="birthDate" className="block mb-2">
            Birth Date:
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <FaCalendar className="text-23235E mr-2 text-darkBlue" />
            <input
              id="birthDate"
              type="date"
              {...register("birthDate", {
                required: "Birth Date is required.",
              })}
              className="w-full outline-none"
            />
          </div>
          {errors.birthDate && (
            <p className="text-red-600 text-sm mt-1">
              {errors.birthDate.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">
            Gender:
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <select
              id="gender"
              {...register("gender", { required: "Gender is required." })}
              className="w-full outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-600 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">
            Address:
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <FaHome className="text-23235E mr-2 text-darkBlue" />
            <textarea
              id="address"
              {...register("address", { required: "Address is required." })}
              className="w-full outline-none"
            />
          </div>
          {errors.address && (
            <p className="text-red-600 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="aboutYourself" className="block mb-2">
            About Yourself:
          </label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <FaInfoCircle className="text-23235E mr-2 text-darkBlue" />
            <textarea
              id="aboutYourself"
              {...register("aboutYourself", {
                required: "About Yourself is required.",
              })}
              className="w-full outline-none"
            />
          </div>
          {errors.aboutYourself && (
            <p className="text-red-600 text-sm mt-1">
              {errors.aboutYourself.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-darkBlue text-white py-2 px-4 rounded hover:bg-white hover:text-darkBlue transition duration-300 "
        >
          Sign Up
        </button>
        <Link to="/login">
          {" "}
          <button
            type="button"
            className="bg-darkBlue text-white py-2 px-4 rounded hover:bg-white hover:text-darkBlue transition duration-300 ml-4"
          >
            Login
          </button>{" "}
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
