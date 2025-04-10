import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  signInStart,
  signInSuccess,
  signInFailure
} from '../src/redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx'

function SignIn () {
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      dispatch(signInStart())
      // fetch: can be put,delete,get and post
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Sending to the backend
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return
      }
      // if all is well
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className='max-w-lg mx-auto p-3 mt-5'>
      <h1 className='text-3xl font-semibold text-center hover:opacity-75'>
        Sign In{' '}
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-5'>
        <input
          className='border rounded p-3'
          type='email'
          placeholder='email'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-slate-700  text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-20'
        >
          {loading ? 'Please wait...:' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      {/* If there is an existing account  */}
      <div className='flex gap-3 mt-4'>
        <p>Dont have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && (
        <p className='text-red-500' mt-5>
          {error}
        </p>
      )}
    </div>
  )
}

export default SignIn
