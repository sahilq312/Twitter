import React from 'react'
import {HiOutlineUser} from 'react-icons/hi'
import {BiImage} from 'react-icons/bi'
import {MdOutlineGifBox} from 'react-icons/md'
import {BsEmojiSmile} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
const Create = () => {
  return (
    <div className='border border-slate-700'>
    <div className='p-4 flex space-x-5 '>
            <HiOutlineUser className='m-2'/>
        <textarea  placeholder='what is happening?!' className='w-full placeholder:text-xl resize-none bg-transparent overflow-hidden outline-none'></textarea>
    </div>
    <div className='flex justify-around pb-4'>
    <div className='flex text-blue-500 space-x-4 pt-3'>
        <BiImage/>
        <MdOutlineGifBox/>
        <BsEmojiSmile/>
        <GoLocation/>
    </div>
    <button className=' rounded-full p-2 bg-blue-500 font-semibold text-slate-200'>Tweet</button>
    </div>
    </div>
    
  )
}

export default Create