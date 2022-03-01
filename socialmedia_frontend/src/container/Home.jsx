// Homepage container
import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import Pins from './Pins';
import { userQuery } from '../utils/data';
import { client } from '../client';
import logo from '../assets/logo.png';

const Home = () => {
  // useState hooks
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [user, setUser] = useState();
  // Get the info for the user that logged in, or clear local storage if this info doesn't exist
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  // Sanity Query to fetch the user document that matches the user that logged in using Google
  useEffect(() => {
    const query = userQuery(userInfo?.googleId);
    // get 1 specific user
    client.fetch(query)
      .then((data) => {
        setUser(data[0]);
      })
  }, [])
  

  return (
    // different sidebars depending on size of page
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      {/* Sidebar for smaller screens */}
      <div className="flex md:hidden flex-row">
        <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          {/* Pulls image from the user's Google account */}
          <img src={user?.image} alt="logo" className="w-28" />
        </Link>
      </div>
      {toggleSidebar && (
        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">

        </div>
      )}
    </div>
  )
}

export default Home