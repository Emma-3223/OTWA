import { FaSearch } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header () {
  const { currentUser } = useSelector(state => state.user)
  return (
    <header className='bg-slate-200 shadow-md '>
      <div className='flex justify-between max-w-6xl mx-auto p-3 items-center'>
        <Link to='/'>
          <h1 className='font-bold sm:text-xl flex flex-wrap'>
            <span className='text-slate-400 text-2xl '>Re</span>
            <span className='text-slate-700 text-2xl'>nis</span>
          </h1>
        </Link>

        <form className='bg-slate-100 px-3 rounded flex items-center sm:text-red p-1'>
          <input
            type='text'
            action=''
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 rounded-sm'
          />
          <FaSearch className='text-slate-300' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/home'>
            <li className='hidden sm:inline text-slate hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate hover:underline'>
              About
            </li>
          </Link>

          <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='Profile' />
            ) : (
              <li className=' sm:inline text-slate hover:underline'>Sign In</li>
            )}
          </Link>


        </ul>
      </div>
    </header>
  )
}

export default Header
