import React from 'react'
import Header from './Header'
import Create from './Create'
import Post from './Post'



const Feed = () => {
  return (
    <div className='z-2 border border-slate-500 w-screen lg:w-5/12 '>
    <Header/>
    <Create/>
    <Post/>
    </div>
  )
}

export default Feed