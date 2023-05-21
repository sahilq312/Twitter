import React from 'react';

const Post = () => {
  return (
    <div className="max-w-full mx-auto border border-slate-700 shadow-md p-4">
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://placeimg.com/100/100/people"
          alt="User Avatar"
        />
        <div>
          <p className="font-bold">John Doe</p>
          <p className="text-gray-600 text-sm">May 21, 2023</p>
        </div>
      </div>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vulputate, ipsum non ultricies aliquet, leo nisl elementum odio, eu
        egestas arcu metus at elit. Nullam pharetra vestibulum lacus, non
        fringilla tortor porttitor non. In consectetur justo sit amet risus
        semper.
      </p>
      <img
        className="mt-4 rounded-lg w-full object-cover"
        src="https://placeimg.com/600/400/nature"
        alt=""
      />
      <div className="flex items-center justify-between mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Like
        </button>
        <div>
          <button className="text-gray-600 hover:text-blue-500 mr-2">
            <svg
              className="w-5 h-5 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 9a6 6 0 00-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6a6 6 0 00-6-6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9m16 0h2"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-red-500">
            <svg
              className="w-5 h-5 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
