import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwtToken');
    setIsAuthenticated(false);
  };

  const handleHomeClick = () => {
    navigate('/');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  }

  return (
    <div className="navbar bg-blue-600 fixed top-0 left-0 right-0 z-10">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-white text-xl"
          onClick={handleHomeClick}
          onKeyDown={handleKeyDown}
          >
            Dashboard
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
        <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost btn-circle avatar" 
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li>
                <a href="#"
                  onClick={handleLogout}
                  onKeyDown={handleKeyDown}
                  tabIndex="0"
                  >
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
