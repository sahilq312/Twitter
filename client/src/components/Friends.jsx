import React from "react";
//import logo from '../assets/Logo.png'

const posts = [
  {
    id:1,
    author:{
      name: "donald triump",
      username:"triumpdonald",
      imageUrl:'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRgeaw9Xdh8pFOVUs_-Tl4J7S1ZOqXyuGr2H9dKUulsXtNkjzQPnNnsqpKFGv0XLfkDX5DunrF8c8c_Lgg'
    }
  }
  
];

function Friends() {
  return (
    <div class=" hidden lg:block w-1/4 p-8">
      <div className="bg-slate-900 p-2 pl-4 pr-6 rounded-2xl">
        <h2 className="font-bold text-xl">Who to follow</h2>
          {posts.map((post) => (
            <article key={post.id} class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={post.author.imageUrl}
                    alt="" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {post.author.name}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {post.author.username}
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  Follow
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}

export default Friends;
