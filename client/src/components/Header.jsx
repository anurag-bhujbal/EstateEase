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
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
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
      <ul className='flex gap-8 items-center'>
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
            ) : (
              
              <li className=' text-slate-700 '>
              <a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Sign In</span>
</a>
       
               </li>
            )}
        </Link>
      </ul>
    </div>
  </header>
  )
}
{/*  */}