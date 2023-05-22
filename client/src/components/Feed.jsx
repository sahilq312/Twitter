import React from 'react'
import Header from './Header'
import Create from './Create'
import Post from './Post'



const Feed = () => {

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
    <>
    <Header/>

    <Create/>
    
    {posts?.map((post) => (
            <Post className="overflow-y-scroll" post={post} key={post._id}/>
          ))}
          </>
  )
}

export default Feed