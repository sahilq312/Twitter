import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Friends from './Friends'

const Home = () => {
    return (
        <div className='flex bg-black min-h-screen text-white' >
          <main className='flex mx-auto w-screen sm:w-9/12'>
            <Sidebar/>
            <Feed/>
            <Friends/>
          </main>
        </div>

    )
  }
  
  export default Home