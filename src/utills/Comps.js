import React from "react";

export const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="ml-10% mr-10% flex flex-col items-start justify-start">
      <label className="font-semibold text-gray-800 tracking-wide">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder="ex - reactjs"
        type="text"
        className="mt-0 w-80vw py-2 px-3 bg-white border shadow-sm rounded-sm border-gray-400
             placeholder-slate-400 focus:outline-none focus:border-gray-500
             focus:ring-gray-500 block sm:text-sm focus:ring-1"
      />
    </div>
  );
};

export const InputArea = ({ name, label, place }) => {
  return (
    <div>
      <label className="block font-semibold text-gray-800 tracking-wide dark:text-white">
        {label}
      </label>
      <textarea
        name={name}
        rows="4"
        className="block p-2.5 w-80vw text-sm text-gray-900 rounded-none
             bg-white border shadow-sm border-gray-400
             placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write Something here..."
      ></textarea>
    </div>
  );
};

export const Button = ({ name }) => {
  return (
    <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold m-5 py-2 px-4 rounded">
      {name}
    </button>
  );
};
