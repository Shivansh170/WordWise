import React from "react";

const Wordbox = (props) => {
  return (
    <>
      <h1 className="font-indie text-4xl text-gray-900 text-center mt-5 lg:text-5xl lg:mt-4 underline">
        Dictionary
      </h1>
      <div className="lg:w-1/2 mt-10 lg:mx-auto rounded-xl border-2 bg-gray-200 border-gray-100 lg:py-5 py-2 lg:px-5 px-2 lg:text-xl">
        <h1 className="lg:mb-4 lg:text-2xl text-gray-900 font-arial">
          Type a Word to Search its meaning..
        </h1>
        <input
          className="w-full lg:border-2 p-1 lg:p-2 lg:text-gray-700 rounded-lg "
          type="text"
          value={props.word}
          onChange={props.onHandleChange}
        />
        <button
          className="w-full flex items-center justify-center gap-2 text-white py-1 lg:py-2 px-4 rounded-full mt-4 bg-gray-900 hover:bg-gray-700 transition-colors duration-200"
          type="submit"
          onClick={props.searchWord}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <span className="text-base font-medium">Search</span>
        </button>
      </div>
    </>
  );
};

export default Wordbox;
