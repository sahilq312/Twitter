import React from 'react';

function Friends() {
  // Placeholder array of posts
  const posts = [
    {
      id: 1,
      author: {
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png',
        name: 'Cristiano Ronaldo',
        username: '@CristianoCR7',
      },
    },
    {
      id: 2,
      author: {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
        name: 'Elon Musk',
        username: '@elonmusk',
      },
    },
    {
      id: 3,
      author: {
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTuGrsmsMQETvoETOqJcN0Uo1yQowXDGvBhR6FYUPXKZq0Yo5YQAXYTfzGuXJfHbb_3MghLrbLm7SxTQCA&psig=AOvVaw2k7uLZAjptpZu2IRg7OXvN&ust=1684748619980000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjijJ2Qhv8CFQAAAAAdAAAAABAL',
        name: 'Donald Triump',
        username: '@donaldtriump',
      },
    },
  ];

  return (
    <div className="hidden lg:block w-1/4 p-8">
      <div className="bg-slate-900 p-2 pl-4 pr-6 rounded-2xl">
        <h2 className="font-bold text-xl">Who to follow</h2>
        {posts.map((post) => (
          <article key={post.id} className="py-3 sm:py-4 cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={post.author.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-md font-semibold text-gray-900 truncate dark:text-white">
                  {post.author.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {post.author.username}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-black bg-white rounded-full p-2 cursor-pointer">
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

