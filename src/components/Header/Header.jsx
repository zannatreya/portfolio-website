import React from 'react';
import { Link } from 'react-router-dom';
const home = <Link to={'/home'} >HOME</Link>
const projects = <Link to={'/projects'} >PROJECTS</Link>
const contact = <Link to={'/contact'} >CONTACT</Link>
const about = <Link to={'/about'} >ABOUT</Link>
const blogs = <Link to={'/blogs'} >BLOGS</Link>
// const resume = <a download={'Zannatul Binta Bahar Resume'} href="../../../public/resume/Zannatul Binta Bahar resume.pdf">RESUME</a>


const Header = () => {
  return (
    <div className="navbar bg-primary lg:px-20 px-5 py-4 text-white animate__animated animate__fadeInDown">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary bg-opacity-80">
            <li>{home}</li>
            <li>{projects}</li>
            <li>{about}</li>
            <li>{contact}</li>
            <li>{blogs}</li>
            {/* <li>{resume}</li> */}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case pl-0  text-2xl">
          <span className='text-secondary'>{'< '}</span> {'Zannat'} <span className='text-secondary'>{' />'}</span> </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 ">
          <li>{home}</li>
          <li>{projects}</li>
          <li>{about}</li>
          <li>{contact}</li>
          <li>{blogs}</li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <p className='btn btn-outline btn-secondary'>{resume}</p> */}
      </div>
    </div>
  );
};

export default Header;