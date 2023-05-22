import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Friends from './Friends'

const Home = () => {
    return (
        <div className='flex bg-black min-h-screen text-white' >
          <main className='flex mx-auto w-screen sm:w-9/12'>
            <Sidebar/>
            <div className='z-2 border border-slate-500 w-screen lg:w-5/12 max-h-screen [&::-webkit-scrollbar]:hidden overflow-y-scroll '>
            <Feed/>
            </div>
            <Friends/>
          </main>
        </div>

    )
  }
  
  export default Home