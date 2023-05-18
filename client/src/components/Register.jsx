import React from 'react'

const Register = () => {
  return (
    <div className='bg-black  text-white flex items-center min-h-screen '>
    <div className='relative flex flex-col m-auto space-y-8 bg-transparent shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
    <div className="flex flex-col justify-center p-8 md:p-14">
        <h1 class="bg-gradient-to-r from-pink-600 to-fuchsia-900 bg-clip-text text-transparent mb-6 h-12 text-4xl font-semibold">Register</h1>
        <form>
        <span className="font-light text-gray-400 mb-8">
          Welcome! Please enter your details
        </span>
        <div class="py-4">
          <span class="mb-2 text-md">Username</span>
          <input
            type="text"
            className="w-full p-2 bg-[#121417] rounded-md placeholder:font-light placeholder:text-gray-500"
            name="username"
            id="username"
            placeholder='Enter your name'
          />
        </div>
        <div class="py-4">
          <span class="mb-2 text-md">Email</span>
          <input
            type="text"
            className="w-full p-2 bg-[#121417] rounded-md placeholder:font-light placeholder:text-gray-500"
            name="email"
            id="email"
            placeholder='Enter your email'
          />
        </div>
        <div class="py-4">
          <span class="mb-2 text-md">Password</span>
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder='Enter your password'
            class="w-full p-2 bg-[#121417] rounded-md placeholder:font-light placeholder:text-gray-500"
          />
        </div>
        <div class="flex justify-between w-full py-4"> 
        </div>
        <button
          class="w-full bg-gradient-to-r from-pink-600 to-fuchsia-900 font-semibold text-white p-2 rounded-lg mb-6"
        >
          Register
        </button>
        </form>
        <div class="text-center text-gray-400">
          Already have an account?
          <a href='/auth/register' class="font-bold text-white">Register</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register