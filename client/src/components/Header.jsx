import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    
    <header className='bg-gradient-to-r from-blue-100 to-cyan-100'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm mr-4 sm:text-xl flex flex-wrap'>
          <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>EstateEase</span>
          
        </h1>
      </Link>
      <form onSubmit={handleSubmit}
        className='bg-slate-100 p-3 rounded-lg flex gap-3 items-center'
      >
        <input
          type='text'
          placeholder='Search...'
          className='bg-transparent focus:outline-none w-24 sm:w-64'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <FaSearch className='text-slate-600' />
        </button>
      </form>
      <ul className='flex gap-5 items-center'>
      <Link to='/'>
            <li className='font-bold text-sm sm:text-lg  hidden sm:inline bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='font-bold text-sm sm:text-lg  hidden sm:inline bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent hidden sm:inline  '>
              About
            </li>
          </Link>
        <Link to='/profile'>
        {currentUser ? (
              <img
                className='rounded-full h-8 w-8 object-cover '
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (<li className=' font-bold text-sm sm:text-lg '>
              {/* <a href="#_" class="pr-1 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span class=" absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class=" absolute right-0 flex items-center justify-start w-5 h-5 duration-300 transform translate-x-full group-hover:translate-x-0 ease"> {/* <svg class="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */} 
              {/* </span> */}
              {/* <span class="items-start text-xs sm:text-lg mr-3 relative">Sign In</span> */}
              {/* </a> */} 
              <button type="button" class="mb-3 mt-3 text-xs sm:text-sm  text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
              </path></svg>Sign up <div></div></button>
              </li>
              




            )}
        </Link>
      </ul>
    </div>
  </header>
  )
}
{/*  */}