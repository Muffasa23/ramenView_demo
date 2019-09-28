import React from 'react';
import logo from '../../img/logo.png';
import Dropdown from '../Dropdown';

const Header = () => (
  <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
    <div className="flex justify-between px-4 py-3 xl:w-64 xl:bg-gray-900 xl:justify-center xl:py-5">
      
      {/* Logo */}
      <div className="flex">
        <img src={logo} alt="logo" className="h-10 w-auto mr-4"/>
        <div className="flex font-mono font-bold lg:flex-row flex-col text-orange-400 lg:items-center items-start justify-center">
          <span className="mr-2">NO RAMEN</span>
          <span>NO LIFE</span>
        </div>
      </div>

      {/* Hamburger menu for sm */}
      <div className="flex sm:hidden">
        <button type="button" className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
          <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {/* <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/> */}
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    
    </div>

    <nav className="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between">
      
      {/* Search */}
      <div className="hidden xl:block xl:relative xl:max-w-xs xl:w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
        </div>
        <input className="block w-full border border-transparent bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2" placeholder="Search by keywords" />
      </div>

      <div className="sm:flex sm:items-center">
        
        <div className="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0 hidden sm:block">

          {/* <div className="flex items-center sm:hidden">
            <img className="h-10 w-10 object-cover rounded-full border-2 border-gray-600" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="head_photo" />
            <span className="ml-4 font-semibold text-gray-200 sm:hidden">Isla Schoger</span>
          </div>

          <div class="mt-5 sm:hidden">
            <a href="#account" className="block text-gray-400 hover:text-white">Account settings</a>
            <a href="#sign-out" className="mt-3 block text-gray-400 hover:text-white">Sign out</a>
          </div> */}

          <span className="block h-8 w-8 overflow-hidden rounded-full border-2">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="head_photo" />
          </span>
        </div>

      </div>
    

    </nav>    
  </header>
)

export default Header;