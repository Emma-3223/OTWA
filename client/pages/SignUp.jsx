import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value
      }
    )
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      // fetch: can be put,delete,get and post
      const res = await fetch('/api/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // Sending to the backend
          body: JSON.stringify(formData),
        });
      setLoading
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      // if all is well
      setLoading(false)
      setError(null)
      navigate('/sign-in')
    } catch (error) {
      setError(data.message);
      console.log(error)
      setLoading(false);
    }

  }



  return (
    <div className='max-w-lg mx-auto p-3 mt-5'>
      <h1 className='text-3xl font-semibold text-center hover:opacity-75'>Register</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-5'>
        <input className='border rounded p-3' type="text" placeholder='username' id='username' onChange={handleChange} />
        <input className='border rounded p-3' type="email" placeholder='email' id='email' onChange={handleChange} />
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700  text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-20' >{loading ? 'Please wait...:' : 'Sign Up'}</button>
      </form>
      {/* If there is an existing account  */}
      <div className='flex gap-3 mt-4'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500' mt-5>{error}</p>}
    </div>

  )
}

export default SignUp