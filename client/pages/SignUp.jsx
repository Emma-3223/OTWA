import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center hover:opacity-75'>Register</h1>

      <form action="" className='flex flex-col gap-4'>
        <input className='border rounded p-3' type="text" placeholder='username' id='username' />
        <input className='border rounded p-3' type="email" placeholder='email' id='email' />
        <input className='border rounded p-3' type="password" placeholder='password' id='password' />
    <button className='bg-slate-700  text-white p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-20'>Sign Up</button>
      </form>
      {/* If there is an existing account  */}
      <div className='flex gap-3 mt-4'>
      <p>Have an account?</p>
      <Link to='/sign-in'>
      <span className='text-blue-700'>Sign in</span>
      </Link>
      </div>
    </div>

  )
}

export default SignUp