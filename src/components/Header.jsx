import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';

const Header = () => {

  return (
      <header className='header'>
        <nav className="nav_links">
          <h3>Avcss</h3>
          <NavLink to="/dashboard" className='nav-link' activeClassName="active"><MdDashboard className='header_icon'/> Dashboard</NavLink>
          <NavLink to="/ledger" className='nav-link' activeClassName="active"><IoIosPeople className='header_icon'/> Ledger</NavLink>
        </nav>
      </header>
  );
};

export default Header;

