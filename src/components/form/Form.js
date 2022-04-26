import React from "react";

const Form = () => {
  return (
    <form className="bg-white rounded-xl p-12 shadow-xl">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-base font-semibold text-gray-600 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-slate-100 focus:border-none text-gray-900 text-base font-semibold rounded  block w-full p-3.5"
          placeholder="Email@example.org"
          required=""
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-base font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-slate-100 focus:border-none text-gray-900 text-base font-semibold rounded  block w-full p-3.5"
          required=""
          placeholder="Your Password"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="countries"
          className="block mb-2 text-base font-medium text-gray-600"
        >
          Business Category
        </label>
        <select
          id="countries"
          className="bg-slate-100 text-gray-400 font-semibold text-base rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
        >
          <option>Select Business Category</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>
      <button
        type="submit"
        className="text-white font-semibold bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg w-full px-5 py-4 text-center"
      >
        Get Started
      </button>
      <div className="mt-6 flex gap-x-4 align-top">
        <img className="w-6 h-6 mt-1" src="/assets/icons/award.png" alt="" />
        <p className="text-xs text-gray-400">
          Licensed and regulated by The Monetary Authority of Singapore, Hong
          Kong Customs and Excise Department and Bank Indonesia.
        </p>
      </div>
    </form>
  );
};

export default Form;
