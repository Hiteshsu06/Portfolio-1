import React from 'react';
import {NavLink,Outlet} from 'react-router-dom';
import './Navbar.css';
import resume from './Btechresume.pdf';


function Navbar() {
  return (
    <><div className="nav-main">
          <div className="nav-left">
              <div className="nav-left-1"><span className='nav-left-1-1'>H</span>ITESH</div>
              <div className="nav-left-2">TOGGLE</div>
          </div>
          <div className="nav-right">
              <div className="nav-right-1">
                  <ul>
                      <li><NavLink exact activeClassName="active" to="/Home">Home</NavLink></li>
                      <li><NavLink exact activeClassName="active" to="/Services">Services</NavLink></li>
                      <li><NavLink exact activeClassName="active" to="/Contact">Contact</NavLink></li>
                      <li><NavLink exact activeClassName="active" to="/About">About</NavLink></li>
                  </ul>
              </div>
              <a href={resume} download>
              <button className="nav-right-2">
                  Resume
              </button>
              </a>
          </div>
      </div>
      <> <Outlet /> </></>
  )
}
export default Navbar;
