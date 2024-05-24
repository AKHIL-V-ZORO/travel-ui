import React, { useState } from 'react'
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [active, setactive] = useState('navbar')
  const showNavbar=()=>{
    setactive('navbar active--navbar')
  }
  const removeNavbar=()=>{
    setactive('navbar')
  }
  return (
    <section className="navbar--section">
      <header className="navbar--header">
        <div className="navbar--logo--div">
          <a href="" className="navbar--logo">
            <h1>< MdTravelExplore className="icon" />Travel</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navbar--lists flex">

            <li className='navbar--lists--item'>
              <Link to="/" className='navbar--link'>Home</Link>
            </li>

            <li className='navbar--lists--item'>
              <Link to="/" className='navbar--link'>Packages</Link>
            </li>

            <li className='navbar--lists--item'>
              <Link to="/" className='navbar--link'>Shop</Link>
            </li>
            <li className='navbar--lists--item'>
              <Link to="/"className='navbar--link'>About</Link>
            </li>

            <li className='navbar--lists--item'>
              <Link to="/" className='navbar--link'>contact</Link>
            </li>
          </ul>
          <div onClick={removeNavbar} className="navbar--close">
            < AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div onClick={()=>showNavbar()} className="navbar--toggle">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  )
}

export default Navbar
