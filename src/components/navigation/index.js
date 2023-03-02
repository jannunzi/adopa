import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserAlt, FaSearch } from 'react-icons/fa'
import { GoFileMedia } from 'react-icons/go'
import { useAuth } from '../../contexts/auth-context';

const NavigationBar = () => {
  const {pathname} = useLocation();
  const links = ['home', 'login', 'register', 'profile', 'media', 'search'];
  const icons = [<FaHome/>, <FaUserAlt/>, <FaUserAlt/>, <FaUserAlt/>, <GoFileMedia/>, <FaSearch/>];
  const {currentUser} = useAuth()
  return (
    <div>
      <div className="list-group">
        <Link to="/home" className={`${pathname.includes('home')?'active':''} list-group-item`}>
            <FaHome/>
            <span className='ms-2' style={{top: '1px'}}>
                Home
            </span>
        </Link>
        <Link
            to="/login"
            className={`
                ${pathname.includes('login')?'active':''}
                ${pathname.includes('register')?'active':''}
                ${currentUser?'d-none':''}
                list-group-item
        `}>
            <FaUserAlt/>
            <span className='ms-2' style={{top: '1px'}}>
                Login
            </span>
        </Link>
        <Link
            to="/profile"
            className={`
                ${!currentUser?'d-none':''}
                ${pathname.includes('profile')?'active':''} list-group-item`}>
            <FaUserAlt/>
            <span className='ms-2' style={{top: '1px'}}>
                Profile
            </span>
        </Link>
        <Link to="/media" className={`${pathname.includes('media')?'active':''} list-group-item`}>
            <GoFileMedia/>
            <span className='ms-2' style={{top: '1px'}}>
                Media
            </span>
        </Link>
        <Link to="/search" className={`${pathname.includes('search')?'active':''} list-group-item`}>
            <FaSearch/>
            <span className='ms-2' style={{top: '1px'}}>
                Search
            </span>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
