

import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='bg-slate-200 shadow-md '>
            <div className='flex justify-between max-w-6xl mx-auto p-3 items-center'>
                <Link to='/'>
                    <h1 className='font-bold sm:text-xl flex flex-wrap'>
                        <span className='text-slate-400 text-2xl '>Re</span>
                        <span className='text-slate-700 text-2xl'>nis</span>
                    </h1>
                </Link>

                <form className='bg-slate-100 flex items-center sm:text-red p-3' >
                    <input type="text" action="" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 rounded-sm' />
                    <FaSearch className='text-slate-300' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/home'>
                        <li className='hidden sm:inline text-slate hover:underline'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate hover:underline'>About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li className=' sm:inline text-slate hover:underline'>Sign In</li>
                    </Link>





                </ul>
            </div>

        </header>
    )
}

export default Header





























