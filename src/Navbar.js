import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
   
      <nav className="navbar navbar-expand-lg  bg-dark fixed">
        <Link className="navbar-brand content" to="/">NETFLIX</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active ">
              <Link className="navbar-brand content  " to="/home" >POPLUAR</Link>
            </li>
            <li className="nav-item ">
              <Link className="navbar-brand content " to="/toprated">TOPRATED</Link>
            </li>
            <li className="nav-item ">
              <Link className="navbar-brand content " to="/upcoming">UPCOMING</Link>
            </li>
            <li className="nav-item ">
              <Link className="navbar-brand content " to="/auth">Login</Link>
            </li>
           
          </ul>
        </div>
      </nav> 
      
    </>
  )
}
